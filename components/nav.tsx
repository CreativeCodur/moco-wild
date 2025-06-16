import Link from "next/link"

export function Nav() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Moco Wild
        </Link>
      </div>
    </nav>
  )
}