"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Palmtree, TreePine } from "lucide-react"
import { motion } from "framer-motion"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Red Fox in Rock Creek Park",
      description: "A beautiful red fox spotted during our wildlife survey in Rock Creek Park.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Stream Cleanup Volunteers",
      description: "Our amazing volunteers during the annual Sligo Creek cleanup event.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Great Blue Heron",
      description: "A great blue heron hunting in the shallows of Lake Needwood.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Native Pollinator Garden",
      description: "One of our newly installed pollinator gardens in full bloom.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Eastern Box Turtle",
      description: "An eastern box turtle found during our reptile survey in Black Hill Regional Park.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Tree Planting Event",
      description: "Volunteers planting native trees along Northwest Branch Trail.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Monarch Butterfly",
      description: "A monarch butterfly feeding on milkweed in our butterfly garden.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Wildlife Education Workshop",
      description: "Students learning about local wildlife during our educational workshop.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 9,
      title: "White-tailed Deer",
      description: "A white-tailed deer family grazing at dawn in Seneca Creek State Park.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 nature-gradient clip-wave z-0"></div>
        <div className="absolute inset-0 leaf-pattern z-0 opacity-30"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-normal tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                Wildlife Gallery
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Capturing the beauty of Montgomery County&apos;s wildlife and our conservation efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 forest-pattern opacity-70"></div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 text-secondary/40"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Palmtree className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 text-primary/40"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <TreePine className="w-full h-full" />
        </motion.div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="nature-card overflow-hidden border-0 h-full">
                  <div className="relative aspect-video">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>
                  <CardContent className="p-3 sm:p-4">
                    <h3 className="font-bold text-primary">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

