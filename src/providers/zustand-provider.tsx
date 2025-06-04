'use client';

import { createThemeStore, ThemeStore } from '@/store/themeStore';
 import { type ReactNode, createContext, useRef, useContext } from 'react';
import { createStore, type StoreApi, useStore } from 'zustand';
import { persist } from 'zustand/middleware';

export const ThemeStoreContext = createContext<StoreApi<ThemeStore> | null>(null);

export interface ThemeStoreProviderProps {
  children: ReactNode;
}

export const ZustandProvider = ({ children }: ThemeStoreProviderProps) => {
  const storeRef = useRef<StoreApi<ThemeStore>>(undefined);
  if (!storeRef.current) {
    storeRef.current = createStore<ThemeStore>()(
      persist(createThemeStore, { name: 'theme-store' })
    );
  }

  return <ThemeStoreContext.Provider value={storeRef.current}>{children}</ThemeStoreContext.Provider>;
};

export const useThemeStore = <T,>(selector: (store: ThemeStore) => T): T => {
  const zustandStoreRef = useContext(ThemeStoreContext);
  if (!zustandStoreRef) {
    throw new Error(`useThemeStore must be used within ZustandProvider`);
  }
  return useStore(zustandStoreRef, selector);
};
export const useStoreRef = () => {
  const zustandStoreRef = useContext(ThemeStoreContext);
  if (!zustandStoreRef) {
    throw new Error(`useThemeStore must be used within ZustandProvider`);
  }
  return zustandStoreRef
};