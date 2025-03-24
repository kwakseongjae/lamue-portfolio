'use client'

import { useState, useEffect, useRef } from 'react'
import { HomeIcon, ProjectIcon, PostIcon, MenuIcon } from '@/shared/assets'

export default function FloatingCatButton() {
  const [isClicked, setIsClicked] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node) &&
      !(event.target as HTMLElement).closest('.nav-item')
    ) {
      setIsClicked(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`md:hidden cursor-pointer fixed bottom-[96px] right-8 bg-white hover:bg-gray-200 text-black w-[32px] h-[32px] flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 ${
          isClicked ? 'scale-120' : 'scale-100'
        }`}
      >
        <MenuIcon className="w-[24px] h-[24px]" />
      </button>
      {isClicked && (
        <div className="fixed bottom-[148px] right-8 flex flex-col gap-6">
          <div className="flex items-center gap-3  justify-end opacity-0 nav-item animate-float-home">
            <div className="px-2 py-1 rounded-md bg-white">
              <span className="font-semibold text-black">Home</span>
            </div>
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-white shadow-lg ">
              <HomeIcon className="w-[24px] h-[24px]" strokeWidth={2} stroke="#1E1E1E" />
            </div>
          </div>
          <div className="flex items-center gap-3  justify-end opacity-0 nav-item animate-float-projects">
            <div className="px-2 py-1 rounded-md bg-white">
              <span className="font-semibold text-black">Projects</span>
            </div>
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-white shadow-lg ">
              <ProjectIcon className="w-[24px] h-[24px]" strokeWidth={2} stroke="#1E1E1E" />
            </div>
          </div>
          <div className="flex items-center gap-3  justify-end opacity-0 nav-item animate-float-posts">
            <div className="px-2 py-1 rounded-md bg-white">
              <span className="font-semibold text-black">Posts</span>
            </div>
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-white shadow-lg ">
              <PostIcon className="w-[24px] h-[24px]" stroke="#1E1E1E" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
