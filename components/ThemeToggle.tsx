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
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
  className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500/60"
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span aria-hidden="true">{dark ? '🌞' : '🌚'}</span>
      <span className="sr-only">Toggle theme:</span>
      <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  )
}
