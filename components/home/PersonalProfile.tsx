import React from 'react';

export const PersonalProfile: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden border-t border-gray-800" style={{backgroundColor: '#111111'}}>
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cafeting-green/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-20">

          {/* 图片右 */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-bl from-cafeting-green/30 to-cyan-500/20 rounded-[3rem] blur-2xl"></div>
              <img
                src="/new/personal_profile.png"
                alt="个人档案"
                className="relative rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 内容左 */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-cafeting-green/10 border border-cafeting-green/30 rounded-full text-cafeting-green text-sm font-semibold mb-4">
              Feature 06
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
              個人檔案
            </h2>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              收藏喜愛的咖啡廳，記錄你的工作及學習，培養高效習慣。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
