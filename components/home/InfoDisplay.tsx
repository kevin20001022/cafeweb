import React from 'react';

export const InfoDisplay: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden border-t border-gray-800" style={{backgroundColor: '#111111'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-20">

          {/* 图片右 */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <img
                src="/new/map_callout.png"
                alt="清晰的资讯展示"
                className="relative w-full"
              />
            </div>
          </div>

          {/* 内容左 */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-cafeting-green/10 border border-cafeting-green/30 rounded-full text-cafeting-green text-sm font-semibold mb-4">
              Feature 02
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
              清晰的資訊展示
            </h2>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              豐富的指標篩選，找到最適合你的命定咖啡館。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
