import { LocationIcon } from '@/shared/assets'
import Image from 'next/image'
import { ProfileImage } from '@/shared/assets'

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 gap-4">
      <div className="flex space-x-6 font-semibold items-center">
        <Image
          src={ProfileImage}
          alt="profile"
          width={100}
          height={100}
          className="rounded-full w-25 aspect-square object-cover"
        />
        <div className="flex flex-col gap-2">
          <div className="flex space-x-2 text-lg">
            <p>HI, I'M</p>
            <p>KWAK SEONG JAE</p>
          </div>
          <div className="flex space-x-2 items-center">
            <LocationIcon className="w-5 h-5" />
            <p>SEOUL, KOREA</p>
          </div>
        </div>
      </div>
      <div className="font-bold text-8xl">
        <p className="text-[#9C76F7]">BETTER</p>
        <p className="text-[#F8D282]">EXPERIENCE</p>
        <p className="text-[#FFFFFF]">FULL-STACK</p>
        <p className="text-[#70EDD2]">DEVELOPER</p>
      </div>
    </div>
  )
}

export default HeroSection
