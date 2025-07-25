import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FloatingCTA from '@/components/floating-cta'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scalify AI - AI Automation Agency | Transform Your Business with AI',
  description: 'Leading AI automation agency helping SMBs and startups in real estate, healthcare, and finance. AI Calling, Chatbots, Dashboards, and more. Schedule a consultation today.',
  keywords: 'AI automation, AI chatbots, AI calling systems, business automation, AI dashboards, AI development, Delhi, Bhubaneswar',
  authors: [{ name: 'Scalify AI' }],
  openGraph: {
    title: 'Scalify AI - AI Automation Agency',
    description: 'Transform your business with cutting-edge AI solutions. Expert AI automation for real estate, healthcare, and finance.',
    url: 'https://scalifyai.com',
    siteName: 'Scalify AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scalify AI - AI Automation Agency',
    description: 'Transform your business with cutting-edge AI solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingCTA />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}