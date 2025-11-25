import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CustomerValue } from './components/CustomerValue';
import { Features } from './components/Features';
import { MerchantValue } from './components/MerchantValue';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

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
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Hero />
        <CustomerValue />
        {/* <Features /> */}
        <MerchantValue />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;