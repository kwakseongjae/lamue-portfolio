import { ArrowIcon } from '@/shared/assets'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <button
      onClick={handleBack}
      className="text-xl font-semibold cursor-pointer"
      aria-label="Go back"
    >
      <div className="relative flex items-center gap-2 border border-slate-800 rounded-3xl px-4 py-2 bg-gray-800">
        <ArrowIcon className="w-5 h-5 rotate-270" fill="#fafaf8" />
        <span>Back</span>
      </div>
    </button>
  )
}
