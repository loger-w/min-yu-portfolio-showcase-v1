import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  
  const currentLanguage = i18n.language
  
  const languages = [
    { code: 'zh-TW', name: t('language.zh-TW') },
    { code: 'en', name: t('language.en') }
  ]
  
  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }
  
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  
  const handleKeyDown = (e: React.KeyboardEvent, languageCode: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleLanguageChange(languageCode)
    }
  }
  
  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleToggleDropdown}
        aria-label={t('language.switch')}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="text-blue-100 hover:text-white hover:bg-blue-900/20"
      >
        <Globe className="h-5 w-5" />
      </Button>
      
      {isOpen && (
        <div className="absolute md:right-0 left-0 mt-2 w-40 rounded-md bg-blue-950 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <div
                key={language.code}
                className={cn(
                  "px-4 py-2 text-sm cursor-pointer hover:bg-blue-900/50",
                  currentLanguage === language.code ? "bg-blue-900/30 text-white" : "text-blue-100"
                )}
                onClick={() => handleLanguageChange(language.code)}
                onKeyDown={(e) => handleKeyDown(e, language.code)}
                role="menuitem"
                tabIndex={0}
              >
                {language.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 