interface ExperienceBlockProps {
  title: string
  duration: string
  description: string
}

export default function ExperienceBlock({ title, duration, description }: ExperienceBlockProps) {
  return (
    <div className="border-l-2 border-gray-600 px-4 flex flex-col gap-3">
      <div>
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-gray-600">{duration}</p>
      </div>
      <p className="text-xl text-slate-300">{description}</p>
    </div>
  )
}
