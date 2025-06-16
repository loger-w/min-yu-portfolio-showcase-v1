import { Database } from 'lucide-react'
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaSass,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNestjs,
  SiVite,
  SiAntdesign,
  SiShadcnui,
  SiNextdotjs
} from 'react-icons/si'
import { useTranslation } from 'react-i18next'

export default function Skills() {
  const { t } = useTranslation('skills')

  // 技能數據 - 按類別分組
  const frontendSkills = [
    { name: 'Next.js', icon: <SiNextdotjs className="h-10 w-10" /> },
    { name: 'React', icon: <FaReact className="h-10 w-10" /> },
    { name: 'Angular', icon: <FaAngular className="h-10 w-10" /> },
    { name: 'JavaScript', icon: <SiJavascript className="h-10 w-10" /> },
    { name: 'TypeScript', icon: <SiTypescript className="h-10 w-10" /> },
    { name: 'HTML5', icon: <SiHtml5 className="h-10 w-10" /> },
    { name: 'CSS3', icon: <SiCss3 className="h-10 w-10" /> },
  ]

  const stylingSkills = [
    { name: 'SCSS', icon: <FaSass className="h-10 w-10" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-10 w-10" /> },
    { name: 'Ant Design', icon: <SiAntdesign className="h-10 w-10" /> },
    { name: 'Shadcn UI', icon: <SiShadcnui className="h-10 w-10" /> },
  ]

  const stateManagementSkills = [
    { name: 'Zustand', icon: <Database className="h-10 w-10" /> },
    { name: 'Redux', icon: <Database className="h-10 w-10" /> },
  ]

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs className="h-10 w-10" /> },
    { name: 'Nest.js', icon: <SiNestjs className="h-10 w-10" /> },
    { name: 'Python', icon: <FaPython className="h-10 w-10" /> },
  ]

  const toolsSkills = [
    { name: 'Git', icon: <FaGitAlt className="h-10 w-10" /> },
    { name: 'Vite', icon: <SiVite className="h-10 w-10" /> },
  ]

  // 渲染技能卡片
  const renderSkillCard = (skill: { name: string, icon: React.ReactNode }) => (
    <div
      key={skill.name}
      className="bg-blue-900/30 border border-blue-800/30 rounded-lg p-6 flex flex-col items-center hover:border-blue-500/50 transition-all hover:translate-y-[-5px]"
    >
      <div className="text-white mb-4">{skill.icon}</div>
      <span className="font-medium text-center text-blue-100">{skill.name}</span>
    </div>
  )

  // 渲染技能分類
  const renderSkillCategory = (title: string, skills: Array<{ name: string, icon: React.ReactNode }>) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map(renderSkillCard)}
      </div>
    </div>
  )

  return (

    <div className="max-w-3xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('skills')}</h1>
        <div className="h-1 w-20 bg-blue-500 mb-8"></div>
      </div>

      <div className="mb-16">
        {renderSkillCategory(t('frontend'), frontendSkills)}
        {renderSkillCategory(t('styling'), stylingSkills)}
        {renderSkillCategory(t('state-management'), stateManagementSkills)}
        {renderSkillCategory(t('backend'), backendSkills)}
        {renderSkillCategory(t('tools'), toolsSkills)}
      </div>
    </div>
  )
} 