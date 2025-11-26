import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/pages/HomePage';
import { CafetingPassPage } from './components/pages/CafetingPassPage';
import { Footer } from './components/Footer';

export type PageType = 'home' | 'pass';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    // Check system preference or saved preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-cafeting-white dark:bg-cafeting-dark transition-colors duration-300">
      <Header
        toggleTheme={toggleTheme}
        isDark={isDark}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {currentPage === 'home' ? <HomePage /> : <CafetingPassPage />}
      </main>
      <Footer currentPage={currentPage} />
    </div>
  );
}

export default App;