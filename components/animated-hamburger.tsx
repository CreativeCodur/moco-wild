"use client"

import { motion } from "framer-motion"

interface AnimatedHamburgerProps {
  isOpen: boolean
}

export function AnimatedHamburger({ isOpen }: AnimatedHamburgerProps) {
  const topLineVariants = {
    closed: { rotate: 0, translateY: -8 },
    open: { rotate: 45, translateY: 8 },
  }

  const centerLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }

  const bottomLineVariants = {
    closed: { rotate: 0, translateY: 8 },
    open: { rotate: -45, translateY: -8 },
  }

  return (
    <div className="flex justify-center items-center w-6 h-6 relative">
      <motion.span
        className="absolute h-0.5 w-6 bg-current rounded-full"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={topLineVariants}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute h-0.5 w-6 bg-current rounded-full"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={centerLineVariants}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute h-0.5 w-6 bg-current rounded-full"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={bottomLineVariants}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

