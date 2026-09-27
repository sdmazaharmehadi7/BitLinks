export default function manifest() {
  return {
    name: "BitLinks — Modern URL Shortener",
    short_name: "BitLinks",
    description: "Fast, modern, and free URL shortener with custom aliases and QR codes.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
