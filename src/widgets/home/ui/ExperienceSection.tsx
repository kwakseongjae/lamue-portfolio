import ExperienceBlock from '@/shared/ui/ExperienceBlock'
import ExperienceContainer from '@/shared/ui/ExperienceContainer'
import SectionContainer from '@/shared/ui/SectionContainer'
import SectionHeader from '@/shared/ui/SectionHeader'

const experience = [
  {
    title: 'Full-Stack Web Developer',
    duration: '2024.01 - 2024.06',
    description:
      'Adding features to an already built page. Minor website modifications. The project was ended in March 2024.Adding features to an already built page. Minor website modifications. The project was ended in March 2024.Adding features to an already built page. Minor website modifications. The project was ended in March 2024.Adding features to an already built page. Minor website modifications. The project was ended in March 2024.Adding features to an already built page. Minor website modifications. The project was ended in March 2024.',
  },
  {
    title: 'Full-Stack Web Developer',
    duration: '2024.01 - 2024.06',
    description:
      'Adding features to an already built page. Minor website modifications. The project was ended in March 2024.Adding features to an already built page. Minor website modifications. The project was ended in March 2024.Adding features to an already built page. Minor website modifications. The project was ended in March 2024.Adding features to an already built page. Minor website modifications. The project was ended in March 2024.Adding features to an already built page. Minor website modifications. The project was ended in March 2024.',
  },
  {
    title: 'Full-Stack Web Developer',
    duration: '2024.01 - 2024.06',
    description:
      'Adding features to an already built page. Minor website modifications. The project was ended in March 2024.Adding features to an already built page. Minor website modifications. The project was ended in March 2024.Adding features to an already built page. Minor website modifications. The project was ended in March 2024.Adding features to an already built page. Minor website modifications. The project was ended in March 2024.Adding features to an already built page. Minor website modifications. The project was ended in March 2024.',
  },
]

export default function ExperienceSection() {
  return (
    <SectionContainer>
      <SectionHeader>// EXPERIENCE</SectionHeader>
      <ExperienceContainer>
        {experience.map((item, idx) => (
          <ExperienceBlock key={idx} {...item} />
        ))}
      </ExperienceContainer>
    </SectionContainer>
  )
}
