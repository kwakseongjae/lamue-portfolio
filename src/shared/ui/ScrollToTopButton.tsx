'use client'

import { ArrowIcon } from '@/shared/assets'

export default function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className="cursor-pointer fixed bottom-[40px] right-8 bg-white hover:bg-gray-200 text-black w-[32px] h-[32px] flex items-center justify-center rounded-full shadow-lg"
    >
      <ArrowIcon
        className="w-[24px] h-[24px]"
        fill="#1E1E1E"
        stroke="#1E1E1E"
        aria-label="Scroll to top"
      />
    </button>
  )
}
