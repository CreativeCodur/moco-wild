"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Palmtree, TreePine, Fish, Flower, MapPin, Heart } from "lucide-react"
import { ErrorBoundary } from "@/components/error-boundary"
import { ImageWithLoading } from "@/components/image-with-loading"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)

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
    <ErrorBoundary>
      <main className="flex flex-col min-h-screen" role="main">
        {/* Hero Section with Natural Elements */}
        <section
          className="relative w-full min-h-[60vh] sm:min-h-[80vh] md:min-h-[90vh] overflow-hidden py-8 sm:py-12"
          aria-label="Hero section"
        >
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="flex flex-col justify-between h-auto min-h-[220px] sm:min-h-[300px] md:min-h-[370px]">
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
                    <p className="text-lg sm:text-xl text-white dark:text-white max-w-[600px] leading-relaxed">
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
                  className="relative"
                >
                  <div className="relative w-full h-[180px] xs:h-[220px] sm:h-[300px] md:h-[370px] max-w-[500px] mx-auto rounded-lg">
                    <div className="absolute top-0 left-0 h-full w-full bg-white/10 rounded-lg blur-3xl"></div>
                    <motion.div
                      className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <ImageWithLoading
                        src="/images/20250222_171525.jpg"
                        alt="MoCo Wild - Wildlife Conservation"
                        width={500}
                        height={500}
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                    </motion.div>
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
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
                      <p className="text-lg text-zinc-600 dark:text-zinc-600">
                        Dedicated to protecting and preserving Montgomery County's wildlife and natural habitats.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 lg:pl-10">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      <div className="nature-card p-6">
                        <h3 className="text-xl font-semibold mb-2">Wildlife Protection</h3>
                        <p className="text-zinc-600 dark:text-zinc-600">
                          Working to protect endangered species and their habitats in Montgomery County.
                        </p>
                      </div>
                      <div className="nature-card p-6">
                        <h3 className="text-xl font-semibold mb-2">Community Education</h3>
                        <p className="text-zinc-600 dark:text-zinc-600">
                          Raising awareness about local wildlife and conservation efforts.
                        </p>
                      </div>
                      <div className="nature-card p-6">
                        <h3 className="text-xl font-semibold mb-2">Habitat Restoration</h3>
                        <p className="text-zinc-600 dark:text-zinc-600">
                          Restoring and maintaining natural habitats for local wildlife.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
                      <div className="nature-card p-6">
                        <h3 className="text-xl font-semibold mb-2">Volunteer Programs</h3>
                        <p className="text-zinc-600 dark:text-zinc-600">
                          Join our community of volunteers dedicated to wildlife conservation.
                        </p>
                      </div>
                      <div className="nature-card p-6">
                        <h3 className="text-xl font-semibold mb-2">Research & Monitoring</h3>
                        <p className="text-zinc-600 dark:text-zinc-600">
                          Conducting research to better understand and protect local wildlife.
                        </p>
                      </div>
                      <div className="nature-card p-6">
                        <h3 className="text-xl font-semibold mb-2">Advocacy</h3>
                        <p className="text-zinc-600 dark:text-zinc-600">
                          Advocating for policies that protect wildlife and their habitats.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
                      <div className="nature-card p-6">
                        <h3 className="text-xl font-semibold mb-2">Wildlife Rehabilitation</h3>
                        <p className="text-zinc-600 dark:text-zinc-600">
                          Providing care and rehabilitation for injured or orphaned wildlife.
                        </p>
                      </div>
                      <div className="nature-card p-6">
                        <h3 className="text-xl font-semibold mb-2">Habitat Protection</h3>
                        <p className="text-zinc-600 dark:text-zinc-600">
                          Working to protect and preserve critical wildlife habitats.
                        </p>
                      </div>
                      <div className="nature-card p-6">
                        <h3 className="text-xl font-semibold mb-2">Community Outreach</h3>
                        <p className="text-zinc-600 dark:text-zinc-600">
                          Engaging with the community to promote wildlife conservation.
                        </p>
                      </div>
                    </div>
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
              <p className="text-zinc-600 dark:text-zinc-600 mt-2 max-w-2xl mx-auto">
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
                  {isVisible ? <CountUp end={4} duration={2} /> : "0"}
                </div>
                <p className="text-zinc-600 dark:text-zinc-600">Major Partners</p>
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
                  {isVisible ? <CountUp end={5} duration={2} /> : "0"}
                </div>
                <p className="text-zinc-600 dark:text-zinc-600">Successful Events</p>
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
                  {isVisible ? <CountUp end={50} duration={2} /> : "0"}
                </div>
                <p className="text-zinc-600 dark:text-zinc-600">Community Members</p>
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
                  {isVisible ? <CountUp end={1000000} duration={2} /> : "0"}
                </div>
                <p className="text-zinc-600 dark:text-zinc-600">More changes to go</p>
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
              <p className="text-zinc-600 dark:text-zinc-600 mt-2 max-w-2xl mx-auto">
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
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="nature-card p-4 sm:p-6 md:p-8"
                    >
                      <div className="flex items-start gap-4">
                        <div className="nature-icon shrink-0" data-theme-rotate>
                          <TreePine className="h-6 w-6" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-normal text-primary dark:text-primary">Forest Sanctuary</h3>
                          <p className="text-zinc-600 dark:text-zinc-600">
                            We preserve and advocate for ecosystems that provide critical habitat for countless species.
                            Our efforts focus on creating diverse and maintained wildlife in MoCo that support the full
                            biodiversity of our region.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                  >
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                      <ImageWithLoading
                        src="/images/20250222_171601.jpg"
                        alt="Forest conservation"
                        fill
                        className="object-cover"
                        containerClassName="h-full w-full"
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
                      <ImageWithLoading
                        src="/images/20250222_190104.jpg"
                        alt="Waterway protection"
                        fill
                        className="object-cover"
                        containerClassName="h-full w-full"
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
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="nature-card p-4 sm:p-6 md:p-8"
                    >
                      <div className="flex items-start gap-4">
                        <div className="nature-icon shrink-0">
                          <Fish className="h-6 w-6" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-normal text-primary dark:text-primary">Meet-Ups</h3>
                          <p className="text-zinc-600 dark:text-zinc-600">
                            Our members are the lifeblood of OUR ecosystem. We work to keep our members equally treated, and ensure professional but chill social gatherings.
                          </p>
                        </div>
                      </div>
                    </motion.div>
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
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="nature-card p-4 sm:p-6 md:p-8"
                    >
                      <div className="flex items-start gap-4">
                        <div className="nature-icon shrink-0">
                          <Flower className="h-6 w-6" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-normal text-primary dark:text-primary">Advocacy</h3>
                          <p className="text-zinc-600 dark:text-zinc-600">
                            We advocate for environmental sustainibility all over MoCo. Feel free to check out any of our socials in order to join our future events!
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                  >
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                      <ImageWithLoading
                        src="/images/20250322_115920.jpg"
                        alt="Meadow restoration"
                        fill
                        className="object-cover"
                        containerClassName="h-full w-full"
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
                      <ImageWithLoading
                        src="/images/IMG_20240922_195232_736.jpg"
                        alt="Community connection"
                        fill
                        className="object-cover"
                        containerClassName="h-full w-full"
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
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="nature-card p-4 sm:p-6 md:p-8"
                    >
                      <div className="flex items-start gap-4">
                        <div className="nature-icon shrink-0">
                          <Heart className="h-6 w-6" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-normal text-primary dark:text-primary">Community Fundraisers</h3>
                          <p className="text-zinc-600 dark:text-zinc-600">
                            We foster a deep connection between people and nature through educational programs, volunteer
                            opportunities, and community events. When people care about wildlife, they become its most
                            effective protectors.
                          </p>
                        </div>
                      </div>
                    </motion.div>
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
                  <ImageWithLoading
                    src="/images/IMG_20250322_182437_711.jpg"
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
                      <p className="mt-2 text-white/80">— Shaunak Kumar, Volunteer since 2025</p>
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
      </main>
    </ErrorBoundary>
  )
}

// Simple CountUp component
function CountUp({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = useState(0)
  const startTime = useRef<number | null>(null)
  const animationFrameId = useRef<number | null>(null)
  const isAnimating = useRef(false)

  useEffect(() => {
    if (isAnimating.current) return

    isAnimating.current = true
    startTime.current = performance.now()

    const animate = (timestamp: number) => {
      if (!startTime.current) return

      const progress = timestamp - startTime.current
      const percentage = Math.min(progress / (duration * 1000), 1)

      setCount(Math.floor(end * percentage))

      if (percentage < 1) {
        animationFrameId.current = requestAnimationFrame(animate)
      } else {
        isAnimating.current = false
      }
    }

    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      isAnimating.current = false
    }
  }, [end, duration])

  return <span>{count}</span>
}

