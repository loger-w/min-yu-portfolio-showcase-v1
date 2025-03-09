import { Calendar, GraduationCap, Briefcase, Award } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation('about')

  return (
    <div className="max-w-3xl mx-auto">

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center text-white">
          <Briefcase className="mr-2 h-6 w-6 text-blue-400" />
          {t('experience')}
        </h2>

        <div className="space-y-12">
          <div className="relative pl-8 border-l border-blue-700/50">
            <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-blue-500"></div>
            <div className="flex flex-col md:flex-row md:items-center mb-2">
              <h3 className="text-xl font-medium text-white">{t('role-inteware')}</h3>
              <div className="md:ml-auto flex items-center text-sm text-blue-300">
                <Calendar className="mr-1 h-4 w-4" />
                {t('period-inteware')}
              </div>
            </div>
            <p className="text-blue-200 mb-2">{t('company-inteware')}</p>
            <ul className="list-disc list-inside text-blue-100/90 space-y-2">
              <li>{t('description-inteware-1')}</li>
              <li>{t('description-inteware-2')}</li>
              <li>{t('description-inteware-3')}</li>
              <li>{t('description-inteware-4')}</li>
            </ul>
          </div>

          <div className="relative pl-8 border-l border-blue-700/50">
            <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-blue-500"></div>
            <div className="flex flex-col md:flex-row md:items-center mb-2">
              <h3 className="text-xl font-medium text-white">{t('role-intern')}</h3>
              <div className="md:ml-auto flex items-center text-sm text-blue-300">
                <Calendar className="mr-1 h-4 w-4" />
                {t('period-intern')}
              </div>
            </div>
            <p className="text-blue-200 mb-2">{t('company-intern')}</p>
            <ul className="list-disc list-inside text-blue-100/90 space-y-2">
              <li>{t('description-intern-1')}</li>
              <li>{t('description-intern-2')}</li>
              <li>{t('description-intern-3')}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center text-white">
          <GraduationCap className="mr-2 h-6 w-6 text-blue-400" />
          {t('education')}
        </h2>

        <div className="relative pl-8 border-l border-blue-700/50">
          <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-blue-500"></div>
          <div className="flex flex-col md:flex-row md:items-center mb-2">
            <h3 className="text-xl font-medium text-white">{t('degree-master')}</h3>
            <div className="md:ml-auto flex items-center text-sm text-blue-300">
              <Calendar className="mr-1 h-4 w-4" />
              {t('period-master')}
            </div>
          </div>
          <p className="text-blue-200">{t('school-master')}</p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center text-white">
          <Award className="mr-2 h-6 w-6 text-blue-400" />
          {t('award')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-900/30 border border-blue-800/30 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-2 text-white">{t('award-1-name')}</h3>
            <p className="text-blue-100/90">{t('award-1-period')}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 