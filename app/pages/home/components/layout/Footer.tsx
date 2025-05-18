import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <p className="text-gray-300">
              AI Love 致力于通过AI技术为用户提供专业的恋爱/婚姻契合度分析服务。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
                  功能特点
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  价格方案
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-gray-300">
              <li>客服电话：400-XXX-XXXX</li>
              <li>邮箱：support@ailove.com</li>
              <li>工作时间：9:00-18:00</li>
            </ul>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                微信
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                微博
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                抖音
              </a>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© 2024 AI Love. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              使用条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 