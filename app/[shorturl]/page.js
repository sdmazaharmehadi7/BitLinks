import { redirect, notFound } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export const dynamic = "force-dynamic"

export default async function Page({ params }) {
    const { shorturl } = await params

    if (!shorturl) {
        notFound()
    }

    let targetUrl = null

    try {
        const client = await clientPromise
        const db = client.db("bitlinks")
        const collection = db.collection("url")

        const doc = await collection.findOne({ shorturl: shorturl })
        
        if (doc && doc.url) {
            targetUrl = doc.url.trim()
            if (!/^https?:\/\//i.test(targetUrl)) {
                targetUrl = `https://${targetUrl}`
            }
        }
    } catch (error) {
        // If error is Next.js redirect, rethrow it
        if (error?.digest?.startsWith("NEXT_REDIRECT")) {
            throw error
        }
        console.error("Database lookup error for shorturl:", shorturl, error)
        notFound()
    }

    if (targetUrl) {
        redirect(targetUrl)
    }

    // Short URL not found in MongoDB
    notFound()
}