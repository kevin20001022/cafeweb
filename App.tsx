import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/pages/HomePage';
import { CafetingPassPage } from './components/pages/CafetingPassPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { AboutPage } from './components/pages/AboutPage';
import { Footer } from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

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

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-cafeting-white dark:bg-cafeting-dark transition-colors duration-300">
      <Header
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pass" element={<CafetingPassPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;