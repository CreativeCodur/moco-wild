import { Montserrat, Playfair_Display } from "next/font/google"

// Use Playfair Display for headings with only weight 400
export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400"], // Only using normal weight (400)
})

// Use Montserrat as the primary body font
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500"],
})

