import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { css } from '../../styled-system/css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`
        dark
        ${inter.className}
        ${css({
          backgroundColor: 'page.backgroundColor'
        })}
      `}>{children}</body>
    </html>
  )
}
