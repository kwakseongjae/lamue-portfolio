import Link from 'next/link'
import { HomeIcon, ProjectIcon, PostIcon, MailIcon } from '@/shared/assets'

type MainNavigationProps = {
  pathname: string
}

export default function MainNavigation({ pathname }: MainNavigationProps) {
  return (
    <>
      <Link href="/" className="text-xl font-semibold cursor-pointer" aria-label="Go to home">
        <div className="relative flex items-center gap-2 border border-slate-800 rounded-3xl px-4 py-2">
          <div className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span>Lamue</span>
        </div>
      </Link>

      <nav className="hidden md:flex gap-4 font-semibold border border-slate-800 rounded-3xl px-3 py-2">
        <Link href="/" aria-label="Go to home page">
          <div
            className={`flex items-center gap-1 cursor-pointer ${pathname === '/' ? 'text-white' : 'text-slate-400'}`}
          >
            <HomeIcon
              className={`w-5 h-5 ${pathname === '/' ? 'stroke-white' : 'stroke-slate-400'}`}
              strokeWidth={2}
            />
            <span>Home</span>
          </div>
        </Link>
        <Link href="/projects" aria-label="Go to my projects page">
          <div
            className={`flex items-center gap-1 cursor-pointer ${pathname === '/projects' ? 'text-white' : 'text-slate-400'}`}
          >
            <ProjectIcon
              className={`w-5 h-5 ${pathname === '/projects' ? 'stroke-white' : 'stroke-slate-400'}`}
              strokeWidth={2}
            />
            <span>My Projects</span>
          </div>
        </Link>
        <Link href="/posts" aria-label="Go to posts page">
          <div
            className={`flex items-center gap-1 cursor-pointer ${pathname === '/posts' ? 'text-white' : 'text-slate-400'}`}
          >
            <PostIcon
              className={`w-5 h-5 ${pathname === '/posts' ? 'stroke-white' : 'stroke-slate-400'}`}
            />
            <span>Posts</span>
          </div>
        </Link>
      </nav>

      <a
        href="mailto:gkffhdnls13@gmail.com"
        className="bg-primary rounded-3xl font-semibold"
        aria-label="Contact me via email"
      >
        <div className="flex items-center gap-1 border border-slate-800 rounded-3xl px-4 py-2">
          <MailIcon className="w-5 h-5" />
          <span>Contact Me</span>
        </div>
      </a>
    </>
  )
}
