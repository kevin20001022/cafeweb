import React from 'react';
import { FeaturePoint } from '../types';

// Icons as simple SVGs
const OutletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cafeting-green"><path d="M6 7v4"/><path d="M18 7v4"/><path d="M9 7v4"/><path d="M15 7v4"/><rect width="18" height="12" x="3" y="7" rx="2"/><path d="M6 19v2"/><path d="M18 19v2"/></svg>
);

const NoiseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cafeting-green"><path d="M11 6h10"/><path d="M11 12h7"/><path d="M11 18h9"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>
);

const LightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cafeting-green"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const SeatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cafeting-green"><path d="M19 9h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Z"/><path d="M5 9h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z"/><path d="M2 21h20"/></svg>
);

const TimeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cafeting-green"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const features: FeaturePoint[] = [
  {
    title: "插座數量",
    description: "實時顯示座位周邊可用的插座數量，電量焦慮不再。",
    icon: <OutletIcon />
  },
  {
    title: "環境寧靜度",
    description: "量化分貝指標，精準切換專注模式或會議通話。",
    icon: <NoiseIcon />
  },
  {
    title: "光線優化",
    description: "嚴選色溫與亮度，避免螢幕反光，保護您的視力。",
    icon: <LightIcon />
  },
  {
    title: "座位充足度",
    description: "AI 預測即時空位，出發前即鎖定您的工作站。",
    icon: <SeatIcon />
  },
  {
    title: "時長限制",
    description: "透明化店家政策，清楚掌握可工作時長與低消。",
    icon: <TimeIcon />
  }
];

export const Features: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 border-t border-gray-100 dark:border-gray-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cafeting-black dark:text-white mb-4">
            Cafeting 標準：我們定義的工作友善環境
          </h2>
          <p className="text-cafeting-gray dark:text-gray-400 max-w-2xl mx-auto">
            不僅僅是找個地方坐。我們通過五大維度量化空間品質，確保您的每一次停留都高效無比。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-cafeting-dark-surface p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-cafeting-green/30 transition-all duration-300 flex flex-col items-center text-center group cursor-default"
            >
              <div className="bg-cafeting-light-green dark:bg-cafeting-green/10 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-cafeting-black dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-cafeting-gray dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};