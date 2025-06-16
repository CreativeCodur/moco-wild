"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  // Add padding to body to account for the fixed header
  useEffect(() => {
    document.body.style.paddingTop = "64px" // Match the header height
    return () => {
      document.body.style.paddingTop = "0"
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full border border-primary/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482783378_1012106864139143_3519316079928734314_n.jpg-qu17O7V8YrtSCrlhseaL7L5yd7SI8j.jpeg"
                alt="MoCo Wild Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center">
              <span className="font-headline font-normal text-sm sm:text-base md:text-lg">MoCo Wild</span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <MainNav />
        </div>

        <div className="flex items-center gap-2">
        </div>
      </div>
    </header>
  )
}

