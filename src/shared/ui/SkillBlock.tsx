'use client'

import { useState, useEffect } from 'react'

type SkillBlockProps = {
  children: React.ReactNode
  delay: number
  color: keyof typeof borderColor
  domain: 'Mobile' | 'Frontend' | 'Backend'
}

const borderColor = {
  '#3FB6D3': 'border-[#3FB6D3]',
  '#FFCA28': 'border-[#FFCA28]',
  '#6DB33F': 'border-[#6DB33F]',
}

const domainColor = {
  Mobile: 'text-[#3FB6D3]',
  Frontend: 'text-[#FFCA28]',
  Backend: 'text-[#6DB33F]',
}

export default function SkillBlock({ children, delay, color, domain }: SkillBlockProps) {
  const [showBorder, setShowBorder] = useState(false)
  const [showDomain, setShowDomain] = useState(false)

  useEffect(() => {
    const borderTimer = setTimeout(() => {
      setShowBorder(true)
    }, delay)

    const domainTimer = setTimeout(() => {
      setShowDomain(true)
    }, delay + 500)

    return () => {
      clearTimeout(borderTimer)
      clearTimeout(domainTimer)
    }
  }, [delay])

  return (
    <div className="flex space-x-3">
      <div
        className={`w-fit flex gap-4 rounded-3xl px-4 py-3 transition-all duration-500 border-2 ${
          showBorder ? borderColor[color] : 'border-transparent'
        }`}
      >
        {children}
      </div>
      <span
        className={`text-xl font-semibold transition-opacity duration-500 ${
          showDomain ? 'opacity-100' : 'opacity-0'
        } ${domainColor[domain]}`}
      >
        {`// ${domain}`}
      </span>
    </div>
  )
}
