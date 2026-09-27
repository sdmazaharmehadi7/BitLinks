import Link from "next/link"
import { Link2 } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./SocialIcons"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-sm">
                <Link2 className="w-4 h-4 -rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Bit<span className="text-indigo-600">Links</span>
              </span>
            </Link>
            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              Modern, fast, and reliable URL shortener for modern creators and developers.
              Transform long links into compact, shareable URLs in seconds.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/sdmazaharmehadi7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors"
                aria-label="Sayyad Mazahar Mehadi GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sayyad-mazahar-mehadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-indigo-600 flex items-center justify-center transition-colors"
                aria-label="Sayyad Mazahar Mehadi LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#shorten-form" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Shorten URL
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  About BitLinks
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sayyad-mazahar-mehadi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Contact on LinkedIn
                </a>
              </li>
              <li>
                <Link href="/shorten" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Shorten Workstation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} BitLinks. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, MongoDB & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
