import clientPromise from "@/lib/mongodb"
import crypto from "crypto"

function generateRandomSlug(length = 6) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    const bytes = crypto.randomBytes(length)
    for (let i = 0; i < length; i++) {
        result += chars[bytes[i] % chars.length]
    }
    return result
}

function isValidUrl(string) {
    try {
        const urlToTest = string.startsWith("http://") || string.startsWith("https://") 
            ? string 
            : `https://${string}`
        const parsed = new URL(urlToTest)
        return parsed.protocol === "http:" || parsed.protocol === "https:"
    } catch {
        return false
    }
}

export async function POST(request) {
    try {
        const body = await request.json()

        let rawUrl = (body.url || "").trim()
        let customAlias = (body.shorturl || "").trim()

        // Validate destination URL
        if (!rawUrl) {
            return Response.json(
                { success: false, error: true, message: "Destination URL is required" },
                { status: 400 }
            )
        }

        if (!isValidUrl(rawUrl)) {
            return Response.json(
                { success: false, error: true, message: "Please enter a valid web URL (e.g., https://example.com)" },
                { status: 400 }
            )
        }

        // Normalize URL to always include protocol
        if (!/^https?:\/\//i.test(rawUrl)) {
            rawUrl = `https://${rawUrl}`
        }

        const client = await clientPromise
        const db = client.db("bitlinks")
        const collection = db.collection("url")

        let finalShortUrl = ""

        if (customAlias) {
            // Sanitize custom alias: only alphanumeric, dashes, and underscores
            const sanitizedAlias = customAlias.replace(/[^a-zA-Z0-9-_]/g, "")
            
            if (sanitizedAlias.length < 2) {
                return Response.json(
                    { success: false, error: true, message: "Custom alias must be at least 2 characters long" },
                    { status: 400 }
                )
            }

            if (sanitizedAlias.length > 50) {
                return Response.json(
                    { success: false, error: true, message: "Custom alias cannot exceed 50 characters" },
                    { status: 400 }
                )
            }

            // Check if alias already exists (preserving exact existing response format)
            const doc = await collection.findOne({ shorturl: sanitizedAlias })
            if (doc) {
                return Response.json({ success: false, error: true, message: "Url Already Exists" })
            }

            finalShortUrl = sanitizedAlias
        } else {
            // Generate unique random slug
            let attempts = 0
            let uniqueFound = false

            while (!uniqueFound && attempts < 10) {
                const slug = generateRandomSlug(6)
                const existing = await collection.findOne({ shorturl: slug })
                if (!existing) {
                    finalShortUrl = slug
                    uniqueFound = true
                }
                attempts++
            }

            if (!finalShortUrl) {
                finalShortUrl = Date.now().toString(36)
            }
        }

        // Insert into MongoDB collection
        await collection.insertOne({
            url: rawUrl,
            shorturl: finalShortUrl,
            createdAt: new Date(),
        })

        return Response.json({
            success: true,
            error: false,
            message: "Url Generated Successfully",
            shorturl: finalShortUrl,
            url: rawUrl,
        })
    } catch (error) {
        console.error("API generate error:", error)
        return Response.json(
            { success: false, error: true, message: "Unable to shorten URL right now. Please try again later." },
            { status: 500 }
        )
    }
}