import UrlShortener from "../Components/UrlShortener"
import { Sparkles, Shield, Zap, Globe } from "lucide-react"

export const metadata = {
  title: "Shorten a URL — BitLinks Link Generator",
  description: "Create custom short links and QR codes instantly with BitLinks URL shortener. No sign-up required.",
}

export default function ShortenPage() {
  return (
    <main className="flex-1 py-12 sm:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Link Generator Workstation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Generate Your Short URLs
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Paste your target URL below to generate a compact, shareable link or customize it with a unique alias.
          </p>
        </div>

        {/* Shortener Tool */}
        <UrlShortener />

        {/* Pro Tips Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Quick Clipboard Paste</h3>
            <p className="text-xs text-slate-500 mt-1">Use the paste button or press Ctrl/Cmd+V to quickly paste URLs.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Custom Slugs</h3>
            <p className="text-xs text-slate-500 mt-1">Leave blank for auto-generation or choose your own memorable text.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">Private &amp; Secure</h3>
            <p className="text-xs text-slate-500 mt-1">Links are stored safely in MongoDB and history is stored in your browser.</p>
          </div>
        </div>
      </div>
    </main>
  )
}