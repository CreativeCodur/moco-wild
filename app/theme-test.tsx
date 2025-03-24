"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeTest() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-background p-4 rounded-lg shadow-lg border border-border">
      <p className="mb-2 text-sm">
        Current theme: <strong>{theme}</strong>
      </p>
      <div className="flex gap-2">
        <Button size="sm" onClick={() => setTheme("light")} variant={theme === "light" ? "default" : "outline"}>
          Light
        </Button>
        <Button size="sm" onClick={() => setTheme("dark")} variant={theme === "dark" ? "default" : "outline"}>
          Dark
        </Button>
      </div>
    </div>
  )
}

