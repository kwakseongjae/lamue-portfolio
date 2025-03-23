'use client'

import { usePathname } from 'next/navigation'
import MainNavigation from '@/shared/ui/MainNavigation'

export const Header = () => {
  const pathname = usePathname()

  const isDetailPage = pathname.startsWith('/projects/') || pathname.startsWith('/posts/')

  return (
    <>
      {!isDetailPage && (
        <header className="flex items-center justify-between px-8 py-4 bg-bg-primary/80 backdrop-blur-sm">
          <MainNavigation pathname={pathname} />
        </header>
      )}
    </>
  )
}
