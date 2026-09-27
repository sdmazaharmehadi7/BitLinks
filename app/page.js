import UrlShortener from "./Components/UrlShortener"
import HowItWorks from "./Components/HowItWorks"
import Features from "./Components/Features"
import SeoContent from "./Components/SeoContent"
import Faq from "./Components/Faq"
import CtaBanner from "./Components/CtaBanner"
import { BitLinksLogoIcon } from "./Components/BitLinksLogo"
import { ShieldCheck, Zap, Globe } from "lucide-react"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://bitlinks.dev/#website",
        "url": "https://bitlinks.dev",
        "name": "BitLinks",
        "description": "Fast, free, and secure modern URL shortener to generate compact, branded short links.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://bitlinks.dev/{search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebApplication",
        "@id": "https://bitlinks.dev/#application",
        "name": "BitLinks URL Shortener",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Instant URL Shortening",
          "Custom Short Link Aliases",
          "High-Speed Server-Side Redirects",
          "Instant QR Code Generation",
          "Local Link History"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a URL shortener?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A URL shortener is a web service that takes a long, complex web address and converts it into a concise, compact link that redirects visitors to the original destination."
            }
          },
          {
            "@type": "Question",
            "name": "How does a shortened URL work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BitLinks stores a record of your original URL paired with a unique slug in MongoDB. When a user opens the short URL, our server performs an instant lookup and redirects them."
            }
          },
          {
            "@type": "Question",
            "name": "Can I create a custom short URL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, BitLinks allows you to specify an optional custom alias so you can personalize your links for branding or social media."
            }
          },
          {
            "@type": "Question",
            "name": "Is BitLinks free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, BitLinks is 100% free with no registration or payment required."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1 flex flex-col">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50/50">
          {/* Subtle background ambient mesh */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-indigo-200/30 via-violet-200/20 to-transparent blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs sm:text-sm font-medium mb-8 shadow-sm">
              <BitLinksLogoIcon size="xs" />
              <span>Fast, free &amp; modern link management</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.12]">
              Shorten links. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-600 bg-clip-text text-transparent">
                Share smarter.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Transform unwieldy web addresses into sleek, memorable links.
              Customize your alias, generate instant QR codes, and share everywhere with confidence.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Instant Generation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>No Registration Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-indigo-500" />
                <span>Custom Branded Aliases</span>
              </div>
            </div>

            {/* Primary Shortener Component */}
            <div className="mt-10 sm:mt-14">
              <UrlShortener />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* FEATURES */}
        <Features />

        {/* SEO EDUCATIONAL CONTENT */}
        <SeoContent />

        {/* FAQS */}
        <Faq />

        {/* CTA BANNER */}
        <CtaBanner />
      </main>
    </>
  )
}
