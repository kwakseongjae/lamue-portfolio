declare module '*.svg' {
  import type { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGSVGElement>>
  export default content
}

declare module '*.json' {
  const value: any
  export default value
}
