'use client'

import BackButton from '@/shared/ui/BackButton'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { INVY } from '@/shared/assets'
import { useParams } from 'next/navigation'

const projectDetail = [
  {
    title: 'INVY',
    logo: <INVY className="w-96 h-40" />,
    thumbnail: '/assets/image/dummy_hero.jpg',
    description: 'Description of my role in the project.',
    techStack: 'List of technologies used in the project.',
    timeline: 'Details about the project timeline and current status.',
    link: 'Details about the project link.',
    overview: 'Overview of the project.',
    gradientFrom: '#244b6f',
    gradientVia: '#182634',
    gradientTo: '#000000',
  },
  {
    title: 'INVY1',
    logo: <INVY className="w-96 h-40" />,
    thumbnail: '/assets/image/fubao.jpg',
    description: 'Description of my role in the project.',
    techStack: 'List of technologies used in the project.',
    timeline: 'Details about the project timeline and current status.',
    link: 'Details about the project link.',
    overview: 'Overview of the project.',
    gradientFrom: '#45397b',
    gradientVia: '#3A2947',
    gradientTo: '#000000',
  },
  {
    title: 'INVY2',
    logo: <INVY className="w-96 h-40" />,
    thumbnail: '/assets/image/dummy_hero.jpg',
    description: 'Description of my role in the project.',
    techStack: 'List of technologies used in the project.',
    timeline: 'Details about the project timeline and current status.',
    link: 'Details about the project link.',
    overview: 'Overview of the project.',
    gradientFrom: '#4f4e4e',
    gradientVia: '#393939',
    gradientTo: '#000000',
  },
]

const ProjectDetail = () => {
  const [animateBackground, setAnimateBackground] = useState(false)
  const { title } = useParams()

  useEffect(() => {
    setAnimateBackground(true)
  }, [])

  const project = projectDetail.find((project) => project.title === title)

  if (!project) {
    return (
      <div className="w-full min-h-screen flex flex-col px-8 py-6">
        <BackButton className="inline-flex" />
        <div className="flex flex-col items-center justify-center gap-4 pt-16">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <p className="text-neutral-400">Please check the URL and try again.</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`w-full min-h-screen px-8 py-6 transition-opacity duration-500 ${animateBackground ? 'opacity-100' : 'opacity-0'}`}
      style={{
        background: animateBackground
          ? `radial-gradient(at 50% 0%, ${project.gradientFrom}, ${project.gradientVia}, ${project.gradientTo})`
          : 'var(--bg-primary)',
      }}
    >
      <BackButton />
      <div className="w-2/3 mx-auto py-16 flex flex-col gap-12">
        <div className="flex items-center flex-col gap-12">
          <div className="flex flex-col items-center">
            {project.logo}
            <p className="text-neutral-400">{project.timeline}</p>
          </div>
          <div
            className={`rounded-lg overflow-hidden transition-all duration-1000 transform ${animateBackground ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <Image src={project.thumbnail} alt="Project" width={1000} height={1000} />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 px-2">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">My Role</h2>
              <p className="mt-2 text-neutral-300">{project.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Tech Stack</h2>
              <p className="mt-2 text-neutral-300">{project.techStack}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Timeline & Status</h2>
              <p className="mt-2 text-neutral-300">{project.timeline}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Link</h2>
              <p className="mt-2 text-neutral-300">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.link}
                </a>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-neutral-300">{project.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
