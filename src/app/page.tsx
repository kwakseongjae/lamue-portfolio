import HeroSection from '@/widgets/home/ui/HeroSection'
import AboutSection from '@/widgets/home/ui/AboutSection'
import SkillsSection from '@/widgets/home/ui/SkillsSection'
import ExperienceSection from '@/widgets/home/ui/ExperienceSection'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import { DotsIcon } from '@/shared/assets'

export default function Home() {
  return (
    <div className="flex flex-col divide-y-2 divide-[#1A1F1C]">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ScrollToTopButton />
      <button className="md:hidden cursor-pointer fixed bottom-[96px] right-8 bg-white hover:bg-gray-200 text-black w-[32px] h-[32px] flex items-center justify-center rounded-full shadow-lg">
        <DotsIcon className="w-[24px] h-[24px]" />
      </button>
    </div>
  )
}