interface ExperienceContainerProps {
  children: React.ReactNode
}

export default function ExperienceContainer({ children }: ExperienceContainerProps) {
  return <div className="flex flex-col gap-8">{children}</div>
}
