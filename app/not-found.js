import Link from "next/link"
import { Link2Off, ArrowLeft, Plus } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center px-4 py-20 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center animate-fade-in">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-red-100">
          <Link2Off className="w-8 h-8" />
        </div>

        <span className="inline-block px-3 py-1 bg-red-100/70 text-red-700 text-xs font-semibold rounded-full mb-3 tracking-wide">
          404 ERROR
        </span>

        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Link Not Found
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          The short link you are trying to visit does not exist, may have expired, or contains a typo.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/20"
          >
            <Plus className="w-4 h-4" />
            Create New Link
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
