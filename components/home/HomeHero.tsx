import React from 'react';
import { Button } from '../Button';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden" style={{backgroundColor: '#111111'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cafeting-green/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-7xl font-[800] tracking-tight text-white mb-6 mt-24 md:mt-32 leading-[1.1]">
            <span className="whitespace-nowrap">為工作而生的</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cafeting-green to-emerald-400">
              咖啡地圖
            </span>
          </h1>

          <p className="text-sm md:text-xl text-gray-300 mb-12 leading-relaxed font-normal max-w-3xl mx-auto">
            無論您是自由工作者、遠端團隊，還是需要專注空間的學習者，
            Cafeting 為您精選每一處完美工作據點。
          </p>

          <div className="flex justify-center mb-12 md:mb-16">
            <Button
              onClick={() => window.open('https://apps.apple.com/tw/app/cafeting/id6737536512', '_blank')}
              className="text-sm md:text-base px-6 py-3 md:px-8 md:py-4 shadow-2xl shadow-cafeting-green/20 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              下載 App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
