import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 導入翻譯文件
import zhTWCommon from '../locales/zh-TW/common.json';
import zhTWHome from '../locales/zh-TW/home.json';
import zhTWAbout from '../locales/zh-TW/about.json';
import zhTWSkills from '../locales/zh-TW/skills.json';
import zhTWProjects from '../locales/zh-TW/projects.json';

import enCommon from '../locales/en/common.json';
import enHome from '../locales/en/home.json';
import enAbout from '../locales/en/about.json';
import enSkills from '../locales/en/skills.json';
import enProjects from '../locales/en/projects.json';

// 翻譯資源
const resources = {
  'zh-TW': {
    common: zhTWCommon,
    home: zhTWHome,
    about: zhTWAbout,
    skills: zhTWSkills,
    projects: zhTWProjects,
  },
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    skills: enSkills,
    projects: enProjects,
  },
};

i18n
  // 使用 i18next-browser-languagedetector 插件
  .use(LanguageDetector)
  // 將 i18next 傳遞給 react-i18next
  .use(initReactI18next)
  // 初始化 i18next
  .init({
    resources,
    // 默認語言
    fallbackLng: 'zh-TW',
    // 默認命名空間
    defaultNS: 'common',
    // 調試模式
    debug: process.env.NODE_ENV === 'development',
    // 檢測語言的選項
    detection: {
      // 順序: localStorage, navigator
      order: ['localStorage', 'navigator'],
      // 緩存用戶語言選擇
      caches: ['localStorage'],
    },
    // 插值選項
    interpolation: {
      // 不轉義 HTML
      escapeValue: false,
    },
  });

export default i18n; 