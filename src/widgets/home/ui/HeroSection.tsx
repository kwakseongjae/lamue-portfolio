'use client'

import { LocationIcon } from '@/shared/assets'
import Image from 'next/image'
import { ProfileImage } from '@/shared/assets'
import Lottie from 'lottie-react'
import { CursorLottie } from '@/shared/assets'
import SectionContainer from '@/shared/ui/SectionContainer'

const HeroSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col items-center py-6 gap-4">
        <div className="flex space-x-6 font-semibold items-center">
          <Image
            src={ProfileImage}
            alt="profile"
            width={100}
            height={100}
            className="rounded-full w-25 aspect-square object-cover"
          />
          <div className="flex flex-col gap-2">
            <div className="flex space-x-2 text-lg relative border border-slate-800 rounded-3xl px-4 pt-2 pb-1">
              <p>HI, I'M</p>
              <p
                className="border-b-2"
                style={{
                  borderImage:
                    'repeating-linear-gradient(to right, transparent 0%, transparent 2%, #E05634 2%, #E05634 6%) 1 0 100%',
                  borderImageSlice: '0 0 1 0',
                  borderStyle: 'solid',
                }}
              >
                KWAK SEONG JAE
              </p>
              <Lottie
                animationData={CursorLottie}
                className="absolute -bottom-13 right-0 w-15 h-15"
                loop={false}
              />
            </div>
            <div className="flex space-x-2 items-center">
              <LocationIcon className="w-5 h-5" />
              <p>SEOUL, KOREA</p>
            </div>
          </div>
        </div>
        <div className="font-bold text-7xl sm:text-8xl">
          <p className="text-[#9C76F7]">BETTER</p>
          <p className="text-[#F8D282]">EXPERIENCE</p>
          <p className="text-[#FFFFFF]">FULL-STACK</p>
          <p className="text-[#70EDD2]">DEVELOPER</p>
        </div>
      </div>
    </SectionContainer>
  )
}

export default HeroSection
