import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Musawenkosi Manzini - Full-Stack Technology Specialist',
  description: 'Professional portfolio showcasing software development, cybersecurity, and data science projects',
  keywords: ['Full Stack Developer', 'Software Engineer', 'Cybersecurity', 'Data Science', 'React', 'Node.js'],
  openGraph: {
    title: 'Musawenkosi Manzini - Portfolio',
    description: 'Professional portfolio and contact information',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}