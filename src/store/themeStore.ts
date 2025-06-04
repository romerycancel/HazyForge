import { StateCreator } from 'zustand';

export interface ThemeConfig {
  locale: string;
  theme: string;
  menu: string;
  layout: string;
  rtlClass: string;
  animation: string;
  navbar: string;
  semidark: boolean;
}

export interface ThemeState {
  isDarkMode: boolean;
  sidebar: boolean;
  themeConfig: ThemeConfig;
  languageList: { code: string; name: string }[];
}

export interface ThemeActions {
  toggleTheme: (theme: string) => void;
  toggleMenu: (menu: string) => void;
  toggleLayout: (layout: string) => void;
  toggleRTL: (rtl: string) => void;
  toggleAnimation: (animation: string) => void;
  toggleNavbar: (navbar: string) => void;
  toggleLocale: (locale: string) => void;
  toggleSemidark: (semidark: boolean) => void;
  toggleSidebar: () => void;
  setSidebar: (sidebar: boolean) => void;
}

export type ThemeStore = ThemeState & ThemeActions;

const initialThemeConfig: ThemeConfig = {
  locale: 'en', // en, da, de, el, es, fr, hu, it, ja, pl, pt, ru, sv, tr, zh
  theme: 'light', // light, dark, system
  menu: 'vertical', // vertical, collapsible-vertical, horizontal
  layout: 'full', // full, boxed-layout
  rtlClass: 'ltr', // rtl, ltr
  animation: '', // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
  navbar: 'navbar-sticky', // navbar-sticky, navbar-floating, navbar-static

  semidark: false,
};

const initialThemeState: ThemeState = {
  isDarkMode: false,
  sidebar: false,
  themeConfig: initialThemeConfig,
  languageList: [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'es', name: 'Spanish' },
  ],
};

export const createThemeStore: StateCreator<ThemeStore> = (set, get) => ({
  ...initialThemeState,
  toggleTheme: (theme) => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('prefersDark', prefersDark);
    const isDarkMode = (theme === 'dark' || prefersDark) && theme !== 'light';
    set((state) => ({
      ...state,
      themeConfig: {
        ...state.themeConfig,
        theme,
      },
      isDarkMode,
    }));
  },
  toggleMenu: (menu: string) => {
    set((state) => ({
      ...state,
      themeConfig: {
        ...state.themeConfig,
        menu,
      },
    }));
  },
  toggleLayout: (layout: string) => {
    set((state) => ({
      ...state,
      themeConfig: {
        ...state.themeConfig,
        layout,
      },
    }));
  },
  toggleRTL: (rtlClass: string) => {
    document.querySelector('html')?.setAttribute('dir', get().themeConfig.rtlClass || 'ltr');
    set((state) => ({
      ...state,
      themeConfig: {
        ...state.themeConfig,
        rtlClass,
      },
    }));
  },
  toggleAnimation: (animation: string) => {
    set((state) => ({
      ...state,
      themeConfig: {
        ...state.themeConfig,
        animation,
      },
    }));
  },
  toggleNavbar: (navbar: string) => {
    set((state) => ({
      ...state,
      themeConfig: {
        ...state.themeConfig,
        navbar,
      },
    }));
  },
  toggleLocale: (locale: string) => {
    set((state) => ({
      ...state,
      themeConfig: {
        ...state.themeConfig,
        locale,
      },
    }));
  },
  toggleSemidark: (semidark: boolean) => {
    set((state) => ({
      ...state,
      themeConfig: {
        ...state.themeConfig,
        semidark,
      },
    }));
  },
  toggleSidebar: () => {
    set((state) => ({
      ...state,
      sidebar: !state.sidebar,
    }));
  },
  setSidebar: (sidebar: boolean) => {
    set((state) => ({
      ...state,
      sidebar,
    }));
  },
});
