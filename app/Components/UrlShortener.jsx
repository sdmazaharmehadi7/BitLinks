"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import {
  Link2,
  Copy,
  Check,
  ExternalLink,
  QrCode,
  Sparkles,
  ArrowRight,
  RotateCcw,
  AlertCircle,
  Loader2,
  ClipboardPaste,
  History,
  Trash2,
  X
} from "lucide-react"
import QRCode from "qrcode"

export default function UrlShortener({ initialUrl = "" }) {
  const [url, setUrl] = useState(initialUrl)
  const [shorturl, setShorturl] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [result, setResult] = useState(null)
  const [copied, setCopied] = useState(false)
  const [qrDataUrl, setQrDataUrl] = useState("")
  const [showQr, setShowQr] = useState(false)
  const [recentLinks, setRecentLinks] = useState([])
  const [hostDomain, setHostDomain] = useState("bitlinks.dev")

  // Initialize domain and recent links from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHostDomain(window.location.host)
      try {
        const saved = localStorage.getItem("bitlinks_history")
        if (saved) {
          setRecentLinks(JSON.parse(saved))
        }
      } catch (e) {
        console.error("Failed to read history from localStorage", e)
      }
    }
  }, [])

  // Auto-generate QR code when result changes
  useEffect(() => {
    if (result?.shortUrl) {
      QRCode.toDataURL(result.shortUrl, {
        width: 240,
        margin: 2,
        color: {
          dark: "#0f172a",
          light: "#ffffff",
        },
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error("QR Code error:", err))
    }
  }, [result])

  const saveToHistory = (item) => {
    try {
      const updated = [item, ...recentLinks.filter((l) => l.shortUrl !== item.shortUrl)].slice(0, 5)
      setRecentLinks(updated)
      if (typeof window !== "undefined") {
        localStorage.setItem("bitlinks_history", JSON.stringify(updated))
      }
    } catch (e) {
      console.error("Failed to save to localStorage", e)
    }
  }

  const clearHistory = () => {
    setRecentLinks([])
    if (typeof window !== "undefined") {
      localStorage.removeItem("bitlinks_history")
    }
  }

  const handlePaste = async () => {
    try {
      if (navigator.clipboard) {
        const text = await navigator.clipboard.readText()
        if (text) {
          setUrl(text.trim())
          setErrorMessage("")
        }
      }
    } catch (err) {
      console.warn("Clipboard access denied or unsupported", err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage("")

    const trimmedUrl = url.trim()
    if (!trimmedUrl) {
      setErrorMessage("Please enter a long URL to shorten.")
      const input = document.getElementById("url-input")
      if (input) input.focus()
      return
    }

    setLoading(true)

    try {
      let normalizedUrl = trimmedUrl
      if (!/^https?:\/\//i.test(normalizedUrl)) {
        normalizedUrl = `https://${normalizedUrl}`
      }

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: normalizedUrl,
          shorturl: shorturl.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok || data.error) {
        setErrorMessage(data.message || "Failed to generate short URL. Please try again.")
        setLoading(false)
        return
      }

      // Generate host URL
      const origin = typeof window !== "undefined" ? window.location.origin : (process.env.NEXT_PUBLIC_HOST || "")
      const generatedCode = data.shorturl || shorturl.trim()
      const fullShortUrl = `${origin}/${generatedCode}`

      const linkRecord = {
        originalUrl: normalizedUrl,
        shortUrl: fullShortUrl,
        slug: generatedCode,
        createdAt: new Date().toLocaleDateString(),
      }

      setResult(linkRecord)
      saveToHistory(linkRecord)
      setUrl("")
      setShorturl("")
      setShowQr(false)
    } catch (error) {
      console.error("Shorten request error:", error)
      setErrorMessage("A network error occurred. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div id="shorten-form" className="w-full max-w-3xl mx-auto scroll-mt-24">
      {/* Shortener Container Card */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/80 p-5 sm:p-8 transition-all">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Main URL Input */}
          <div className="space-y-1.5">
            <label htmlFor="url-input" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Enter Long URL
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-slate-400 pointer-events-none">
                <Link2 className="w-5 h-5" />
              </div>
              <input
                id="url-input"
                name="url"
                type="text"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value)
                  if (errorMessage) setErrorMessage("")
                }}
                placeholder="https://example.com/very-long-article-or-resource-path..."
                className="w-full pl-11 pr-24 py-3.5 sm:py-4 bg-slate-50/70 hover:bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none text-sm sm:text-base transition-all"
                disabled={loading}
              />
              <div className="absolute right-2.5 flex items-center gap-1">
                {url ? (
                  <button
                    type="button"
                    onClick={() => setUrl("")}
                    className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
                    title="Clear input"
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handlePaste}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-indigo-600 bg-slate-200/60 hover:bg-indigo-50 rounded-lg transition-colors"
                    title="Paste from clipboard"
                  >
                    <ClipboardPaste className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Paste</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Custom Alias Input */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between">
              <label htmlFor="alias-input" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Custom Alias <span className="text-slate-400 normal-case font-normal">(Optional)</span>
              </label>
              <span className="text-xs text-slate-400">e.g., &quot;my-promo&quot;</span>
            </div>
            <div className="flex items-stretch rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 focus-within:bg-white focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all overflow-hidden">
              <span className="inline-flex items-center px-3.5 sm:px-4 text-xs sm:text-sm font-medium text-slate-500 bg-slate-100/70 border-r border-slate-200 select-none">
                {hostDomain}/
              </span>
              <input
                id="alias-input"
                name="shorturl"
                type="text"
                value={shorturl}
                onChange={(e) => setShorturl(e.target.value)}
                placeholder="custom-slug"
                className="flex-1 px-3 sm:px-4 py-3 bg-transparent text-slate-900 placeholder:text-slate-400 outline-none text-sm sm:text-base"
                disabled={loading}
              />
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200/80 text-red-700 text-sm flex items-start gap-2.5 animate-fade-in">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Action */}
          <button
            id="shorten-submit-btn"
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 rounded-2xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md shadow-indigo-600/25 cursor-pointer text-sm sm:text-base"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Shortening Link...
              </>
            ) : (
              <>
                <Link2 className="w-5 h-5 text-indigo-200 -rotate-45" />
                Shorten URL
              </>
            )}
          </button>
        </form>

        {/* Success Result Component */}
        {result && (
          <div className="mt-6 pt-6 border-t border-slate-200/80 animate-fade-in space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Your Shortened URL is Ready
              </span>
              <button
                type="button"
                onClick={() => setResult(null)}
                className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Shorten Another
              </button>
            </div>

            {/* Generated Link Display */}
            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="overflow-hidden">
                <p className="text-base sm:text-lg font-semibold text-indigo-950 font-mono truncate">
                  {result.shortUrl}
                </p>
                <p className="text-xs text-slate-500 truncate mt-0.5">
                  Target: {result.originalUrl}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopy(result.shortUrl)}
                  className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    copied
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-600/20"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Link
                    </>
                  )}
                </button>

                <a
                  href={result.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition-colors shadow-sm"
                  title="Open shortened link"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowQr(!showQr)}
                  className={`p-2 rounded-xl border transition-colors shadow-sm ${
                    showQr
                      ? "bg-indigo-100 border-indigo-300 text-indigo-700"
                      : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                  title="Toggle QR Code"
                >
                  <QrCode className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* QR Code view */}
            {showQr && qrDataUrl && (
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center gap-2 animate-fade-in">
                <span className="text-xs font-semibold text-slate-600">Scan QR Code</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrDataUrl}
                  alt="QR code for short URL"
                  className="w-44 h-44 rounded-xl border border-slate-100 shadow-inner"
                />
                <a
                  href={qrDataUrl}
                  download={`bitlinks-qr-${result.slug}.png`}
                  className="text-xs text-indigo-600 hover:text-indigo-700 font-medium hover:underline mt-1"
                >
                  Download QR Code (PNG)
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Recent Links History */}
      {recentLinks.length > 0 && (
        <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/80 p-5 sm:p-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <History className="w-4 h-4 text-indigo-600" />
              <span>Recent Links (This Browser)</span>
            </div>
            <button
              onClick={clearHistory}
              type="button"
              className="text-xs text-slate-400 hover:text-red-600 flex items-center gap-1 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {recentLinks.map((item, idx) => (
              <div
                key={`${item.slug}-${idx}`}
                className="py-3 flex items-center justify-between gap-3 text-sm"
              >
                <div className="overflow-hidden pr-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={item.shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium font-mono text-indigo-600 hover:underline truncate"
                    >
                      {item.shortUrl}
                    </a>
                    {item.createdAt && (
                      <span className="text-xs text-slate-400 shrink-0">
                        {item.createdAt}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {item.originalUrl}
                  </p>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleCopy(item.shortUrl)}
                    className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={item.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    title="Open link"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
