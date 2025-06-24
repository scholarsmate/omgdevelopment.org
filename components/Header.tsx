'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 border-b mb-6">
      <nav className="space-x-4 text-lg">
        <Link href="/">Home</Link>
        <Link href="/omega_match">OmegaMatch</Link>
        <Link href="/omega_omg">OmegaOMG</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <ThemeToggle />
    </header>
  )
}
