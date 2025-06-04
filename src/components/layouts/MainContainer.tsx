'use client';
import { useThemeStore } from '@/providers/zustand-provider';
import React from 'react';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
    const navbar = useThemeStore((state) => state.themeConfig.navbar);
    return <div className={`${navbar} main-container min-h-screen text-black dark:text-white-dark`}> {children}</div>;
};

export default MainContainer;