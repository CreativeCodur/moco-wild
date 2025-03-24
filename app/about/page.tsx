import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palmtree } from "lucide-react"

export default function AboutPage() {
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
                About MoCo Wild
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Our story, mission, and the dedicated team nurturing Montgomery County&apos;s wildlife.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 forest-pattern opacity-70"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 sm:gap-10 sm:px-4 md:px-10 md:gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm dark:text-white font-medium">
                Our Mission
              </div>
              <h2 className="lg:leading-tighter text-3xl font-normal tracking-tighter sm:text-4xl text-primary">
                Nurturing Wildlife, Preserving Habitats
              </h2>
              <p className="text-gray-600 dark:text-gray-300 md:text-xl">
                MoCo Wild is dedicated to the protection and conservation of Montgomery County&apos;s diverse wildlife
                and natural habitats. We believe in the intrinsic value of all living beings and work tirelessly to
                ensure their survival for future generations.
              </p>
              <p className="text-gray-600 dark:text-gray-300 md:text-xl">
                Through community engagement, education, advocacy, and direct conservation efforts, we strive to create
                a sustainable environment where wildlife can thrive alongside human communities.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  fill
                  alt="MoCo Wild conservation efforts"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-16 h-16 text-secondary/80">
                <Palmtree className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 bg-accent/50 dark:bg-accent/30"></div>
        <div className="absolute inset-0 leaf-pattern opacity-30"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-normal tracking-tighter text-primary sm:text-5xl">Our Journey</h2>
              <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A timeline of our planned initiatives and goals from 2025 to 2028.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 py-12">
            <div className="relative pl-8 pb-8 border-l-2 border-secondary">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
              <div className="nature-card p-6 space-y-2">
                <h3 className="text-2xl font-normal text-primary">2025: Foundation & Community Building</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Establish MoCo Wild as a recognized conservation organization in Montgomery County. Build partnerships
                  with local government, schools, and businesses. Launch our first major habitat restoration project.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-secondary">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
              <div className="nature-card p-6 space-y-2">
                <h3 className="text-2xl font-normal text-primary">2026: Education & Awareness</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Develop comprehensive educational programs for schools and community centers. Launch a county-wide
                  awareness campaign about endangered local species. Establish a wildlife monitoring network with
                  citizen scientists.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-secondary">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
              <div className="nature-card p-6 space-y-2">
                <h3 className="text-2xl font-normal text-primary">2027: Conservation & Policy</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Implement targeted conservation projects for specific endangered species. Advocate for stronger
                  wildlife protection policies at the county level. Establish a wildlife rehabilitation center.
                </p>
              </div>
            </div>
            <div className="relative pl-8 border-l-2 border-secondary">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
              <div className="nature-card p-6 space-y-2">
                <h3 className="text-2xl font-normal text-primary">2028: Expansion & Sustainability</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Expand our reach to neighboring counties. Develop sustainable funding mechanisms for long-term
                  conservation efforts. Launch a research program to study local wildlife populations and habitats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 forest-pattern opacity-70"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-normal tracking-tighter text-primary sm:text-5xl">Our Leadership Team</h2>
              <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the dedicated individuals leading our conservation efforts.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 py-8 sm:py-12 md:grid-cols-1 lg:grid-cols-2">
            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-[300px]">
                <Image
                  src="https://media.discordapp.net/attachments/1267617224726810727/1350492530327949352/20250222_171601.jpg?ex=67e02a2e&is=67ded8ae&hm=91c21e03c1e6c7b84ff51c57d86f7f2061cc6eba6e1485c87acfc3f1b9d4d14f&=&format=webp&width=1026&height=770"
                  fill
                  alt="Marshall"
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Marshall Friedman</CardTitle>
                <CardDescription>President & Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Hey everyone! My name is Marshall Friedman, I'm a CO 27' student at Poolesville High School and the
                  founder/President of MoCo Wild. I love animals, and aspire to go into environmental law. I started
                  MoCo Wild, because I wanted to put more of a spotlight on endangered species within my
                  county/community. Our wildlife is such an important aspect of our ecosystem, and as they are unable to
                  advocate for themselves, we must advocate for them.
                </p>
              </CardContent>
            </Card>
            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-[300px]">
                <Image
                  src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.15752-9/485078425_1655167345883282_6249562186678101507_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=1dAxYMXFKsQQ7kNvgHWVM9C&_nc_oc=Adn8UOZWEEQJLx7gLUmVl3UNOlRi9v6lGVDHCtYQDbH63LpR-e1hVvliL89QP02-QZw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-iad3-1.xx&oh=03_Q7cD1wGFdDduxwzHhzKIfBgwQ4XjeVgcWPt0Z1xHHAuuKrhZfQ&oe=6807FC78"
                  fill
                  alt="Sid"
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Sid Harishanker</CardTitle>
                <CardDescription>Vice President</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Hi! I am Sid, a freshman at Poolesville High School. I love the environment, animals and leadership. I
                  am very interested in policy work and have testified and lobbied on numerous bills.
                </p>
              </CardContent>
            </Card>
            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-[300px]">
                <Image
                  src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.15752-9/483594225_629187973067775_5079568192621050160_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=rJq-TAs1TCoQ7kNvgEqSdE3&_nc_oc=AdnuOcJFe9IvrlKb3hgbHUzhUuWLSlaLCRatAZoJsZxm1qWGSi2o0RvtONrc6dRl1Bw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-iad3-1.xx&oh=03_Q7cD1wFE6Negfxcq1pD82B0yKSt8nxaB5eo0Hozx8LUZfImgLw&oe=6806F5A5"
                  fill
                  alt="Nhi"
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Nhi Truong</CardTitle>
                <CardDescription>Treasurer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Hi! My name is Nhi, and I am a member of Sherwood High Schools Class of 2026. I am passionate about
                  finance, especially investment banking. At the same time, I care deeply about animals and
                  environmental conservation.
                </p>
              </CardContent>
            </Card>
            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-[300px]">
                <Image
                  src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.15752-9/483226527_1077281050833131_7650066877904169901_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Zj24jz6kXWcQ7kNvgGZz8tm&_nc_oc=AdmNlnjqFyiyh04u22Ms32xPI7z2F-oisqiJ_dbp7V1_3tjaPRNwklXVm0Y9udvXvGA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-iad3-2.xx&oh=03_Q7cD1wHraTgd1jyGxgXoyo9-z_rCVTayYodDtTs3fyWmMjH2Sg&oe=6806D3A2"
                  fill
                  alt="Milkoftu"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Milkoftu Tarekegn</CardTitle>
                <CardDescription>Secretary</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Hello! My name is Milkoftu, I am currently a senior at Springbrook High School. My love for flamingos
                  interested me to join this org to help endangered species. Additionally, I am passionate about
                  advocating for equity in healthcare.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

