import Link from "next/link"
import { FaEnvelope, FaInstagram } from "react-icons/fa"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background py-8 relative overflow-hidden">
      <div className="absolute inset-0 forest-pattern opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-between gap-4 md:flex-row relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <p className="text-center text-sm leading-loose text-zinc-600 dark:text-zinc-600 md:text-left">
              MoCo Wild. A student-led organization.
            </p>
          </div>
          <p className="text-center text-xs text-zinc-600 dark:text-zinc-600 md:text-left">
            Dedicated to protecting Montgomery County's wildlife and natural habitats.
          </p>
          <p className="text-center text-xs text-zinc-600 dark:text-zinc-600 md:text-left mt-2">
            Developed by{" "}
            <a href="mailto:hargunmalhotra31@gmail.com" className="hover:text-primary transition-colors underline">
              Hargun Malhotra
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a
            href="mailto:mocowild@gmail.com"
            className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-600 hover:text-primary transition-colors"
          >
            <FaEnvelope className="h-4 w-4" />
            <span>mocowild@gmail.com</span>
          </a>
          <Link
            href="https://www.instagram.com/moco_wild/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-600 hover:text-primary transition-colors"
          >
            <FaInstagram className="h-4 w-4" />
            <span>@moco_wild</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

