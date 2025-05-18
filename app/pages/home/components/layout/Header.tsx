import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#FF6B6B]">AI Love</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">
            功能特点
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">
            关于我们
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">
            价格方案
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/login" 
            className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
          >
            登录
          </Link>
          <Link 
            href="/register" 
            className="bg-[#FF6B6B] text-white px-4 py-2 rounded-full hover:bg-[#ff5252] transition-colors"
          >
            注册
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 