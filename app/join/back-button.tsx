"use client"

import { Button } from "@/components/ui/button"
import { FaArrowLeft } from "react-icons/fa"

export function BackButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => window.history.back()}
      className="mb-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center gap-2"
    >
      <FaArrowLeft className="h-4 w-4" />
      <span>Back to Previous Page</span>
    </Button>
  )
}

