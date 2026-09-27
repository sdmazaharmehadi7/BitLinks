import { Clipboard, Wand2, Share2 } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Paste",
      description: "Paste your lengthy target link into the shortener input field. Any valid web URL is supported.",
      icon: Clipboard,
      accent: "from-blue-500/10 to-indigo-500/10 text-indigo-600 border-indigo-100",
    },
    {
      step: "02",
      title: "Shorten",
      description: "BitLinks generates a compact slug instantly or lets you specify a custom branded alias.",
      icon: Wand2,
      accent: "from-purple-500/10 to-violet-500/10 text-purple-600 border-purple-100",
    },
    {
      step: "03",
      title: "Share",
      description: "Copy your clean short link or scan the QR code to share across social media, SMS, or emails.",
      icon: Share2,
      accent: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-100",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-50/80 border-t border-slate-200/60 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-3">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            How BitLinks Works
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            No registration, no captchas, no credit cards. Shorten links in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} border flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-200 font-mono group-hover:text-indigo-200 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-medium text-indigo-600">
                  <span>Step {index + 1} of 3</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
