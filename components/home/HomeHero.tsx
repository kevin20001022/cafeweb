import React from 'react';
import { Button } from '../Button';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" style={{backgroundColor: '#111111'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cafeting-green/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-cafeting-green/10 border border-cafeting-green/30 text-cafeting-green mb-8">
            <span className="flex h-2 w-2 rounded-full bg-cafeting-green mr-2 animate-pulse"></span>
            搶先預約體驗
          </div>

          <h1 className="text-3xl md:text-7xl font-[800] tracking-tight text-white mb-6 leading-[1.1]">
            <span className="whitespace-nowrap">為工作而生的</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cafeting-green to-emerald-400">
              咖啡地圖
            </span>
          </h1>

          <p className="text-base md:text-2xl text-gray-300 mb-12 leading-relaxed font-normal max-w-3xl mx-auto">
            無論您是自由工作者、遠端團隊，還是需要專注空間的學習者，
            Cafeting 為您精選每一處完美工作據點。
          </p>

          <div className="flex justify-center">
            <Button
              onClick={() => window.open('https://apps.apple.com/tw/app/cafeting/id6737536512', '_blank')}
              className="text-sm md:text-base px-6 py-3 md:px-8 md:py-4 shadow-2xl shadow-cafeting-green/20"
            >
              Download App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
