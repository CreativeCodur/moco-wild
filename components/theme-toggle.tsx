"use client"

import { useEffect, useState } from "react"
import { FaSun, FaMoon } from "react-icons/fa"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="outline" size="icon" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full" />
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-8 h-8 sm:w-9 sm:h-9 relative overflow-hidden rounded-full">
          {/* Light mode icon - a sun */}
          <FaSun
            className={`h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] transition-all duration-500 ${
              theme === "light" ? "rotate-0 scale-100 text-amber-500" : "rotate-90 scale-0 opacity-0"
            }`}
          />

          {/* Dark mode icon - a moon with star */}
          <FaMoon
            className={`absolute h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] transition-all duration-500 ${
              theme === "dark" ? "rotate-0 scale-100 text-blue-400" : "rotate-90 scale-0 opacity-0"
            }`}
          />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="nature-card">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center gap-2 cursor-pointer hover:bg-amber-50 dark:hover:bg-amber-900/10"
        >
          <FaSun className="h-4 w-4 text-amber-500" />
          <span>Light Mode</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/10"
        >
          <FaMoon className="h-4 w-4 text-blue-400" />
          <span>Dark Mode</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

