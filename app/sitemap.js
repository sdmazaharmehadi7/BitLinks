export default function sitemap() {
  const host = process.env.NEXT_PUBLIC_HOST || "https://bitlinks.dev"
  const currentDate = new Date().toISOString()

  return [
    {
      url: host,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${host}/shorten`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${host}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
