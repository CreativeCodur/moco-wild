"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaEnvelope, FaInstagram, FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa"
import { GiPalmTree, GiPineTree } from "react-icons/gi"
import { FaTree } from "react-icons/fa"
import { ImageWithLoading } from "@/components/image-with-loading"

export default function GetInvolvedPage() {
  const [resourceSlide, setResourceSlide] = useState(0)
  const [actionSlide, setActionSlide] = useState(0)
  const [direction, setDirection] = useState<number>(0) // -1 for left, 1 for right

  const resourceLinks = [
    {
      id: 1,
      title: "Understanding Wildlife Conservation",
      description: "Learn about the importance of wildlife conservation and how it impacts our ecosystem.",
      link: "https://www.nwf.org/Educational-Resources/Wildlife-Guide",
      image: "/images/IMG_20250322_182553_159.jpg",
    },
    {
      id: 2,
      title: "Local Endangered Species",
      description: "Information about endangered species in Montgomery County and how you can help protect them.",
      link: "https://dnr.maryland.gov/wildlife/Pages/plants_wildlife/rte/espaa.aspx",
      image: "/images/IMG_20250322_182550_104.jpg",
    },
    {
      id: 3,
      title: "Native Plant Resources",
      description: "Discover how native plants support local wildlife and how to incorporate them into your garden.",
      link: "https://www.montgomerycountymd.gov/green/trees/native-trees.html",
      image: "/images/IMG_20250322_182931_028.jpg",
    },
    {
      id: 4,
      title: "Reducing Human-Wildlife Conflicts",
      description: "Tips for coexisting peacefully with wildlife in suburban and urban environments.",
      link: "https://www.humanesociety.org/resources/wildlife-management",
      image: "/images/IMG_20250322_182941_411.jpg",
    },
  ]

  const actionItems = [
    {
      id: 1,
      title: "Create a Wildlife-Friendly Yard",
      description:
        "Plant native species, provide water sources, and reduce chemical use to create habitat for local wildlife.",
      image: "/images/IMG_20240930_185032_017.jpg",
      icon: <GiPineTree className="h-6 w-6 text-secondary" />,
    },
    {
      id: 2,
      title: "Participate in Citizen Science",
      description: "Join wildlife monitoring programs to help track and protect local species populations.",
      image: "/images/IMG_20240930_185019_720.jpg",
      icon: <FaTree className="h-6 w-6 text-secondary" />,
    },
    {
      id: 3,
      title: "Reduce Plastic Use",
      description: "Minimize plastic consumption to prevent pollution that harms wildlife and their habitats.",
      image: "/images/IMG_20240930_185011_534.jpg",
      icon: <GiPalmTree className="h-6 w-6 text-secondary" />,
    },
    {
      id: 4,
      title: "Advocate for Wildlife Protection",
      description: "Contact local representatives to support policies that protect wildlife and natural habitats.",
      image: "/images/IMG_20240930_185023_490.jpg",
      icon: <FaHeart className="h-6 w-6 text-secondary" />,
    },
  ]

  const nextSlide = (items: any[], current: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    setDirection(1)
    setter((prev: number) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = (items: any[], current: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    setDirection(-1)
    setter((prev: number) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const goToSlide = (index: number, setter: React.Dispatch<React.SetStateAction<number>>, currentIndex: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setter(index)
  }

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden hero-section">
        <div className="absolute inset-0 nature-gradient clip-wave z-0"></div>
        <div className="absolute inset-0 leaf-pattern z-0 opacity-30"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-normal tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none hero-title">
                Join Our Circle
              </h1>
              <p className="mx-auto max-w-[700px] text-white dark:text-white md:text-xl hero-description">
                Become part of our community dedicated to protecting Montgomery County&apos;s wildlife and natural habitats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 forest-pattern opacity-70"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <Tabs defaultValue="get-involved" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-full bg-accent/50 p-1">
              <TabsTrigger
                value="get-involved"
                className="rounded-full text-black data-[state=active]:bg-black data-[state=active]:text-black dark:data-[state=active]:bg-gray-200"
              >
                Get Involved
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="rounded-full text-black data-[state=active]:bg-black data-[state=active]:text-black dark:data-[state=active]:bg-gray-200"
              >
                Contact Us
              </TabsTrigger>
            </TabsList>

            <TabsContent value="get-involved" className="mt-6">
              <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="nature-card overflow-hidden border-0 h-full">
                    <CardHeader className="bg-gradient-to-r from-secondary to-secondary/80 text-white">
                      <CardTitle>Become a Wildlife Guardian</CardTitle>
                      <CardDescription className="text-white dark:text-white">Join our team of dedicated volunteers</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-4">
                        <h3 className="font-bold text-primary">Guardian Opportunities:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="bg-secondary/10 rounded-full p-1">
                              <GiPineTree className="h-4 w-4 text-secondary" />
                            </div>
                            <span className="text-zinc-600 dark:text-zinc-600">Wildlife Monitoring</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="bg-secondary/10 rounded-full p-1">
                              <FaTree className="h-4 w-4 text-secondary" />
                            </div>
                            <span className="text-zinc-600 dark:text-zinc-600">Habitat Restoration</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="bg-secondary/10 rounded-full p-1">
                              <FaHeart className="h-4 w-4 text-secondary" />
                            </div>
                            <span className="text-zinc-600 dark:text-zinc-600">Educational Outreach</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="bg-secondary/10 rounded-full p-1">
                              <GiPalmTree className="h-4 w-4 text-secondary" />
                            </div>
                            <span className="text-zinc-600 dark:text-zinc-600">Event Support</span>
                          </li>
                        </ul>

                        <h3 className="font-bold mt-4 text-primary">What You&apos;ll Need:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="bg-primary/10 rounded-full p-1">
                              <GiPalmTree className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-zinc-600 dark:text-zinc-600">Montgomery County resident</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="bg-primary/10 rounded-full p-1">
                              <GiPalmTree className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-zinc-600 dark:text-zinc-600">
                              18+ years of age (or 16+ with parental consent)
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="bg-primary/10 rounded-full p-1">
                              <GiPalmTree className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-zinc-600 dark:text-zinc-600">
                              Commitment of at least 4 hours per month
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="bg-primary/10 rounded-full p-1">
                              <GiPalmTree className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-zinc-600 dark:text-zinc-600">Passion for wildlife conservation</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/join">
                        <button
                          className="cozy-button w-full bg-secondary hover:bg-secondary/90 text-white dark:text-white h-11 rounded-md px-8 font-medium"
                        >
                          Join Our Circle
                        </button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>

                <div className="space-y-8">

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4 mt-8"
                  >
                    <h2 className="text-2xl font-normal text-primary">Simple Acts of Stewardship</h2>
                    <p className="text-zinc-600 dark:text-zinc-600">
                      Small actions you can take to help protect local wildlife.
                    </p>
                  </motion.div>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={actionSlide}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      className="relative h-[250px] w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-xl"
                    >
                      <Image
                        src={actionItems[actionSlide].image}
                        alt={actionItems[actionSlide].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          {actionItems[actionSlide].icon}
                          <h3 className="text-xl font-bold text-white">{actionItems[actionSlide].title}</h3>
                        </div>
                        <p className="text-white dark:text-white text-sm">{actionItems[actionSlide].description}</p>
                      </div>
                      {/* Left and Right Carousel Buttons */}
                      <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 carousel-button"
                        onClick={() => prevSlide(actionItems, actionSlide, setActionSlide)}
                        aria-label="Previous slide"
                        type="button"
                      >
                        <FaChevronLeft className="h-5 w-5 text-secondary" />
                      </button>
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 carousel-button"
                        onClick={() => nextSlide(actionItems, actionSlide, setActionSlide)}
                        aria-label="Next slide"
                        type="button"
                      >
                        <FaChevronRight className="h-5 w-5 text-secondary" />
                      </button>
                    </motion.div>
                  </AnimatePresence>
                  <div className="flex justify-center gap-2 mt-4">
                    {actionItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index, setActionSlide, actionSlide)}
                        className={`h-2 w-2 rounded-full ${index === actionSlide ? "bg-secondary" : "bg-gray-400"}`}
                        aria-label={`Go to action slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="mt-6">
              <div className="space-y-8 text-center">
                <h2 className="text-3xl font-normal text-primary">Contact Us</h2>
                <p className="text-zinc-600 dark:text-zinc-600 max-w-2xl mx-auto">
                  Have questions or want to get involved? Reach out to us through the following channels:
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-4xl">
                  <a href="mailto:mocowild@gmail.com" className="nature-card p-6 flex flex-col items-center gap-4 group hover:bg-secondary/10 transition-colors duration-300">
                    <FaEnvelope className="h-10 w-10 text-secondary group-hover:text-primary transition-colors duration-300" />
                    <h3 className="text-xl font-semibold text-primary">Email</h3>
                    <p className="text-zinc-600 dark:text-zinc-600">mocowild@gmail.com</p>
                  </a>
                  <a href="https://www.instagram.com/moco_wild" target="_blank" rel="noopener noreferrer" className="nature-card p-6 flex flex-col items-center gap-4 group hover:bg-secondary/10 transition-colors duration-300">
                    <FaInstagram className="h-10 w-10 text-secondary group-hover:text-primary transition-colors duration-300" />
                    <h3 className="text-xl font-semibold text-primary">Instagram</h3>
                    <p className="text-zinc-600 dark:text-zinc-600">@moco_wild</p>
                  </a>
                  <a href="#" className="nature-card p-6 flex flex-col items-center gap-4 group hover:bg-secondary/10 transition-colors duration-300">
                    <h3 className="text-xl font-semibold text-primary">Volunteer Form</h3>
                    <p className="text-zinc-600 dark:text-zinc-600">Fill out our form to get involved</p>
                  </a>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

