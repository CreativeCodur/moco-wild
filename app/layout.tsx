import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { styleScript, rubik, barlow } from "./fonts"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MoCo Wild",
  description: "Dedicated to raising money for endangered species and protecting local wildlife in Montgomery County, Maryland.",
  generator: "v0.dev",
  robots: "index, follow",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`min-h-screen bg-background font-sans antialiased ${styleScript.variable} ${rubik.variable} ${barlow.variable}`}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}