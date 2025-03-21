import { DotsIcon } from '@/shared/assets'
export default function FloatingCatButton() {
  return (
    <button className="md:hidden cursor-pointer fixed bottom-[96px] right-8 bg-white hover:bg-gray-200 text-black w-[32px] h-[32px] flex items-center justify-center rounded-full shadow-lg">
      <DotsIcon className="w-[24px] h-[24px]" />
    </button>
  )
}
