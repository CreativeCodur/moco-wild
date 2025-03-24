import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palmtree, TreePine, Fish, Flower, Heart } from "lucide-react"

export default function RecordPage() {
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
                Our Conservation Story
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Documenting our journey to protect and nurture Montgomery County&apos;s wildlife.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Actions Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 forest-pattern opacity-70"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-60">
                <Image src="/placeholder.svg?height=400&width=600" fill alt="Stream Cleanup" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-secondary/90 hover:bg-secondary text-white border-0">
                  April 2025
                </Badge>
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full">
                  <Fish className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Rock Creek Stream Renewal</CardTitle>
                <CardDescription>Habitat Restoration</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Our team of 50 volunteers removed over 500 pounds of trash from Rock Creek, improving water quality
                  and habitat for aquatic species. This effort helped restore critical breeding grounds for several
                  native fish species.
                </p>
              </CardContent>
            </Card>

            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-60">
                <Image src="/placeholder.svg?height=400&width=600" fill alt="Tree Planting" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-secondary/90 hover:bg-secondary text-white border-0">
                  May 2025
                </Badge>
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full">
                  <TreePine className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Sligo Creek Reforestation</CardTitle>
                <CardDescription>Habitat Creation</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-600 dark:text-gray-300">
                  We planted 200 native trees along Sligo Creek to restore riparian habitat and reduce erosion. These
                  trees will provide food and shelter for numerous bird and insect species while improving water
                  quality.
                </p>
              </CardContent>
            </Card>

            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-60">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  fill
                  alt="Wildlife Survey"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-secondary/90 hover:bg-secondary text-white border-0">
                  June 2025
                </Badge>
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full">
                  <TreePine className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">County-wide Wildlife Census</CardTitle>
                <CardDescription>Research & Monitoring</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Our team conducted a comprehensive wildlife survey across Montgomery County, documenting over 150
                  species including several that were previously thought to be locally extinct. This data is guiding our
                  conservation priorities.
                </p>
              </CardContent>
            </Card>

            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-60">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  fill
                  alt="Educational Workshop"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-secondary/90 hover:bg-secondary text-white border-0">
                  July 2025
                </Badge>
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Wildlife Education Series</CardTitle>
                <CardDescription>Community Education</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-600 dark:text-gray-300">
                  We conducted a series of educational workshops at 15 schools across Montgomery County, reaching over
                  2,000 students. These workshops focused on local wildlife identification, habitat needs, and
                  conservation actions.
                </p>
              </CardContent>
            </Card>

            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-60">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  fill
                  alt="Butterfly Garden"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-secondary/90 hover:bg-secondary text-white border-0">
                  August 2025
                </Badge>
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full">
                  <Flower className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Pollinator Garden Creation</CardTitle>
                <CardDescription>Habitat Creation</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-600 dark:text-gray-300">
                  We created five native pollinator gardens in public spaces throughout Montgomery County. These gardens
                  provide essential habitat for bees, butterflies, and other pollinators while serving as educational
                  sites for the community.
                </p>
              </CardContent>
            </Card>

            <Card className="nature-card overflow-hidden border-0">
              <div className="relative h-60">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  fill
                  alt="Wildlife Corridor"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-secondary/90 hover:bg-secondary text-white border-0">
                  September 2025
                </Badge>
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full">
                  <Palmtree className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">Wildlife Corridor Protection</CardTitle>
                <CardDescription>Policy & Advocacy</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Our advocacy efforts led to the county's adoption of a wildlife corridor protection plan, ensuring
                  safe passage for animals between fragmented habitats. This policy will help maintain genetic diversity
                  in wildlife populations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

