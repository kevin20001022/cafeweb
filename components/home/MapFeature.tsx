import React from 'react';

export const MapFeature: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#111111'}}>
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cafeting-green/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* 图片左 */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-cafeting-green/15 to-blue-500/10 rounded-3xl blur-xl"></div>
              <img
                src="/new/map_feature.png"
                alt="探索地图"
                className="relative rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 内容右 */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-cafeting-green/10 border border-cafeting-green/30 rounded-full text-cafeting-green text-sm font-semibold mb-4">
              Feature 01
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
              探索地圖
            </h2>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              輕鬆發現周邊精選咖啡館，找尋工作環境再也不是問題。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
