import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, Award, Palmtree, TreePine } from "lucide-react"

export default function LeadershipPage() {
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
                Leadership Initiatives
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Highlighting the initiatives and actions taken by our organization&apos;s leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Impact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 forest-pattern opacity-70"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 sm:gap-10 sm:px-4 md:px-10 md:gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm text-secondary font-medium">
                Leadership Impact
              </div>
              <h2 className="lg:leading-tighter text-3xl font-normal tracking-tighter text-primary sm:text-4xl">
                Nurturing Conservation Forward
              </h2>
              <p className="text-gray-600 dark:text-gray-300 md:text-xl">
                Our leadership team has spearheaded numerous initiatives to protect Montgomery County&apos;s wildlife
                and natural habitats. Through thoughtful planning, community engagement, and innovative conservation
                approaches, we&apos;ve made significant strides in our mission.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  fill
                  alt="Leadership team in action"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-16 h-16 text-secondary/80">
                <Palmtree className="w-full h-full" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 text-primary/80">
                <TreePine className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 bg-accent/50 dark:bg-accent/30"></div>
        <div className="absolute inset-0 leaf-pattern opacity-30"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-normal tracking-tighter text-primary sm:text-5xl">Key Initiatives</h2>
              <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Highlighting the major conservation efforts led by our team.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 py-8 sm:py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="nature-card border-0">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="nature-icon shrink-0">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <CardTitle className="text-primary">Wildlife Monitoring Program</CardTitle>
                  <CardDescription>Launched 2025</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our executive director established a county-wide wildlife monitoring program that engages citizen
                  scientists in tracking local species populations. This data has been crucial for identifying
                  conservation priorities.
                </p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                  Ongoing
                </Badge>
              </CardFooter>
            </Card>

            <Card className="nature-card border-0">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="nature-icon shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <CardTitle className="text-primary">School Partnership Program</CardTitle>
                  <CardDescription>Launched 2025</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our education coordinator developed a comprehensive wildlife education program now implemented in 20
                  Montgomery County schools, reaching thousands of students annually.
                </p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                  Expanding
                </Badge>
              </CardFooter>
            </Card>

            <Card className="nature-card border-0">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="nature-icon shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div className="grid gap-1">
                  <CardTitle className="text-primary">Habitat Restoration Fund</CardTitle>
                  <CardDescription>Launched 2026</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our conservation director established a dedicated fund for habitat restoration projects, which has
                  already supported the restoration of over 100 acres of critical wildlife habitat.
                </p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                  Active
                </Badge>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Opportunities Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 forest-pattern opacity-70"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-normal tracking-tighter text-primary sm:text-5xl">
                Leadership Opportunities
              </h2>
              <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our team and help lead the way in wildlife conservation.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <Card className="nature-card border-0 bg-gradient-to-br from-primary to-secondary text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Leadership Applications Opening Soon</CardTitle>
                <CardDescription className="text-gray-100">Fall 2025 - Join our Board of Directors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We&apos;re seeking passionate individuals with expertise in conservation, nonprofit management,
                  fundraising, or community organizing to join our Board of Directors. Help shape the future of wildlife
                  conservation in Montgomery County.
                </p>
                <div className="space-y-2">
                  <h3 className="font-bold">Qualifications:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-100">
                    <li>Commitment to wildlife conservation</li>
                    <li>Professional expertise in a relevant field</li>
                    <li>Ability to attend quarterly board meetings</li>
                    <li>Willingness to serve on at least one committee</li>
                    <li>Fundraising experience (preferred)</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/get-involved">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="cozy-button bg-white text-primary hover:bg-white/90 border-none"
                  >
                    Get Notified When Applications Open
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

