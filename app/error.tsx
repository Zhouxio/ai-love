'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">出错了！</h2>
        <p className="text-gray-600 mb-4">抱歉，页面加载时发生错误。</p>
        <button
          onClick={() => reset()}
          className="bg-[#FF6B6B] text-white px-6 py-2 rounded-full hover:bg-[#ff5252] transition-colors"
        >
          重试
        </button>
      </div>
    </div>
  )
} 