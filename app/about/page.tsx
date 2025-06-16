import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageWithLoading } from "@/components/image-with-loading"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-6 md:py-12 lg:py-24 relative overflow-hidden hero-section">
        <div className="absolute inset-0 nature-gradient clip-wave z-0"></div>
        <div className="absolute inset-0 leaf-pattern z-0 opacity-30"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-3 md:space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-2xl font-normal tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-5xl/none hero-title">
                About MoCo Wild
              </h1>
              <p className="mx-auto max-w-[700px] text-white dark:text-white text-base sm:text-lg md:text-xl hero-description">
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
              <p className="text-zinc-600 dark:text-zinc-600 md:text-xl">
                MoCo Wild is dedicated to the protection and conservation of Montgomery County&apos;s diverse wildlife
                and natural habitats. We believe in the intrinsic value of all living beings and work tirelessly to
                ensure their survival for future generations.
              </p>
              <p className="text-zinc-600 dark:text-zinc-600 md:text-xl">
                Through community engagement, education, advocacy, and direct conservation efforts, we strive to create
                a sustainable environment where wildlife can thrive alongside human communities.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                <ImageWithLoading
                  src="/images/IMG_20240930_185051_665.jpg"
                  alt="Our Mission - Nurturing Wildlife"
                  className="object-cover"
                  containerClassName="h-full w-full"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-16 h-16 text-secondary/80">
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
              <p className="max-w-[900px] text-zinc-600 dark:text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A timeline of our planned initiatives and goals from 2024 onwards!
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 py-12">
            <div className="relative pl-8 pb-8 border-l-2 border-secondary">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
              <div className="nature-card p-6 space-y-2">
                <h3 className="text-2xl font-normal text-primary">2024-2025: Establishing Community</h3>
                <p className="text-zinc-600 dark:text-zinc-600">
                  Established MoCo Wild as a recognized youth conservation organization in Montgomery County. Launched fundraisers with established Conservation organizations, building partnerships. Policy projects that make an impact and involve our members.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-secondary">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
              <div className="nature-card p-6 space-y-2">
                <h3 className="text-2xl font-normal text-primary">2026: Conservation & Policy</h3>
                <p className="text-zinc-600 dark:text-zinc-600">
                  Implement targeted conservation projects for specific endangered species. Advocate for stronger
                  wildlife protection policies at the county level. Establish a wildlife rehabilitation center.
                </p>
              </div>
            </div>
            <div className="relative pl-8 border-l-2 border-secondary">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
              <div className="nature-card p-6 space-y-2">
                <h3 className="text-2xl font-normal text-primary">Onwards!: Expansion & Sustainability</h3>
                <p className="text-zinc-600 dark:text-zinc-600">
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
              <p className="max-w-[900px] text-zinc-600 dark:text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the dedicated individuals leading our conservation efforts.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 py-8 sm:py-12 md:grid-cols-2">
            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-[300px] w-full flex items-center justify-center">
                <ImageWithLoading
                  src="/images/20250222_171601.jpg"
                  alt="Marshall Friedman - President & Founder of MoCo Wild"
                  className="object-cover"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Marshall Friedman</CardTitle>
                <CardDescription>President & Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-600">
                  Hey everyone! My name is Marshall Friedman, I'm a CO 27' student at Poolesville High School and the
                  founder/President of MoCo Wild. I love animals, and aspire to go into environmental law. I started
                  MoCo Wild, because I wanted to put more of a spotlight on endangered species within my
                  county/community. Our wildlife is such an important aspect of our ecosystem, and as they are unable to
                  advocate for themselves, we must advocate for them.
                </p>
              </CardContent>
            </Card>
            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-[300px] flex items-center justify-center">
                <ImageWithLoading
                  src="/images/IMG_20240922_195146_080.jpg"
                  alt="Sid Harishanker - Vice President of MoCo Wild"
                  className="object-cover"
                  width={500}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Sid Harishanker</CardTitle>
                <CardDescription>Vice President</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-600">
                  Hi! I am Sid, a freshman at Poolesville High School. I love the environment, animals and leadership. I
                  am very interested in policy work and have testified and lobbied on numerous bills.
                </p>
              </CardContent>
            </Card>
            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-[300px] flex items-center justify-center">
                <ImageWithLoading
                  src="/images/Screenshot 2025-06-16 020417.png"
                  alt="Nhi Truong - Treasurer of MoCo Wild"
                  className="object-cover"
                  width={280}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Nhi Truong</CardTitle>
                <CardDescription>Treasurer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-600">
                  Hi! My name is Nhi, and I am a member of Sherwood High Schools Class of 2026. I am passionate about
                  finance, especially investment banking. At the same time, I care deeply about animals and
                  environmental conservation.
                </p>
              </CardContent>
            </Card>
            <Card className="nature-card overflow-hidden border-0 h-full">
              <div className="relative h-[300px] flex items-center justify-center">
                <ImageWithLoading
                  src="/images/1721233484653.jpg"
                  alt="Milkoftu Tarekegn - Secretary of MoCo Wild"
                  className="object-cover"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Milkoftu Tarekegn</CardTitle>
                <CardDescription>Secretary</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-600">
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

