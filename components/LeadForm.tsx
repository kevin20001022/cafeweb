import React, { useState } from 'react';
import { Button } from './Button';
import { LeadSchema, UserRole } from '../types';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadSchema>({
    name: '',
    email: '',
    role: UserRole.WORKER,
    notes: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          notes: formData.notes,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setStatus('success');
      setFormData({ name: '', email: '', role: UserRole.WORKER, notes: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="join-form" className="py-24 relative overflow-hidden border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 bg-gray-50 dark:bg-[#111111]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

      {/* Ambient Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-cafeting-green/5 dark:bg-cafeting-green/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-cafeting-black dark:text-white">搶先加入！建立您的專屬工作生態系</h2>
          <p className="text-cafeting-gray dark:text-gray-400">
            無論您是尋找極致工作環境的專業人士，還是希望活化空間的店家，Cafeting 都是您的最佳解答。
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-cafeting-light-green/50 dark:bg-cafeting-green/10 border border-cafeting-green text-cafeting-green p-8 rounded-xl text-center shadow-lg animate-fade-in backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold mb-2 text-cafeting-black dark:text-white">感謝您的加入！</h3>
            <p className="text-cafeting-gray dark:text-gray-300">我們已收到您的資訊，將會儘快與您聯繫。</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm font-medium underline hover:text-cafeting-green-hover"
            >
              提交另一份
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-cafeting-dark-surface p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl shadow-gray-200/50 dark:shadow-none backdrop-blur-md">
            <div>
              <label className="block text-sm font-medium text-cafeting-black dark:text-white mb-3">您的身份</label>
              <div className="flex gap-3 p-1.5 bg-gray-100 dark:bg-gray-700/50 rounded-lg border border-transparent dark:border-gray-600">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, role: UserRole.WORKER }))}
                  className={`flex-1 px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                    formData.role === UserRole.WORKER
                      ? 'bg-cafeting-green text-white shadow-md shadow-cafeting-green/20'
                      : 'text-cafeting-gray dark:text-gray-300 hover:text-cafeting-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-600/50'
                  }`}
                >
                  遠端工作者
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, role: UserRole.MERCHANT }))}
                  className={`flex-1 px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                    formData.role === UserRole.MERCHANT
                      ? 'bg-cafeting-green text-white shadow-md shadow-cafeting-green/20'
                      : 'text-cafeting-gray dark:text-gray-300 hover:text-cafeting-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-600/50'
                  }`}
                >
                  咖啡廳業者
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cafeting-black dark:text-gray-300 mb-2">
                {formData.role === UserRole.MERCHANT ? '店名' : '姓名 / 稱呼'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={formData.role === UserRole.MERCHANT ? '請輸入您的店名' : '請輸入您的姓名'}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-cafeting-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cafeting-green focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cafeting-black dark:text-gray-300 mb-2">電子郵件</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-cafeting-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cafeting-green focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-cafeting-black dark:text-gray-300 mb-2">備註 (選填)</label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="告訴我們更多您的需求..."
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-cafeting-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cafeting-green focus:border-transparent transition-all"
              />
            </div>

            <Button
              type="submit"
              fullWidth
              disabled={status === 'loading'}
              className="mt-2 text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  處理中...
                </span>
              ) : formData.role === UserRole.MERCHANT ? '成為合作店家' : '成為首批用戶'}
            </Button>
            
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
              提交即代表您同意我們的隱私政策。我們承諾絕不發送垃圾郵件。
            </p>
          </form>
        )}
      </div>
    </section>
  );
};