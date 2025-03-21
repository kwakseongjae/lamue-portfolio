import HeroSection from '@/widgets/home/ui/HeroSection'
import AboutSection from '@/widgets/home/ui/AboutSection'
import SkillsSection from '@/widgets/home/ui/SkillsSection'
import ExperienceSection from '@/widgets/home/ui/ExperienceSection'
import ScrollToTopButton from '@/shared/ui/ScrollToTopButton'
import FloatingCatButton from '@/shared/ui/FloatingCatButton'

export default function Home() {
  return (
    <div className="flex flex-col divide-y-2 divide-[#1A1F1C]">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ScrollToTopButton />
      <FloatingCatButton />
    </div>
  )
}
