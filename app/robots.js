export default function robots() {
  const host = process.env.NEXT_PUBLIC_HOST || "https://bitlinks.dev"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${host}/sitemap.xml`,
  }
}
