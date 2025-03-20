import SectionContainer from '@/shared/ui/SectionContainer'
import SectionHeader from '@/shared/ui/SectionHeader'

export default function AboutSection() {
  return (
    <SectionContainer>
      <SectionHeader>// ABOUT ME</SectionHeader>
      {/* Introduction */}
      <p className="text-2xl">
        Empowering success in the digital landscape.
        <br />
        Together, we shape a visionary future,
        <br />
        delivering on promises and continuously pioneering innovation.
      </p>
    </SectionContainer>
  )
}
