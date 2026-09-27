"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is a URL shortener?",
      answer:
        "A URL shortener is a web service that takes a long, complex web address and converts it into a concise, compact link. When a visitor navigates to the shortened URL, the server matches the unique slug and seamlessly redirects them to the original destination URL.",
    },
    {
      question: "How does a shortened URL work?",
      answer:
        "When you generate a link with BitLinks, we store a record containing your destination URL and a unique identifier (or custom alias) in our MongoDB database. When someone visits the short link (e.g. yourdomain.com/abc123), our server performs a fast database lookup and issues an HTTP redirect directly to your target destination.",
    },
    {
      question: "Can I create a custom short URL with my own alias?",
      answer:
        "Yes! BitLinks allows you to specify an optional custom alias (such as 'my-portfolio' or 'launch2026'). If the custom text is available and hasn't been claimed by another user, BitLinks will assign it to your destination URL.",
    },
    {
      question: "Are shortened URLs permanent?",
      answer:
        "Short links created on BitLinks are saved in our database and remain accessible as long as the service is running and the database record exists. We do not automatically delete your links after a fixed trial period.",
    },
    {
      question: "How do I share a shortened link?",
      answer:
        "Once your link is created, you can click the 'Copy Link' button to copy it directly to your clipboard. You can paste it into emails, messages, social posts, or documents. You can also view and download a QR code to display on printed material or presentation slides.",
    },
    {
      question: "Is BitLinks free to use?",
      answer:
        "Yes, BitLinks is 100% free to use. There are no subscriptions, paywalls, or account registration requirements to shorten links.",
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Everything you need to know about using BitLinks.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="font-semibold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-fade-in"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
