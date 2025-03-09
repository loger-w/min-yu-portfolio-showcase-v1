import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

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

      <p className="text-lg text-blue-100/90 mb-10 leading-relaxed">
        {t('intro')}
      </p>
    </div>
  )
} 