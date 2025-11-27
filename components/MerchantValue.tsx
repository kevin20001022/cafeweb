import React from 'react';
import { Button } from './Button';

export const MerchantValue: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById('join-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="merchant-value" className="py-24 overflow-hidden border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 bg-white dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="text-cafeting-green font-bold text-sm tracking-wide uppercase mb-2">
              For Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-cafeting-black dark:text-white mb-6">
              Work Pass：平衡收益，<br />我們帶來「質」的客源。
            </h2>
            <p className="text-sm md:text-lg text-cafeting-gray dark:text-gray-300 mb-10 leading-relaxed">
              Cafeting 不只是導流，更是店家的營收管理夥伴。加入 Work Pass 計劃，讓您的空間價值最大化。
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-cafeting-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-sm shadow-sm">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cafeting-black dark:text-white mb-2">閒置時段變現</h3>
                  <p className="text-sm md:text-base text-cafeting-gray dark:text-gray-400">
                    透過動態定價機制，將週中離峰時段的空位有效轉化為額外營收，提升坪效。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-cafeting-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-sm shadow-sm">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cafeting-black dark:text-white mb-2">客源篩選機制</h3>
                  <p className="text-sm md:text-base text-cafeting-gray dark:text-gray-400">
                    我們的用戶皆為購買 Work Pass 的專業工作者，素質高、消費能力強，尊重空間禮儀。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-cafeting-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-sm shadow-sm">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cafeting-black dark:text-white mb-2">無感營運</h3>
                  <p className="text-sm md:text-base text-cafeting-gray dark:text-gray-400">
                    採預付制度與掃碼核銷，確保店家獲得穩定現金流，同時減少佔位爭議與點餐溝通成本。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <Button onClick={scrollToForm} variant="outline" className="px-8 border-2 dark:border-gray-600 dark:text-white dark:hover:border-white">
                 成為合作店家
               </Button>
            </div>
          </div>

          {/* Visual: Revenue Dashboard Chart (CSS Only) */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <div className="relative bg-white dark:bg-cafeting-dark-surface rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 backdrop-blur-sm">
               {/* Chart Title */}
               <div className="flex justify-between items-center mb-8">
                 <div>
                   <div className="text-sm text-gray-400 uppercase font-semibold">Weekly Revenue</div>
                   <div className="text-2xl font-bold text-cafeting-black dark:text-white mt-1">$2,840.00</div>
                 </div>
                 <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs font-bold">
                   +18.2%
                 </div>
               </div>

               {/* Bar Chart Visual */}
               <div className="flex items-end justify-between h-48 gap-3">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <div key={i} className="w-full relative group h-full">
                      {/* Regular Revenue (Gray) - Full bar background */}
                      <div
                        className="absolute bottom-0 w-full bg-gray-200 dark:bg-gray-700 rounded-t-lg transition-all duration-500"
                        style={{ height: `${height}%` }}
                      ></div>
                      {/* Cafeting Revenue (Green) - Top portion overlay */}
                      <div
                        className="absolute bottom-0 w-full bg-cafeting-green rounded-t-lg shadow-[0_-2px_10px_rgba(0,163,108,0.3)] transition-all duration-500 group-hover:bg-cafeting-green-hover"
                        style={{ height: `${height * 0.4}%` }}
                      ></div>
                    </div>
                  ))}
               </div>

               {/* Legend */}
               <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-sm"></span>
                    <span>Regular</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-cafeting-green rounded-sm shadow-sm"></span>
                    <span className="font-bold text-cafeting-black dark:text-white">Cafeting Boost</span>
                  </div>
               </div>
            </div>

            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-cafeting-green/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};