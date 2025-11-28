import React, { useState } from 'react';

interface ChipOption {
  value: string;
  label: string;
}

const lightingOptions: ChipOption[] = [
  { value: 'bright', label: 'Bright\n光線明亮' },
  { value: 'soft', label: 'Soft\n光線柔和' },
  { value: 'dim', label: 'Dim\n光線昏暗' },
];

const noiseOptions: ChipOption[] = [
  { value: 'quiet', label: 'Quiet\n安靜環境' },
  { value: 'moderate', label: 'Moderate\n音量適中' },
  { value: 'noisy', label: 'Noisy\n有些吵雜' },
];

const socketOptions: ChipOption[] = [
  { value: 'abundant', label: 'Plentiful\n插座充足' },
  { value: 'partial', label: 'Partial\n部分區域' },
  { value: 'limited', label: 'Limited\n數量有限' },
];

const seatOptions: ChipOption[] = [
  { value: 'often_available', label: 'Often Empty\n經常有空位' },
  { value: 'sometimes_wait', label: 'Wait Occasional\n偶爾需要等待' },
];

const timeLimitOptions: ChipOption[] = [
  { value: 'no_limit', label: 'Unlimited\n無時間限制' },
  { value: 'weekday_unlimited', label: 'Weekdays\n平日不限時' },
  { value: 'full_only', label: 'When Full\n客滿才限時' },
  { value: 'time_limited', label: 'Strict\n有時間限制' },
];

interface SelectionChipsProps {
  options: ChipOption[];
  selected: string;
  onChange: (value: string) => void;
}

const SelectionChips: React.FC<SelectionChipsProps> = ({ options, selected, onChange }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const [english, chinese] = option.label.split('\n');
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`px-6 py-4 rounded-xl text-sm font-medium transition-all duration-200 border-2 min-w-[140px] ${
              selected === option.value
                ? 'bg-cafeting-green/10 dark:bg-cafeting-green/20 border-cafeting-green text-cafeting-black dark:text-white shadow-sm'
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-cafeting-gray dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <div className="flex flex-col items-start gap-1">
              <span className="font-semibold text-xs">{english}</span>
              <span className="text-xs">{chinese}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export const ContributePage: React.FC = () => {
  const [formData, setFormData] = useState({
    cafeName: '',
    lighting: 'bright',
    noise: 'quiet',
    socket: 'abundant',
    seats: 'often_available',
    timeLimit: 'no_limit',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 验证必填字段
    if (!formData.cafeName || !formData.lighting || !formData.noise ||
        !formData.socket || !formData.seats || !formData.timeLimit) {
      alert('請填寫所有欄位');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 调用后端 API 提交到 Notion
      const response = await fetch('/api/submit-cafe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      console.log('提交成功:', data);
      setSubmitStatus('success');

      // 重置表单
      setTimeout(() => {
        setFormData({
          cafeName: '',
          lighting: 'bright',
          noise: 'quiet',
          socket: 'abundant',
          seats: 'often_available',
          timeLimit: 'no_limit',
        });
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('提交失败:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0a0a] dark:to-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cafeting-black dark:text-white mb-6">
            貢獻資訊
          </h1>
          <p className="text-lg md:text-xl text-cafeting-gray dark:text-gray-300 mb-4">
            發現適合工作的好咖啡廳了嗎？
          </p>
          <p className="text-base md:text-lg text-cafeting-gray dark:text-gray-400">
            分享給我們，幫助更多人找到完美的工作空間
          </p>
          <div className="w-20 h-1 bg-cafeting-green mx-auto mt-6"></div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8 p-8 md:p-10 border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800/50 shadow-sm">
            {/* 店名 */}
            <div>
              <label htmlFor="cafeName" className="block text-sm font-semibold text-cafeting-black dark:text-white mb-3">
                咖啡廳名稱 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="cafeName"
                value={formData.cafeName}
                onChange={(e) => setFormData({ ...formData, cafeName: e.target.value })}
                placeholder="請輸入咖啡廳名稱"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-cafeting-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-cafeting-green focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Environment & Amenities Section Header */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-cafeting-black dark:text-white mb-6">
                Environment & Amenities
              </h3>
            </div>

            {/* 光線 */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-cafeting-black dark:text-white mb-3">
                <svg className="w-5 h-5 text-cafeting-gray dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Lighting (光線) <span className="text-red-500">*</span>
              </label>
              <SelectionChips
                options={lightingOptions}
                selected={formData.lighting}
                onChange={(value) => setFormData({ ...formData, lighting: value })}
              />
            </div>

            {/* 音量 */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-cafeting-black dark:text-white mb-3">
                <svg className="w-5 h-5 text-cafeting-gray dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                Noise Level (音量) <span className="text-red-500">*</span>
              </label>
              <SelectionChips
                options={noiseOptions}
                selected={formData.noise}
                onChange={(value) => setFormData({ ...formData, noise: value })}
              />
            </div>

            {/* 插座 */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-cafeting-black dark:text-white mb-3">
                <svg className="w-5 h-5 text-cafeting-gray dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Outlets (插座) <span className="text-red-500">*</span>
              </label>
              <SelectionChips
                options={socketOptions}
                selected={formData.socket}
                onChange={(value) => setFormData({ ...formData, socket: value })}
              />
            </div>

            {/* 位置 */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-cafeting-black dark:text-white mb-3">
                <svg className="w-5 h-5 text-cafeting-gray dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Availability (位置) <span className="text-red-500">*</span>
              </label>
              <SelectionChips
                options={seatOptions}
                selected={formData.seats}
                onChange={(value) => setFormData({ ...formData, seats: value })}
              />
            </div>

            {/* 限時 */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-cafeting-black dark:text-white mb-3">
                <svg className="w-5 h-5 text-cafeting-gray dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Time Policy (限時) <span className="text-red-500">*</span>
              </label>
              <SelectionChips
                options={timeLimitOptions}
                selected={formData.timeLimit}
                onChange={(value) => setFormData({ ...formData, timeLimit: value })}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-500'
                    : 'bg-cafeting-green hover:bg-cafeting-green-hover shadow-lg shadow-cafeting-green/30 hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? '提交中...' : submitStatus === 'success' ? '✓ 提交成功' : '提交資訊'}
              </button>

              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm mt-3 text-center">
                  提交失敗，請稍後再試
                </p>
              )}

              {submitStatus === 'success' && (
                <p className="text-cafeting-green text-sm mt-3 text-center">
                  感謝您的貢獻！我們會盡快審核您提供的資訊
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
