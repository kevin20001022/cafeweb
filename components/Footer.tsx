import React from 'react';

interface FooterProps {
  currentPage?: 'home' | 'pass';
}

export const Footer: React.FC<FooterProps> = ({ currentPage = 'home' }) => {
  return (
    <footer className={`border-t border-gray-200 dark:border-gray-800 py-12 relative z-10 transition-colors duration-300 ${currentPage === 'pass' ? 'bg-white dark:bg-[#1a1a1a]' : ''}`} style={currentPage === 'home' ? {backgroundColor: '#1a1a1a'} : undefined}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-cafeting-black dark:bg-transparent rounded-lg flex items-center justify-center p-1 transition-colors duration-300">
             <img src="/icon.png" alt="Cafeting Logo" className="w-full h-full object-contain" />
           </div>
           <span className="text-xl font-bold tracking-tight text-cafeting-black dark:text-white">Cafeting</span>
        </div>
        
        <div className="text-sm text-cafeting-gray dark:text-gray-400">
          &copy; {new Date().getFullYear()} Cafeting Inc. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-cafeting-gray dark:text-gray-400 hover:text-cafeting-green dark:hover:text-cafeting-green transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-cafeting-gray dark:text-gray-400 hover:text-cafeting-green dark:hover:text-cafeting-green transition-colors text-sm">Terms of Service</a>
          <a href="#" className="text-cafeting-gray dark:text-gray-400 hover:text-cafeting-green dark:hover:text-cafeting-green transition-colors text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
};