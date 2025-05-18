import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">页面未找到</h2>
        <p className="text-gray-600 mb-4">抱歉，您访问的页面不存在。</p>
        <Link
          href="/"
          className="bg-[#FF6B6B] text-white px-6 py-2 rounded-full hover:bg-[#ff5252] transition-colors inline-block"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
} 