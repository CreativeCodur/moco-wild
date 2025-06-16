import Link from "next/link"

export function MainNav() {
  return (
    <nav className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
      <Link
        href="/"
        className="text-sm sm:text-sm font-headline font-normal text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-sm sm:text-sm font-headline font-normal text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
      >
        About Us
      </Link>
      <Link
        href="/get-involved"
        className="text-sm sm:text-sm font-headline font-normal text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
      >
        Get Involved
      </Link>
    </nav>
  )
}

