export default function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center py-3">
      <h1 className="text-3xl font-semibold">{children}</h1>
    </div>
  )
}
