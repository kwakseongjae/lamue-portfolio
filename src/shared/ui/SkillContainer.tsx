type SkillContainerProps = {
  children: React.ReactNode
}

export default function SkillContainer({ children }: SkillContainerProps) {
  return <div className="flex flex-col gap-3">{children}</div>
}
