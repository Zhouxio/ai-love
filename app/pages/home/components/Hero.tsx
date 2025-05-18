import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            用AI技术，找到你的真爱
          </h1>
          <p className="text-xl text-white/90 mb-8">
            基于先进的AI算法，为您提供专业的恋爱/婚姻契合度分析，让您的感情之路更加清晰。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/register"
              className="bg-white text-[#FF6B6B] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              立即开始
            </Link>
            <Link
              href="/features"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors text-center"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>
      
      {/* 装饰性背景元素 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white/10 backdrop-blur-sm"></div>
    </div>
  );
};

export default Hero; 