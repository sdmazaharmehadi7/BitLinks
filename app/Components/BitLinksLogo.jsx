import { Link2 } from "lucide-react"

export function BitLinksLogoIcon({ size = "md", className = "" }) {
  const sizeClasses = {
    xs: "w-4 h-4 rounded",
    sm: "w-5 h-5 rounded-md",
    md: "w-8 h-8 rounded-lg",
    lg: "w-10 h-10 rounded-xl",
  }

  const iconSizes = {
    xs: "w-2.5 h-2.5",
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }

  return (
    <div
      className={`bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-sm shrink-0 ${sizeClasses[size] || sizeClasses.md} ${className}`}
    >
      <Link2 className={`-rotate-45 ${iconSizes[size] || iconSizes.md}`} />
    </div>
  )
}

export default function BitLinksLogo({ showText = true, className = "", textClassName = "" }) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <BitLinksLogoIcon size="lg" />
      {showText && (
        <span className={`text-xl font-bold tracking-tight text-slate-900 ${textClassName}`}>
          Bit<span className="text-indigo-600">Links</span>
        </span>
      )}
    </div>
  )
}
