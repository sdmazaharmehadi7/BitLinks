import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const siteUrl = process.env.NEXT_PUBLIC_HOST || "https://bitlinks.dev"

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BitLinks — Fast, Free & Modern URL Shortener",
    template: "%s | BitLinks",
  },
  description:
    "Shorten links and share smarter. BitLinks is a fast, modern, and free URL shortener with custom aliases, instant QR codes, and lightning-fast redirects.",
  keywords: [
    "URL shortener",
    "free URL shortener",
    "link shortener",
    "shorten URL",
    "short link generator",
    "custom URL shortener",
    "create short links",
    "free link shortener",
  ],
  authors: [{ name: "BitLinks Team" }],
  creator: "BitLinks",
  publisher: "BitLinks",
  verification: {
  google: "BSNRaxyNYwPNCYTEiD4No5rRHNVnEBXj_ds-BgLJy38",
},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "BitLinks — Fast, Free & Modern URL Shortener",
    description:
      "Transform long URLs into compact, memorable links in seconds. Free forever, custom aliases, QR codes, and fast redirects.",
    siteName: "BitLinks",
  },
  twitter: {
    card: "summary_large_image",
    title: "BitLinks — Fast, Free & Modern URL Shortener",
    description:
      "Transform long URLs into compact, memorable links in seconds. Free forever, custom aliases, QR codes, and fast redirects.",
    creator: "@bitlinks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
}

export const viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
