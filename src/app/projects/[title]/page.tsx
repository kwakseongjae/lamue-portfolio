'use client'

import { useParams } from 'next/navigation' // Use useParams instead of useRouter

const ProjectDetail = () => {
  const { title } = useParams()

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Project: {title}</h1>
      <p className="mt-2">Details about the project will go here.</p>
    </div>
  )
}

export default ProjectDetail
