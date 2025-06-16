"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageWithLoadingProps extends React.ComponentProps<typeof Image> {
  containerClassName?: string
  loadingClassName?: string
}

export function ImageWithLoading({
  alt,
  className,
  containerClassName,
  loadingClassName,
  ...props
}: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 bg-muted animate-pulse",
            loadingClassName
          )}
        />
      )}
      <Image
        alt={alt}
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
          className
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  )
} 