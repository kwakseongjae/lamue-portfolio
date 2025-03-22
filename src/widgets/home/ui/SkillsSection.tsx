import {
  CSSIcon,
  DartIcon,
  FlutterIcon,
  HTMLIcon,
  JavaIcon,
  JavascriptIcon,
  NextIcon,
  ReactIcon,
  ReactQueryIcon,
  ReduxIcon,
  SpringBootIcon,
  SpringSecurityIcon,
  StyledComponentsIcon,
  TailwindCSSIcon,
  TypescriptIcon,
  ZustandIcon,
} from '@/shared/assets'
import SectionContainer from '@/shared/ui/SectionContainer'
import SectionHeader from '@/shared/ui/SectionHeader'
import SkillBlock from '@/shared/ui/SkillBlock'
import SkillContainer from '@/shared/ui/SkillContainer'

export default function SkillsSection() {
  return (
    <SectionContainer>
      <SectionHeader>{`// SKILLS`}</SectionHeader>
      <SkillContainer>
        {/* Mobile Skills */}
        <SkillBlock delay={1000} color="#3FB6D3" domain="Mobile">
          <div className="flex items-center gap-1">
            <DartIcon className="w-6 h-6" />
            <span className="text-lg">Dart</span>
          </div>
          <div className="flex items-center gap-1">
            <FlutterIcon className="w-6 h-6" />
            <span className="text-lg">Flutter</span>
          </div>
        </SkillBlock>

        {/* Frontend Skills */}
        <SkillBlock delay={2000} color="#FFCA28" domain="Frontend">
          <div className="flex flex-col gap-4">
            <div className="flex space-x-4">
              <div className="flex items-center gap-1">
                <HTMLIcon className="w-6 h-6" />
                <span className="text-lg">HTML</span>
              </div>
              <div className="flex items-center gap-1">
                <CSSIcon className="w-6 h-6" />
                <span className="text-lg">CSS</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center gap-1">
                <JavascriptIcon className="w-6 h-6" />
                <span className="text-lg">JavaScript</span>
              </div>
              <div className="flex items-center gap-1">
                <TypescriptIcon className="w-6 h-6" />
                <span className="text-lg">TypeScript</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center gap-1">
                <ReactIcon className="w-6 h-6" />
                <span className="text-lg">React</span>
              </div>
              <div className="flex items-center gap-1">
                <NextIcon className="w-6 h-6" />
                <span className="text-lg">Next.js</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center gap-1">
                <ReduxIcon className="w-6 h-6" />
                <span className="text-lg">Redux</span>
              </div>
              <div className="flex items-center gap-1">
                <ZustandIcon className="w-6 h-6" />
                <span className="text-lg">Zustand</span>
              </div>
              <div className="flex items-center gap-1">
                <ReactQueryIcon className="w-6 h-6" />
                <span className="text-lg">React Query</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center gap-1">
                <StyledComponentsIcon className="w-6 h-6" />
                <span className="text-lg">Styled Components</span>
              </div>
              <div className="flex items-center gap-1">
                <TailwindCSSIcon className="w-6 h-6" />
                <span className="text-lg">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </SkillBlock>

        {/* Backend Skills */}
        <SkillBlock delay={3000} color="#6DB33F" domain="Backend">
          <div className="flex items-center gap-1">
            <JavaIcon className="w-6 h-6" />
            <span className="text-lg">Java</span>
          </div>
          <div className="flex items-center gap-1">
            <SpringBootIcon className="w-6 h-6" />
            <span className="text-lg">Spring Boot</span>
          </div>
          <div className="flex items-center gap-1">
            <SpringSecurityIcon className="w-6 h-6" />
            <span className="text-lg">Spring Security</span>
          </div>
        </SkillBlock>
      </SkillContainer>
    </SectionContainer>
  )
}
