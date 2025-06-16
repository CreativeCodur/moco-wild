import { Style_Script, Rubik, Barlow } from "next/font/google"

// Use Style Script for headings with only weight 400
export const styleScript = Style_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-style-script",
})

// Use Rubik as the primary body font
export const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
})

// Use Barlow as the primary body font
export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
})

