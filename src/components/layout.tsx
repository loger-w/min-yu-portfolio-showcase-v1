import { ReactNode, useState, useEffect } from 'react'
import { Link, Events, scrollSpy, animateScroll as scroll } from 'react-scroll'
import { cn } from '@/lib/utils'
import { Menu, X, Github, Linkedin, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '@/components/ui/language-switcher'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const navItems = [
    { name: t('nav.home'), path: 'home' },
    { name: t('nav.about'), path: 'about' },
    { name: t('nav.skills'), path: 'skills' },
    { name: t('nav.projects'), path: 'projects' },
  ]

  // 處理滾動事件
  const handleScroll = () => {
    // 計算滾動進度
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const progress = (window.scrollY / totalHeight) * 100
    setScrollProgress(progress)

    // 顯示/隱藏返回頂部按鈕
    setShowScrollTop(window.scrollY > 300)
  }

  // 返回頂部
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    })
  }

  useEffect(() => {
    // 註冊滾動事件
    Events.scrollEvent.register('begin', () => { });
    Events.scrollEvent.register('end', () => { });
    scrollSpy.update();

    // 添加滾動監聽
    window.addEventListener('scroll', handleScroll)

    return () => {
      // 清理滾動事件
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a1629] text-white">
      {/* 滾動進度指示器 */}
      <div
        className="scroll-indicator"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 標頭 */}
      <header className="fixed w-full z-50 bg-[#0a1629]/80 backdrop-blur-sm border-b border-blue-900/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl font-bold tracking-tighter cursor-pointer"
          >
            <span className="text-white drop-shadow-[0_0_2px_rgba(59,130,246,0.3)]">Min-Yu</span>
            <span className="text-blue-400 ml-2">Dev</span>
          </Link>

          {/* 電腦選單 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onSetActive={() => setActiveSection(item.path)}
                className={cn(
                  "text-sm font-medium transition-colors hover:border-b-2 hover:border-blue-500 cursor-pointer",
                  activeSection === item.path ? "border-b-2 border-blue-500 text-white" : "text-blue-200/80"
                )}
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* 手機選單開啟按鈕 */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* 手機選單 */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-[#0a1629]/95 border-b border-blue-900/30 py-4">
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => setActiveSection(item.path)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white py-2 cursor-pointer",
                    activeSection === item.path ? "text-white" : "text-blue-200/80"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* 返回頂部按鈕 */}
      {showScrollTop && (
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-16 right-6 rounded-full shadow-lg z-50 bg-blue-900/80 text-white hover:bg-blue-800 cursor-pointer"
          onClick={scrollToTop}
          aria-label="返回頂部"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* 頁腳 */}
      <footer className="bg-[#071223] border-t border-blue-900/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-white drop-shadow-[0_0_2px_rgba(59,130,246,0.3)]">Min-Yu</span>
              <span className="text-blue-400">Dev</span>
            </div>
            
            <div className="flex space-x-6 mb-6">
              <a href="https://github.com/loger-w" target="_blank" rel="noopener noreferrer" className="text-blue-200/70 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/min-yu-xu-6953382a0/" target="_blank" rel="noopener noreferrer" className="text-blue-200/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mb-4">
              <span className="px-2 py-1 bg-blue-900/20 rounded-full text-xs text-blue-300/90">React</span>
              <span className="px-2 py-1 bg-blue-900/20 rounded-full text-xs text-blue-300/90">Shadcn UI</span>
              <span className="px-2 py-1 bg-blue-900/20 rounded-full text-xs text-blue-300/90">Tailwind CSS</span>
              <span className="px-2 py-1 bg-blue-900/20 rounded-full text-xs text-blue-300/90">Cursor</span>
            </div>
            
            <p className="text-sm text-blue-200/70">
              © {new Date().getFullYear()} Min-Yu. {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 