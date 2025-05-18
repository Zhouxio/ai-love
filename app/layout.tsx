import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Love - 智能恋爱/婚姻契合度分析',
  description: '基于AI技术的专业恋爱/婚姻契合度分析服务，帮助您找到最适合的伴侣。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
