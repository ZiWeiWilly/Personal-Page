"use client"

import { Inter } from 'next/font/google'
import { createContext, useState } from "react"

const inter = Inter({ subsets: ['latin'] })

export type TMode = 'dark' | 'light' | 'system'
export type ThemeContextType = {
  changeMode: (mode: TMode) => void
  mode: TMode
}

export const ThemeContext = createContext<ThemeContextType>({
  changeMode: () => {},
  mode: 'system',
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<TMode>(() => {
    const theme = window.localStorage.getItem('theme') as TMode
    return theme ?? 'system' 
  })
  const isDark = () => {
    if (mode == 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } else if (mode == 'dark') {
      return true
    } else {
      return false
    }
  }

  const changeMode = (mode: TMode) => {
    setMode(mode)
    window.localStorage.setItem('theme', mode)
  }

  return (
    <ThemeContext.Provider value={{ changeMode, mode }}>
      <body className={`${inter.className} theme ${isDark() ? 'dark' : 'light'}`}>
        {children}
      </body>
    </ThemeContext.Provider>
  )
}