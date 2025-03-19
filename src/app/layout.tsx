import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/widgets/header'

export const metadata: Metadata = {
  title: '포트폴리오 | Frontend Developer',
  description:
    'Lamue의 Frontend Developer의 포트폴리오 웹사이트입니다. React, Next.js, TypeScript를 활용한 프로젝트들을 확인하실 수 있습니다.',
  keywords: ['Frontend', 'Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Kwak Seong Jae' }],
  creator: 'Kwak Seong Jae',
  icons: {
    icon: '/assets/image/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-bg-primary text-white min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
