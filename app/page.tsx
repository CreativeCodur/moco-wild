"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Palmtree, TreePine, Fish, Flower, MapPin, Heart } from "lucide-react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)
  const missionRef = useRef(null)

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Natural Elements */}
      <section className="relative w-full min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 nature-gradient clip-wave z-0"></div>
        <div className="absolute inset-0 leaf-pattern z-0 opacity-30"></div>

        {/* Natural background elements */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        ></motion.div>

        <div className="absolute inset-0 z-10">
          <div className="container h-full px-4 md:px-6 flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <h1 className="text-3xl font-normal tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Nurturing <span className="text-secondary">Wildlife</span> in Montgomery County
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <p className="text-lg sm:text-xl text-gray-100 max-w-[600px] leading-relaxed">
                    Creating a sanctuary where local ecosystems thrive and endangered species find protection through
                    community care and education.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/join">
                    <Button size="lg" className="cozy-button bg-secondary hover:bg-secondary/90 text-white border-none">
                      Become a Guardian
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={scrollToMission}
                    className="cozy-button bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:border-white/30"
                  >
                    Our Conservation Story
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="relative hidden lg:block"
              >
                <div className="relative h-[500px] w-[500px]">
                  <div className="absolute top-0 left-0 h-full w-full bg-white/10 rounded-full blur-3xl"></div>
                  <motion.div
                    className="relative h-full w-full rounded-full overflow-hidden border-4 border-white/20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Image
                      src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.15752-9/484500702_2003775650117413_7319301854503241255_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=QWo_yAnFYYcQ7kNvgEyNYb9&_nc_oc=Adnj6yrtoA4_iMesstGMZDtiAV5BjUuHK_toGgXoVKMQf_bSCYzBPTRtrvrtHJejVY8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-iad3-2.xx&oh=03_Q7cD1wG4B6gQSYlx6ruTD6V3LqLzkbRn2cJTUBPBB-olc9zSMg&oe=6806DB52"
                      alt="MoCo Wild"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  </motion.div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -bottom-5 -right-5 w-20 h-20"
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Palmtree className="w-full h-full text-secondary/80" />
                  </motion.div>
                  <motion.div
                    className="absolute -top-10 right-20 w-16 h-16"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Natural Elements */}
      <section id="mission-section" ref={missionRef} className="w-full py-20 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 forest-pattern opacity-70"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="relative">
            <div className="absolute -top-40 -right-20 h-80 w-80 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-60 w-60 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm text-secondary font-medium">
                    Our Mission
                  </div>
                  <h2 className="text-4xl font-normal tracking-tighter">
                    Preserving Nature&apos;s Legacy in <span className="text-primary">Montgomery County</span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    MoCo Wild is committed to creating a sanctuary where local wildlife can thrive through community
                    stewardship, education, and thoughtful conservation practices.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    We believe in the interconnectedness of all living beings and work to foster a harmonious
                    relationship between humans and the natural world around us.
                  </p>
                </motion.div>
              </div>

              <div className="lg:col-span-7 lg:pl-10">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <motion.div
                        className="relative h-40 rounded-lg overflow-hidden shadow-md"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Local wildlife"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                      </motion.div>
                      <motion.div
                        className="relative h-60 rounded-lg overflow-hidden shadow-md"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src="/placeholder.svg?height=300&width=200"
                          alt="Conservation efforts"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                      </motion.div>
                    </div>
                    <div className="space-y-4 pt-10">
                      <motion.div
                        className="relative h-60 rounded-lg overflow-hidden shadow-md"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src="/placeholder.svg?height=300&width=200"
                          alt="Habitat restoration"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                      </motion.div>
                      <motion.div
                        className="relative h-40 rounded-lg overflow-hidden shadow-md"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Community engagement"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    className="absolute -bottom-6 -left-6 h-12 w-12 bg-secondary rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  ></motion.div>
                  <motion.div
                    className="absolute -top-6 -right-6 h-12 w-12 bg-primary rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
                  ></motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Natural Elements */}
      <section
        ref={statsRef}
        className="w-full py-20 bg-gradient-to-b from-accent to-background dark:from-accent dark:to-background relative overflow-hidden cozy-section"
      >
        <div className="absolute inset-0 leaf-pattern opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-normal text-primary dark:text-primary inline-block">Our Growing Impact</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
              Through the dedication of our community, we're nurturing a thriving ecosystem in Montgomery County.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="nature-card p-6 text-center"
            >
              <div className="text-primary text-4xl font-bold mb-2">
                {isVisible ? <CountUp end={500} duration={2} /> : "0"}
              </div>
              <p className="text-gray-600 dark:text-gray-300">Acres Nurtured</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="nature-card p-6 text-center"
            >
              <div className="text-primary text-4xl font-bold mb-2">
                {isVisible ? <CountUp end={25} duration={2} /> : "0"}
              </div>
              <p className="text-gray-600 dark:text-gray-300">Species Protected</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="nature-card p-6 text-center"
            >
              <div className="text-primary text-4xl font-bold mb-2">
                {isVisible ? <CountUp end={1000} duration={2} /> : "0"}
              </div>
              <p className="text-gray-600 dark:text-gray-300">Community Members</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="nature-card p-6 text-center"
            >
              <div className="text-primary text-4xl font-bold mb-2">
                {isVisible ? <CountUp end={50} duration={2} /> : "0"}
              </div>
              <p className="text-gray-600 dark:text-gray-300">Habitat Restorations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPLETELY REBRANDED: Our Sanctuary Stewardship Section */}
      <section className="w-full py-20 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 forest-pattern opacity-70"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-normal text-primary dark:text-primary inline-block">
              Our Sanctuary Stewardship
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
              We nurture the delicate balance of Montgomery County's ecosystems through these interconnected approaches.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/20 hidden lg:block"></div>

            <div className="space-y-16">
              {/* Forest Conservation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-2 lg:order-1"
                >
                  <div className="nature-card p-4 sm:p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="nature-icon shrink-0">
                        <TreePine className="h-6 w-6" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-normal text-primary dark:text-primary">Forest Sanctuary</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We preserve and restore native forests that provide critical habitat for countless species.
                          Our reforestation efforts focus on creating diverse woodland ecosystems that support the full
                          web of life.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Forest conservation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  </div>
                </motion.div>
              </div>

              {/* Waterway Protection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-2"
                >
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Waterway protection"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-1"
                >
                  <div className="nature-card p-4 sm:p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="nature-icon shrink-0">
                        <Fish className="h-6 w-6" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-normal text-primary dark:text-primary">Waterway Guardianship</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Our streams, rivers, and wetlands are the lifeblood of our ecosystem. We work to keep these
                          waters clean and healthy through restoration projects, pollution prevention, and community
                          cleanup efforts.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Meadow Restoration */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-2 lg:order-1"
                >
                  <div className="nature-card p-4 sm:p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="nature-icon shrink-0">
                        <Flower className="h-6 w-6" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-normal text-primary dark:text-primary">Meadow Cultivation</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Native meadows and pollinator gardens create essential habitat for bees, butterflies, and
                          birds. We establish and maintain these vibrant ecosystems throughout the county, creating
                          corridors for wildlife movement.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Meadow restoration"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  </div>
                </motion.div>
              </div>

              {/* Community Connection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-2"
                >
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Community connection"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="order-1"
                >
                  <div className="nature-card p-4 sm:p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="nature-icon shrink-0">
                        <Heart className="h-6 w-6" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-normal text-primary dark:text-primary">Community Connection</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          We foster a deep connection between people and nature through educational programs, volunteer
                          opportunities, and community events. When people care about wildlife, they become its most
                          powerful advocates.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETELY REBRANDED: Join Our Wildlife Community */}
      <section className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90"></div>
        <div className="absolute inset-0 leaf-pattern opacity-10"></div>

        {/* Natural elements */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-secondary/20 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        ></motion.div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white font-medium mb-4">
                Join Our Community
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal mb-4 sm:mb-6">Become a Wildlife Guardian</h2>
              <p className="text-base sm:text-xl mb-6 sm:mb-8 text-white/90">
                Every hand that joins our circle strengthens our ability to protect Montgomery County's precious
                wildlife. Together, we create a legacy of stewardship for generations to come.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-2 mt-1">
                    <Palmtree className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/90">Connect with like-minded nature enthusiasts in your community</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-2 mt-1">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/90">
                    Participate in local conservation projects that make a real difference
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-2 mt-1">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/90">Learn about our local ecosystems and how to protect them</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/join">
                  <Button size="lg" className="cozy-button bg-white text-primary hover:bg-white/90 border-none">
                    Join Our Circle
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="cozy-button bg-transparent border-white text-white hover:bg-white/10"
                  >
                    Explore Our Journey
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.15752-9/476485884_1333842867739611_1870596521020376067_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=JwP0Tduq3hYQ7kNvgG1a3QZ&_nc_oc=AdluyUekUf7NUewDlfK9SOW3Ma6s50aR1P-HShf_WwUBLBoJ7_xyRuawcTkusXTfKe8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-iad3-1.xx&oh=03_Q7cD1wHMZicc83IpMhWgXRMvZNCU4H7IT9NY1LH0MzDYnJ9-_A&oe=6806E0D2"
                  width={800}
                  height={600}
                  alt="MoCo Wild Bake Sale 2025"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                    <p className="text-lg font-medium">
                      "Being part of MoCo Wild has connected me deeply with the natural world right in our backyard.
                      It's a community that truly cares."
                    </p>
                    <p className="mt-2 text-white/80">— Sarah K., Volunteer since 2025</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-5 -left-5 w-16 h-16"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Palmtree className="w-full h-full text-secondary/80" />
              </motion.div>
              <motion.div
                className="absolute -bottom-5 -right-5 w-16 h-16"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <TreePine className="w-full h-full text-white/80" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Simple CountUp component
function CountUp({ end, duration }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <>{count}</>
}

