import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { PageType } from '../App';

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark, currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 禁用/恢复 body 滚动
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false); // 关闭移动菜单
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-md shadow-sm py-3' : 'py-5'} ${!scrolled && 'bg-transparent'} ${scrolled && currentPage === 'pass' ? 'bg-white/80 dark:bg-[#111111]/80' : ''}`} style={scrolled && currentPage === 'home' ? {backgroundColor: 'rgba(17, 17, 17, 0.8)'} : undefined}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handlePageChange('home')}>
           <div className="w-8 h-8 bg-cafeting-black dark:bg-transparent rounded-lg flex items-center justify-center p-1 transition-colors duration-300">
             <img src="/icon.png" alt="Cafeting Logo" className="w-full h-full object-contain transition-transform group-hover:scale-105 duration-200" />
           </div>
           <span className="text-xl font-bold tracking-tight text-cafeting-black dark:text-white">Cafeting</span>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center">
           <button
             onClick={() => handlePageChange('home')}
             className={`text-sm font-medium transition-colors ${
               currentPage === 'home'
                 ? 'text-cafeting-green'
                 : 'text-cafeting-gray dark:text-gray-400 hover:text-cafeting-black dark:hover:text-white'
             }`}
           >
             首頁
           </button>
           <button
             onClick={() => handlePageChange('pass')}
             className={`text-sm font-medium transition-colors ${
               currentPage === 'pass'
                 ? 'text-cafeting-green'
                 : 'text-cafeting-gray dark:text-gray-400 hover:text-cafeting-black dark:hover:text-white'
             }`}
           >
             Cafeting Pass
           </button>
           
           {/* Theme Toggle - Only show on Cafeting Pass page */}
           {currentPage === 'pass' && (
             <button
               onClick={toggleTheme}
               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-cafeting-gray dark:text-gray-400"
               aria-label="Toggle Dark Mode"
             >
               {isDark ? (
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M17.66 17.66l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M17.66 6.34l1.42-1.42"/></svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
               )}
             </button>
           )}
        </nav>

        {/* 移动端：只有汉堡菜单按钮 */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 transition-colors text-cafeting-black dark:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>

        {/* 桌面端：Download 按钮 */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={() => window.open('https://apps.apple.com/tw/app/cafeting/id6737536512', '_blank')}
            variant="primary"
            className="text-sm py-2 px-4 shadow-cafeting-green/20"
          >
            Download App
          </Button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#111111] overflow-y-auto pt-20">
          <nav className="px-6 py-8 flex flex-col gap-1">
            {/* 页面导航 */}
            <button
              onClick={() => handlePageChange('home')}
              className={`text-left text-lg font-medium transition-all py-4 px-3 rounded-lg ${
                currentPage === 'home'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              首頁
            </button>

            <button
              onClick={() => handlePageChange('pass')}
              className={`text-left text-lg font-medium transition-all py-4 px-3 rounded-lg flex items-center gap-3 ${
                currentPage === 'pass'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Cafeting Pass
              <span className="relative inline-flex items-center px-2 py-0.5 text-[10px] font-bold text-white rounded-full bg-gradient-to-r from-cafeting-green to-emerald-400 shadow-lg shadow-cafeting-green/50 animate-pulse">
                NEW
              </span>
            </button>

            {/* Download App */}
            <button
              onClick={() => {
                window.open('https://apps.apple.com/tw/app/cafeting/id6737536512', '_blank');
                setMobileMenuOpen(false);
              }}
              className="text-left text-lg font-medium text-gray-400 hover:text-white transition-all py-4 px-3 rounded-lg"
            >
              下載 App
            </button>

            {/* 关于我们 */}
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-lg font-medium text-gray-400 hover:text-white transition-all py-4 px-3 rounded-lg"
            >
              關於我們
            </a>

            {/* Privacy Policy */}
            <a
              href="#privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-lg font-medium text-gray-400 hover:text-white transition-all py-4 px-3 rounded-lg"
            >
              隱私政策
            </a>

            {/* Terms of Service */}
            <a
              href="#terms"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-lg font-medium text-gray-400 hover:text-white transition-all py-4 px-3 rounded-lg"
            >
              服務條款
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-lg font-medium text-gray-400 hover:text-white transition-all py-4 px-3 rounded-lg"
            >
              聯絡我們
            </a>

            {/* Theme Toggle - Only show on Cafeting Pass page */}
            {currentPage === 'pass' && (
              <button
                onClick={toggleTheme}
                className="text-left text-lg font-medium text-gray-400 hover:text-white transition-all py-4 px-3 rounded-lg mt-2"
              >
                {isDark ? '切換至淺色模式' : '切換至深色模式'}
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};