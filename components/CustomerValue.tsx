import React from 'react';

export const CustomerValue: React.FC = () => {
  return (
    <section id="customer-value" className="py-24 bg-white dark:bg-cafeting-dark relative transition-colors duration-300">
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual: Productivity Workflow */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200 dark:bg-gray-700 transition-colors duration-300"></div>

              {/* Step 1 */}
              <div className="relative flex items-start gap-6 mb-8 group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center z-10 group-hover:border-cafeting-green transition-colors">
                   <svg className="w-6 h-6 text-cafeting-gray dark:text-gray-400 group-hover:text-cafeting-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl flex-1 border border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-700 transition-all">
                  <h4 className="font-bold text-cafeting-black dark:text-white text-lg">智能搜尋</h4>
                  <p className="text-cafeting-gray dark:text-gray-400 text-sm mt-1">根據插座、安靜程度與距離，一鍵篩選最佳工作點。</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-6 mb-8 group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center z-10 group-hover:border-cafeting-green transition-colors">
                   <svg className="w-6 h-6 text-cafeting-gray dark:text-gray-400 group-hover:text-cafeting-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl flex-1 border border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-700 transition-all">
                  <h4 className="font-bold text-cafeting-black dark:text-white text-lg">即時預訂</h4>
                  <p className="text-cafeting-gray dark:text-gray-400 text-sm mt-1">支付小額訂金鎖定座位，告別到場客滿的窘境。</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-cafeting-green text-white shadow-lg shadow-cafeting-green/30 flex items-center justify-center z-10">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl flex-1 border border-cafeting-green/30 shadow-lg dark:shadow-none transition-colors duration-300">
                  <h4 className="font-bold text-cafeting-black dark:text-white text-lg">高效產出</h4>
                  <p className="text-cafeting-gray dark:text-gray-400 text-sm mt-1">在優化過的環境中，享受心流狀態，效率提升 200%。</p>
                </div>
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="text-cafeting-green font-bold text-sm tracking-wide uppercase mb-2">
              For Customers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-cafeting-black dark:text-white mb-6">
              不只是找位子，<br />更是預約您的「心流時間」。
            </h2>
            <p className="text-lg text-cafeting-gray dark:text-gray-300 mb-8 leading-relaxed">
              對於自由工作者與遠端專業人士來說，環境就是生產力。Cafeting 消除所有不確定因素，讓您出門的那一刻起，就已經準備好進入工作狀態。
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-cafeting-black dark:text-gray-200">
                <span className="w-6 h-6 rounded-full bg-cafeting-light-green dark:bg-cafeting-green/20 text-cafeting-green flex items-center justify-center text-xs">✓</span>
                <span className="font-medium">保證有位：</span>出發前確認，不再白跑一趟。
              </li>
              <li className="flex items-center gap-3 text-cafeting-black dark:text-gray-200">
                <span className="w-6 h-6 rounded-full bg-cafeting-light-green dark:bg-cafeting-green/20 text-cafeting-green flex items-center justify-center text-xs">✓</span>
                 <span className="font-medium">設施透明：</span>網速、插座、廁所狀態一目了然。
              </li>
              <li className="flex items-center gap-3 text-cafeting-black dark:text-gray-200">
                <span className="w-6 h-6 rounded-full bg-cafeting-light-green dark:bg-cafeting-green/20 text-cafeting-green flex items-center justify-center text-xs">✓</span>
                 <span className="font-medium">專屬優惠：</span>Work Pass 用戶享有咖啡折扣。
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};