"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AnimatedHamburger } from "./animated-hamburger"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  }

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/get-involved", label: "Get Involved" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden p-1 hover:bg-transparent focus:bg-transparent focus-visible:ring-0" 
          onClick={() => setOpen((prev) => !prev)}
        >
          <AnimatedHamburger isOpen={open} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-[85%] max-w-[300px] sm:w-[300px] sm:max-w-[400px] p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="flex flex-col space-y-4 py-4 mt-8">
          <AnimatePresence>
            {menuItems.map((item, i) => (
              <motion.div
                key={item.href}
                custom={i}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuItemVariants}
              >
                <Link
                  href={item.href}
                  className="text-base sm:text-lg font-headline font-normal hover:text-primary block py-3 px-4 transition-colors duration-200 rounded-lg hover:bg-accent/50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </SheetContent>
    </Sheet>
  )
}

