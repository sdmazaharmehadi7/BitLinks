import { Zap, Tag, ShieldCheck, Smartphone, MousePointerClick, RefreshCw } from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "Fast URL Shortening",
      description: "Instantly convert unwieldy, complicated web addresses into sleek, compact shareable links.",
      icon: Zap,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      title: "Custom Short Links",
      description: "Define personalized, readable aliases for marketing campaigns, resumes, social media, and presentations.",
      icon: Tag,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      title: "Reliable Server-Side Redirects",
      description: "Direct lookups powered by MongoDB ensure near-instantaneous routing directly to the target webpage.",
      icon: RefreshCw,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "Clean & Intuitive Interface",
      description: "No clutter, no intrusive popups, and no sign-up wall. Shorten your links with zero friction.",
      icon: MousePointerClick,
      color: "text-violet-600 bg-violet-50 border-violet-100",
    },
    {
      title: "Input Validation & Safety",
      description: "Comprehensive URL syntax checks and sanitization prevent broken links, phishing errors, and invalid redirects.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Mobile-First & Accessible",
      description: "Crafted to work flawlessly across smartphones, tablets, laptops, and large desktop screens.",
      icon: Smartphone,
      color: "text-rose-600 bg-rose-50 border-rose-100",
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-28 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-3">
            Built For Speed & Clarity
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Features Designed for Simplicity
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Everything you need in a modern link shortener without the unnecessary bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 sm:p-8 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-200 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 group-hover:scale-105 transition-transform duration-200 ${feature.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
