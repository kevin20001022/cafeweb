import React from 'react';

export const TaskManagement: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden border-t border-gray-800" style={{backgroundColor: '#111111'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cafeting-green/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* 图片左 */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <img
                src="/new/task_management.png"
                alt="任务管理"
                className="relative w-full"
              />
            </div>
          </div>

          {/* 内容右 */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-cafeting-green/10 border border-cafeting-green/30 rounded-full text-cafeting-green text-sm font-semibold mb-4">
              Feature 03
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
              任務管理
            </h2>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              簡單快速建立待完成任務，輕鬆管理當日行程。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
