'use client'

import BackButton from '@/shared/ui/BackButton'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const ProjectDetail = () => {
  const { title } = useParams()
  const [animateBackground, setAnimateBackground] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateBackground(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`w-full min-h-screen px-8 py-4 transition-colors duration-1000 ${
        animateBackground
          ? 'bg-radial-[at_50%_0%] from-[#244b6f] via-[#1c2d3e] to-[#000000]'
          : 'bg-bg-primary'
      }`}
    >
      <BackButton />
      <div className="p-4">
        <h1 className="text-3xl font-bold">Project: {title}</h1>
        <p className="mt-2">Details about the project will go here.</p>
      </div>
    </div>
  )
}

export default ProjectDetail
