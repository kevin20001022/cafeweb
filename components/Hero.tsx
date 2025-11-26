import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById('join-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden transition-colors duration-300 bg-white dark:bg-[#111111]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cafeting-green/10 dark:bg-cafeting-green/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-cafeting-light-green border border-cafeting-green/20 text-cafeting-green mb-8">
              <span className="flex h-2 w-2 rounded-full bg-cafeting-green mr-2 animate-pulse"></span>
              搶先預約體驗
            </div>

            <h1 className="text-3xl md:text-6xl font-[800] tracking-tight text-cafeting-black dark:text-white mb-6 leading-[1.1]">
              Cafeting Pass<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cafeting-green to-teal-500">
                首創咖啡廳預約系統
              </span>
            </h1>

            <p className="text-base md:text-xl text-cafeting-gray dark:text-gray-300 mb-10 leading-relaxed font-normal">
              擺脫不確定性。預訂座位讓您每一分鐘都轉化為產出。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Button onClick={scrollToForm} className="text-sm md:text-base px-6 py-3 md:px-8 md:py-4">
                成為首批用戶
              </Button>
              <Button onClick={() => document.getElementById('customer-value')?.scrollIntoView({behavior: 'smooth'})} variant="outline" className="text-sm md:text-base px-6 py-3 md:px-8 md:py-4 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:border-white">
                了解更多
              </Button>
            </div>
          </div>

          {/* Abstract UI Visualization (CSS Only) */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative overflow-hidden">
            {/* Main Card (The App) */}
            <div className="relative bg-white dark:bg-cafeting-dark-surface rounded-2xl shadow-2xl border border-gray-200 dark:border-cafeting-dark-border p-4 z-20 overflow-hidden backdrop-blur-sm">
               {/* Header UI */}
               <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700"></div>
                  </div>
               </div>

               {/* Search Bar */}
               <div className="w-full h-10 bg-gray-50 dark:bg-gray-800 rounded-lg mb-6 border border-gray-100 dark:border-gray-700 flex items-center px-4">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 mr-2"></div>
                  <div className="w-1/2 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
               </div>

               {/* Result Cards */}
               <div className="space-y-4">
                  {/* Card 1 (Active) */}
                  <div className="p-4 rounded-xl border border-cafeting-green bg-cafeting-light-green/30 dark:bg-cafeting-green/10 flex justify-between items-center transition-all cursor-pointer hover:bg-cafeting-light-green/50">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-cafeting-green/20 flex items-center justify-center">
                         <div className="w-6 h-6 rounded bg-cafeting-green"></div>
                      </div>
                      <div>
                        <div className="w-32 h-4 bg-cafeting-black/80 dark:bg-white/80 rounded mb-2"></div>
                        <div className="flex gap-2">
                           <div className="w-12 h-3 bg-cafeting-green/20 rounded"></div>
                           <div className="w-8 h-3 bg-gray-200 dark:bg-gray-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                       <div className="text-cafeting-green font-bold text-sm">98% Match</div>
                       <div className="text-xs text-gray-500 mt-1">Available now</div>
                    </div>
                  </div>

                   {/* Card 2 (Inactive) */}
                   <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 flex justify-between items-center opacity-60">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700"></div>
                      <div>
                        <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-16 h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                      </div>
                    </div>
                  </div>
               </div>

               {/* Floating Success Badge */}
               <div className="absolute bottom-6 right-6 bg-cafeting-black dark:bg-white text-white dark:text-black px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 border border-gray-700 dark:border-gray-200">
                  <div className="w-5 h-5 bg-cafeting-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div className="text-sm font-semibold">Seat Reserved</div>
               </div>
            </div>

            {/* Decorative Elements behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cafeting-green/20 to-emerald-500/20 rounded-[2rem] blur-xl z-0 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};