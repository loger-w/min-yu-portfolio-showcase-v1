// import { useState } from 'react'
import { useTranslation } from 'react-i18next'
// import { Link } from 'react-router-dom'
// import { Button } from '@/components/ui/button'
// import { ArrowRight, ExternalLink, Github } from 'lucide-react'
// import { FaReact, FaVuejs, FaNodeJs } from 'react-icons/fa'
// import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFirebase } from 'react-icons/si'

// 項目類型定義
// type Project = {
//   id: number
//   title: string
//   description: string
//   image: string
//   tags: string[]
//   technologies: React.ReactNode[]
//   liveUrl?: string
//   githubUrl?: string
//   featured: boolean
// }

export default function Projects() {
  const { t } = useTranslation('projects')
  // 過濾狀態
  // const [filter, setFilter] = useState<'all' | 'featured'>('all')

  // 項目數據
  // const projects: Project[] = [
    // {
    //   id: 1,
    //   title: '天氣預報應用',
    //   description: '一個美觀的天氣預報應用，提供實時天氣數據和未來預報。包括位置搜索、詳細天氣信息和互動地圖。',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    //   tags: ['API 集成', '前端開發', 'UI/UX'],
    //   technologies: [
    //     <FaReact key="react" className="h-5 w-5" title="React" />,
    //     <SiTypescript key="typescript" className="h-5 w-5" title="TypeScript" />,
    //     <SiTailwindcss key="tailwind" className="h-5 w-5" title="Tailwind CSS" />,
    //   ],
    //   liveUrl: 'https://google.com',
    //   githubUrl: 'https://google.com',
    //   featured: true,
    // },
  // ]

  // 根據過濾條件篩選項目
  // const filteredProjects = filter === 'all'
  //   ? projects
  //   : projects.filter(project => project.featured)

  return (

    <div className="max-w-3xl mx-auto min-h-[80vh]">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('projects')}</h1>
        <div className="h-1 w-20 bg-blue-500 mb-8"></div>

        {/* 過濾按鈕 */}
        {/* <div className="flex space-x-4 mb-8">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              className={`${filter === 'all' ? '' : 'text-blue-300'}`}
              onClick={() => setFilter('all')}
            >
              所有項目
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'outline'}
              className={`${filter === 'featured' ? '' : 'text-blue-300'}`}
              onClick={() => setFilter('featured')}
            >
              精選項目
            </Button>
          </div> */}
      </div>

      {/* 項目網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/*  */}
        {/* {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-blue-900/30 border border-blue-800/30 rounded-lg overflow-hidden hover:border-blue-500/50 transition-colors group"
            > */}
        {/* 項目圖片 */}
        {/* <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition-colors"
                      title="查看網站"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
                      title="查看代碼"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div> */}

        {/* 項目內容 */}
        {/* <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-blue-100/90 mb-4 line-clamp-3">{project.description}</p> */}

        {/* 技術標籤 */}
        {/* <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-blue-900/50 text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}

        {/* 使用的技術 */}
        {/* <div className="flex items-center gap-3 text-white">
                  {project.technologies.map((tech, index) => (
                    <div key={index}>{tech}</div>
                  ))}
                </div>
              </div>
            </div>
          ))} */}
        <div className="flex justify-center items-center h-full col-span-1 md:col-span-2 lg:col-span-3 py-24">
          <h1 className="text-5xl md:text-7xl font-serif italic text-blue-200/60 tracking-wide opacity-80 font-light">
            To be continued...
          </h1>
        </div>
      </div>
    </div>
  )
} 