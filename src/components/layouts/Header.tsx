'use client';

import { useThemeStore } from '@/providers/zustand-provider';
import Headroom from 'react-headroom';
import Image from 'next/image';
import { toggleDarkMode } from '@/utils';
import Link from 'next/link';
import { Moon, Sun, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from '../Logo';

const Header = () => {
  const themeConfig = useThemeStore((t) => t.themeConfig);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', isPrimary: true },
    { label: 'Blog', href: '/blog' },
    { label: 'Project', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <Headroom className='bg-black'>
      <header
        className={`bg-[#001012] flex items-center justify-center z-40 transition-all duration-300 sticky top-0 h-24 ${isScrolled ? 'shadow-lg' : ''
          } ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}
      >
        <div className={`relative transition-all duration-300 w-11/12`}>
          <div className="container mx-auto">
            <div className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Logo Section */}
              <div className="w-1/4">
                <div className="relative transition-transform hover:scale-105">
                  <Logo />
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={`relative px-3 py-2 text-sm font-medium transition-colors
                          ${item.isPrimary
                            ? 'rounded-full bg-primary text-primary-foreground hover:bg-primary/90'
                            : 'text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-white'
                          }
                          after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300
                          hover:after:w-full`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Theme Toggle & Mobile Menu Button */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => toggleDarkMode()}
                  className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-primary"
                  aria-label="Toggle theme"
                >
                  {themeConfig.theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-primary md:hidden"
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Navigation */}
              {isMobileMenuOpen && (
                <div className="absolute left-0 right-0 top-full mt-2 rounded-lg bg-background p-4 shadow-lg md:hidden">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors
                            ${item.isPrimary
                              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                              : 'text-muted-foreground hover:bg-muted hover:text-primary'
                            }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </Headroom>
  );
};

export default Header;