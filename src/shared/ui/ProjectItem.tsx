import { ArrowIcon } from '@/shared/assets'
import Image from 'next/image'
import { StaticImageData } from 'next/image'

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
  return (
    <div className="relative w-full bg-[#191b19] rounded-2xl p-2 group cursor-pointer">
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div
        className={`bg-gradient-to-b from-[#2f2f2f] to-[#191b19] group-hover:bg-gradient-to-b group-hover:from-[${gradientFrom}] group-hover:via-[${gradientVia}] group-hover:to-[${gradientTo}] px-6 pt-8 flex flex-col border border-[#6F6767] border-opacity-50 rounded-xl overflow-hidden transition-colors duration-300`}
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
        <div className="px-32 pt-16 transition-all duration-400 transform translate-y-4 group-hover:translate-y-0">
          <Image
            src={imageSrc}
            alt={`Image of ${title} project`}
            aria-label={`Image of ${title} project`}
          />
        </div>
      </div>
    </div>
  )
}
