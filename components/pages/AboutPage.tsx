import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0a0a] dark:to-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cafeting-black dark:text-white mb-6">
            關於我們
          </h1>
          <div className="w-20 h-1 bg-cafeting-green mx-auto"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-6 text-cafeting-gray dark:text-gray-300 leading-relaxed text-base md:text-lg">
              <p>
                還記得那些日子，我總喜歡窩在咖啡廳裡度過一個下午。一杯咖啡、一張小桌、筆電擺好，就能在那舒適的環境裡找到難得的專注。撲鼻而來的咖啡香令人放鬆，音樂與咖啡機的嗡鳴交織，不過分安靜，也不致於讓人分心。那些日子裡，我在這些角落裡放下了時間，留下了回憶。
              </p>

              <p>
                人們不太說話，但彼此眼睛裡都閃著光，我熱愛這個充滿動力及幹勁的環境。咖啡廳就像是城市裡的一個安全港口，這裡接納每個人的故事，無論來自哪裡，無論要去往哪裡。
              </p>

              <p>
                也因為這些美好的片刻，我萌生了設計 Cafeting 的想法。我希望那些跟我一樣熱愛在咖啡廳找靈感、找專注的人，能透過這個 app 輕鬆找到合適的場所。
              </p>

              <p>
                每一間咖啡廳都有屬於它的氛圍和故事，Cafeting 不只是提供資訊，而是期望幫助大家找到那份適合自己、能讓人安心的空間。
              </p>

              <p className="text-xl font-medium text-cafeting-black dark:text-white italic pt-4">
                Cafeting 為每個獨特的瞬間而生，願每個人，都能在城市裡找到屬於你的角落。
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cafeting-black dark:text-white mb-6">
            開始你的 Cafeting 之旅
          </h2>
          <p className="text-lg text-cafeting-gray dark:text-gray-300 mb-8">
            立即下載 Cafeting，尋找屬於你的完美工作空間
          </p>
          <button
            onClick={() => window.open('https://apps.apple.com/tw/app/cafeting/id6737536512', '_blank')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-cafeting-green hover:bg-cafeting-green-hover text-white font-semibold rounded-xl shadow-lg shadow-cafeting-green/30 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on the App Store
          </button>
        </div>
      </section>
    </div>
  );
};
