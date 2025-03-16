import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-bg-primary/80 backdrop-blur-sm">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-primary transition-colors"
          aria-label="Go to home"
        >
          Portfolio
        </Link>

        <nav className="flex gap-8">
          <Link
            href="/"
            className="hover:text-primary transition-colors"
            aria-label="Go to home page"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-primary transition-colors"
            aria-label="Go to my projects page"
          >
            My Projects
          </Link>
          <Link
            href="/posts"
            className="hover:text-primary transition-colors"
            aria-label="Go to posts page"
          >
            Posts
          </Link>
        </nav>

        <a
          href="mailto:gkffhdnls13@gmail.com"
          className="px-4 py-2 bg-primary rounded-lg hover:bg-primary/80 transition-colors"
          aria-label="Contact me via email"
        >
          Contact Me
        </a>
      </div>
    </main>
  )
}
