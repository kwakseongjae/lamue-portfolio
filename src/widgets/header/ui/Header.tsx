'use client'

import { usePathname } from 'next/navigation'
import BackButton from '@/shared/ui/BackButton'
import MainNavigation from '@/shared/ui/MainNavigation'

export const Header = () => {
  const pathname = usePathname()

  const isDetailPage = pathname.startsWith('/projects/') || pathname.startsWith('/posts/')

  return (
    <header className="flex items-center justify-between px-8 py-4">
      {isDetailPage ? <BackButton /> : <MainNavigation pathname={pathname} />}
    </header>
  )
}
