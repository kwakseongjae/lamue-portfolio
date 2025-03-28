'use client'

import { ArrowIcon } from '@/shared/assets'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'

interface ProjectItemProps {
  title: string
  date: string
  description: string
  imageSrc: StaticImageData
  gradientFrom: string
  gradientVia: string
  gradientTo: string
}

export default function ProjectItem({
  title,
  date,
  description,
  imageSrc,
  gradientFrom,
  gradientVia,
  gradientTo,
}: ProjectItemProps) {
  const router = useRouter()

  const handleNavigateToDetail = () => {
    router.push(`/projects/${encodeURIComponent(title)}`)
  }

  return (
    <div
      className="relative w-full bg-[#191b19] rounded-2xl p-2 group cursor-pointer"
      onClick={handleNavigateToDetail}
      style={
        {
          '--gradient-from': gradientFrom,
          '--gradient-via': gradientVia,
          '--gradient-to': gradientTo,
        } as React.CSSProperties
      }
    >
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div
        className={`bg-gradient-to-b from-[#2f2f2f] to-[#191b19] group-hover:bg-radial-[at_50%_0%] group-hover:from-[var(--gradient-from)] group-hover:via-[var(--gradient-via)] group-hover:to-[var(--gradient-to)] px-6 pt-8 flex flex-col border border-[#6F6767] border-opacity-50 rounded-xl overflow-hidden transition-colors duration-300`}
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-semibold">{title}</h1>
              <p className="text-sm text-neutral-300">{date}</p>
            </div>
            <ArrowIcon className="w-7 h-7 rotate-90" fill="#fafaf8" aria-label="Arrow icon" />
          </div>
          <p className="text-neutral-400">{description}</p>
        </div>
        <div className="flex justify-center xl:pt-16 lg:pt-12 md:pt-8 pt-4 transition-all duration-400 transform translate-y-4 group-hover:translate-y-0">
          <Image
            src={imageSrc}
            alt={`Image of ${title} project`}
            aria-label={`Image of ${title} project`}
            className="w-2/3"
          />
        </div>
      </div>
    </div>
  )
}
