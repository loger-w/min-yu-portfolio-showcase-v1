import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Github, Linkedin } from 'lucide-react'

export default function Home() {
  const { t, i18n } = useTranslation('home')
  const [typedText, setTypedText] = useState('')
  const fullText = t('role')
  const [showCursor, setShowCursor] = useState(true)

  // 打字機效果
  useEffect(() => {
    // 當語言變更時，重置打字機效果
    setTypedText('')
  }, [i18n.language])

  // 打字機效果
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [typedText, fullText])

  // 光標閃爍效果
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-start max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
        {t('greeting')} <span className="text-blue-400">Min-Yu</span>
      </h1>

      <h2 className="text-2xl md:text-4xl font-medium text-blue-200 mb-8">
        {t('iam')}{typedText}
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-white`}>|</span>
      </h2>

      <p className="text-lg text-blue-100/90 mb-6 leading-relaxed">
        {t('intro')}
      </p>
      
      {/* 連結 */}
      <div className="flex space-x-4 mb-10">
        <a 
          href="https://github.com/loger-w" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 px-4 py-2 bg-blue-900/30 rounded-md text-blue-200 hover:bg-blue-800/50 hover:text-white transition-colors"
          aria-label="GitHub"
          tabIndex={0}
        >
          <Github className="h-5 w-5" />
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/min-yu-xu-6953382a0/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 px-4 py-2 bg-blue-900/30 rounded-md text-blue-200 hover:bg-blue-800/50 hover:text-white transition-colors"
          aria-label="LinkedIn"
          tabIndex={0}
        >
          <Linkedin className="h-5 w-5" />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
      </div>
    </div>
  )
} 