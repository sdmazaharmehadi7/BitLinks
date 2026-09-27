import Link from "next/link"
import { Database, Cpu, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About BitLinks — Modern URL Shortener & Link Management",
  description: "Learn about BitLinks, our mission, cloud architecture, and commitment to fast, reliable link shortening.",
}

export default function AboutPage() {
  return (
    <main className="flex-1 py-14 sm:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Our Mission &amp; Technology</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            About BitLinks
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Engineered to simplify how people share links on the web — without bloated trackers, paywalls, or unnecessary complexity.
          </p>
        </div>

        {/* Story Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Why We Built BitLinks
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">
            Modern internet links have become bloated with tracking tags, affiliate parameters, and endless URL segments. When shared in SMS, presentation slides, or social media bios, they look chaotic and easily break across line wraps.
          </p>
          <p className="text-slate-600 leading-relaxed text-base">
            Existing URL shorteners often force users through intrusive sign-up flows, impose artificial monthly limits, or slow down visitors with interstitial ads. <strong>BitLinks</strong> was created to deliver a clean, blazingly fast alternative: instant link shortening with optional custom aliases and zero friction.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Built with Modern Full-Stack Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Next.js &amp; React</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                App Router architecture with lightning-fast Server-Side Rendering (SSR) for low-latency routing and redirects.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">MongoDB Database</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                High-throughput document storage ensuring sub-millisecond document lookups for instant dynamic short URL redirection.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Tailwind CSS</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Clean, utility-first styling delivering accessible, responsive, and mobile-friendly user interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-indigo-900 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Try BitLinks Today</h2>
            <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
              Start creating clean, memorable URLs right now. It takes less than 3 seconds.
            </p>
            <div className="pt-2">
              <Link
                href="/#shorten-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-900 font-semibold text-sm hover:bg-indigo-50 transition-colors shadow-md"
              >
                Shorten a URL Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
