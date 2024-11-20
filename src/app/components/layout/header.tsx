import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">My Blog</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            首页
          </Link>
          <Link href="/archives" className="transition-colors hover:text-foreground/80">
            归档
          </Link>
          <Link href="/docs" className="transition-colors hover:text-foreground/80">
            实践
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80">
            关于
          </Link>
        </nav>
      </div>
    </header>
  )
} 