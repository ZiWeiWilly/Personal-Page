import Navbar from '@/components/navbar'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata = {
  title: 'Willy\'s Personal Page',
  description: 'Created with next.js by Willy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Navbar />
        <main className='container mx-auto flex justify-center'>
          {children}
        </main>
      </ThemeProvider>
    </html>
  )
}
