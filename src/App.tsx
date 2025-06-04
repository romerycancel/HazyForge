'use client';
import { PropsWithChildren, use, useEffect, useState } from 'react';
import { getTranslation } from '@/i18n';
import { useStoreRef, useThemeStore } from './providers/zustand-provider';
import Loading from '@/components/loading/Loader';

function App({ children }: PropsWithChildren) {
  const sidebar = useThemeStore((state) => state.sidebar);
  const rtlClass = useThemeStore((state) => state.themeConfig.rtlClass);
  const menu = useThemeStore((state) => state.themeConfig.menu);
  const layout = useThemeStore((state) => state.themeConfig.layout);
  const locale = useThemeStore((state) => state.themeConfig.locale);
 
  const store = useStoreRef();
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  useEffect(() => {
    getTranslation().then(({ initLocale }) => {
      initLocale(locale);
    });
    setIsLoading(false);
  }, []);
  useEffect(() => {
    if (isDarkMode) {
      document.querySelector('body')?.classList.add('dark');
    } else {
      document.querySelector('body')?.classList.remove('dark');
    }
  }, [isDarkMode]);
  return (
    <div className={`toggle-sidebar ${menu} ${layout} ${rtlClass} main-section relative font-nunito text-sm font-normal antialiased`}>{isLoading ? <Loading /> : children}</div>
  );
}

export default App;
