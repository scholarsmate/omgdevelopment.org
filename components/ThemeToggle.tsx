'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' ||
                   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark)
    setDark(isDark)
  }, [])

  const toggle = () => {
    const newMode = !dark
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newMode)
    setDark(newMode)
  }

  return (
    <button onClick={toggle} className="ml-4 px-3 py-1 rounded border">
      {dark ? '🌞 Light Mode' : '🌚 Dark Mode'}
    </button>
  )
}
