import { ProfileImage } from '@/shared/assets'
import ProjectContainer from '@/shared/ui/ProjectContainer'
import ProjectItem from '@/shared/ui/ProjectItem'
import ProjectList from '@/shared/ui/ProjectList'

const projects = [
  {
    title: 'INVY',
    date: '2024.09 - 2024.12',
    description: 'Invy is a platform that allows you to create and manage your inventory.',
    imageSrc: ProfileImage,
    gradientFrom: '#244b6f',
    gradientVia: '#1c2d3e',
    gradientTo: '#100E13',
  },
  {
    title: 'INVY1',
    date: '2024.09 - 2024.12',
    description: 'Invy is a platform that allows you to create and manage your inventory.',
    imageSrc: ProfileImage,
    gradientFrom: '#45397b',
    gradientVia: '#3A2947',
    gradientTo: '#100E13',
  },
  {
    title: 'INVY2',
    date: '2024.09 - 2024.12',
    description: 'Invy is a platform that allows you to create and manage your inventory.',
    imageSrc: ProfileImage,
    gradientFrom: '#4f4e4e',
    gradientVia: '#393939',
    gradientTo: '#100E13',
  },
]

export default function ProjectsPage() {
  return (
    <ProjectContainer>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </ProjectList>
    </ProjectContainer>
  )
}
