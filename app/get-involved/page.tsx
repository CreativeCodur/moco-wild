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

export default function GetInvolvedPage() {
  const [resourceSlide, setResourceSlide] = useState(0)
  const [actionSlide, setActionSlide] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  const resourceLinks = [
    {
      id: 1,
      title: "Understanding Wildlife Conservation",
      description: "Learn about the importance of wildlife conservation and how it impacts our ecosystem.",
      link: "https://www.nwf.org/Educational-Resources/Wildlife-Guide",
    },
    {
      id: 2,
      title: "Local Endangered Species",
      description: "Information about endangered species in Montgomery County and how you can help protect them.",
      link: "https://dnr.maryland.gov/wildlife/Pages/plants_wildlife/rte/espaa.aspx",
    },
    {
      id: 3,
      title: "Native Plant Resources",
      description: "Discover how native plants support local wildlife and how to incorporate them into your garden.",
      link: "https://www.montgomerycountymd.gov/green/trees/native-trees.html",
    },
    {
      id: 4,
      title: "Reducing Human-Wildlife Conflicts",
      description: "Tips for coexisting peacefully with wildlife in suburban and urban environments.",
      link: "https://www.humanesociety.org/resources/wildlife-management",
    },
  ]

  const actionItems = [
    {
      id: 1,
      title: "Create a Wildlife-Friendly Yard",
      description:
        "Plant native species, provide water sources, and reduce chemical use to create habitat for local wildlife.",
      image: "/placeholder.svg?height=300&width=500",
      icon: <GiPineTree className="h-6 w-6 text-secondary" />,
    },
    {
      id: 2,
      title: "Participate in Citizen Science",
      description: "Join wildlife monitoring programs to help track and protect local species populations.",
      image: "/placeholder.svg?height=300&width=500",
      icon: <FaTree className="h-6 w-6 text-secondary" />,
    },
    {
      id: 3,
      title: "Reduce Plastic Use",
      description: "Minimize plastic consumption to prevent pollution that harms wildlife and their habitats.",
      image: "/placeholder.svg?height=300&width=500",
      icon: <GiPalmTree className="h-6 w-6 text-secondary" />,
    },
    {
      id: 4,
      title: "Advocate for Wildlife Protection",
      description: "Contact local representatives to support policies that protect wildlife and natural habitats.",
      image: "/placeholder.svg?height=300&width=500",
      icon: <FaHeart className="h-6 w-6 text-secondary" />,
    },
  ]

  const nextSlide = (items, current, setter) => {
    setDirection(1)
    setter((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = (items, current, setter) => {
    setDirection(-1)
    setter((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const goToSlide = (index, setter, currentIndex) => {
    setDirection(index > currentIndex ? 1 : -1)
    setter(index)
  }

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

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
                Join Our Circle
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Become part of our community dedicated to protecting Montgomery County&apos;s wildlife and natural
                habitats.
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
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary dark:data-[state=active]:bg-gray-800"
              >
                Get Involved
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary dark:data-[state=active]:bg-gray-800"
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
                      <CardDescription className="text-gray-100">Join our team of dedicated volunteers</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-4">
                        <h3 className="font-bold text-primary">Guardian Opportunities:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="bg-secondary/10 rounded-full p-1">
                              <GiPineTree className="h-4 w-4 text-secondary" />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">Wildlife Monitoring</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="bg-secondary/10 rounded-full p-1">
                              <FaTree className="h-4 w-4 text-secondary" />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">Habitat Restoration</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="bg-secondary/10 rounded-full p-1">
                              <FaHeart className="h-4 w-4 text-secondary" />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">Educational Outreach</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="bg-secondary/10 rounded-full p-1">
                              <GiPalmTree className="h-4 w-4 text-secondary" />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">Event Support</span>
                          </li>
                        </ul>

                        <h3 className="font-bold mt-4 text-primary">What You&apos;ll Need:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="bg-primary/10 rounded-full p-1">
                              <GiPalmTree className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">Montgomery County resident</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="bg-primary/10 rounded-full p-1">
                              <GiPalmTree className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">
                              18+ years of age (or 16+ with parental consent)
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="bg-primary/10 rounded-full p-1">
                              <GiPalmTree className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">
                              Commitment of at least 4 hours per month
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="bg-primary/10 rounded-full p-1">
                              <GiPalmTree className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">Passion for wildlife conservation</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/join">
                        <Button size="lg" className="cozy-button w-full bg-secondary hover:bg-secondary/90 text-white">
                          Join Our Circle
                        </Button>
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
                    className="space-y-4"
                  >
                    <h2 className="text-2xl font-normal text-primary">Learning Resources</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Explore these resources to deepen your understanding of wildlife conservation.
                    </p>

                    {/* Animated Carousel */}
                    <div className="relative rounded-lg overflow-hidden shadow-md" style={{ height: "320px" }}>
                      <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                          key={resourceSlide}
                          custom={direction}
                          variants={variants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                          }}
                          className="absolute w-full h-full"
                        >
                          <Card className="nature-card border-0 h-full flex flex-col">
                            <CardHeader>
                              <CardTitle className="text-primary">{resourceLinks[resourceSlide].title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                              <p className="text-gray-600 dark:text-gray-300">
                                {resourceLinks[resourceSlide].description}
                              </p>
                            </CardContent>
                            <CardFooter>
                              <Link href={resourceLinks[resourceSlide].link} target="_blank" rel="noopener noreferrer">
                                <Button
                                  variant="outline"
                                  className="cozy-button border-primary/20 hover:border-primary/40"
                                >
                                  Explore Resource
                                </Button>
                              </Link>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      </AnimatePresence>

                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                        {resourceLinks.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all ${
                              resourceSlide === index ? "bg-primary w-4" : "bg-primary/30"
                            }`}
                            onClick={() => goToSlide(index, setResourceSlide, resourceSlide)}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90"
                        onClick={() => prevSlide(resourceLinks, resourceSlide, setResourceSlide)}
                      >
                        <FaChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90"
                        onClick={() => nextSlide(resourceLinks, resourceSlide, setResourceSlide)}
                      >
                        <FaChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl font-normal text-primary">Simple Acts of Stewardship</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Small actions you can take to help protect local wildlife.
                    </p>

                    {/* Animated Carousel */}
                    <div className="relative rounded-lg overflow-hidden shadow-md" style={{ height: "320px" }}>
                      <AnimatePresence initial={false} custom={direction} mode="wait">
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
                          className="absolute w-full h-full"
                        >
                          <div className="relative h-full rounded-lg overflow-hidden">
                            <Image
                              src={actionItems[actionSlide].image || "/placeholder.svg"}
                              alt={actionItems[actionSlide].title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full">
                                  {actionItems[actionSlide].icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{actionItems[actionSlide].title}</h3>
                              </div>
                              <p className="text-gray-100 text-sm">{actionItems[actionSlide].description}</p>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>

                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                        {actionItems.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all ${
                              actionSlide === index ? "bg-white w-4" : "bg-white/30"
                            }`}
                            onClick={() => goToSlide(index, setActionSlide, actionSlide)}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90"
                        onClick={() => prevSlide(actionItems, actionSlide, setActionSlide)}
                      >
                        <FaChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90"
                        onClick={() => nextSlide(actionItems, actionSlide, setActionSlide)}
                      >
                        <FaChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="nature-card border-0">
                  <CardHeader>
                    <CardTitle className="text-primary">Contact Us</CardTitle>
                    <CardDescription>
                      Reach out to us with questions, suggestions, or to learn more about our work.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="nature-icon shrink-0">
                        <FaEnvelope className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">Email</h3>
                        <Link href="mailto:mocowild@gmail.com" className="text-secondary hover:underline">
                          mocowild@gmail.com
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="nature-icon shrink-0">
                        <FaInstagram className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">Instagram</h3>
                        <Link
                          href="https://www.instagram.com/moco_wild/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:underline"
                        >
                          @moco_wild
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

