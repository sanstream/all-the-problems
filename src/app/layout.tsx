import './globals.css'
import type { Metadata } from 'next'
import { css } from '../../styled-system/css'
import { montserrat } from '@/fonts'
import { center, container, vstack } from '../../styled-system/patterns'

export const metadata: Metadata = {
  title: 'All the problems - by Studio Sanstream',
  description: 'A visualisation to help you understand how the worlds largest problems affect and influence each other.',
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
        ${montserrat.variable}
        ${css({
          backgroundColor: 'page.backgroundColor',
          textStyle: 'body',
          color: 'page.textColor',
          height: '100vh',
          overflowY: 'auto',
        })}
        ${center()}
      `}>
        <main className={`${vstack({
          // maxWidth: '8xl',
          width: {
            smToXl: '100%',
            xlTo2xl: '8xl',
          },
          paddingX: '8'
        })}`}>{children}</main>
      </body>
    </html>
  )
}
