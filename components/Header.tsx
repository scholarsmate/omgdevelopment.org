'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const base =
    'inline-flex items-center px-2.5 py-1.5 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:underline underline-offset-4 decoration-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 transition-colors'
  const active = 'text-blue-700 dark:text-blue-300 bg-gray-100 dark:bg-gray-800'
  const isActive = (href: string) => pathname === href

  return (
    <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between py-3 md:py-4 border-b mb-6">
      {/* Top-right controls on mobile, right-aligned on desktop */}
  <div className="flex items-center gap-3 self-end md:self-auto order-1 md:order-2">
        <ThemeToggle />
      </div>
      <nav
        className="order-2 md:order-1 -mx-4 px-4 md:mx-0 md:px-0 w-[100vw] max-w-full md:w-auto flex items-center gap-2 text-sm sm:text-base overflow-x-auto md:overflow-visible whitespace-nowrap"
        aria-label="Primary"
        role="navigation"
      >
        <Link
          href="/"
          className={`${base} ${isActive('/') ? active : ''} p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
          aria-current={isActive('/') ? 'page' : undefined}
          aria-label="Home"
          title="Home"
        >
          <span className="font-semibold text-base sm:text-lg tracking-tight">Ω Dev</span>
        </Link>
        <Link
          href="/solutions/omega-match"
          className={`${base} ${isActive('/solutions/omega-match') ? active : ''}`}
          aria-current={isActive('/solutions/omega-match') ? 'page' : undefined}
        >
          OmegaMatch
        </Link>
        <Link
          href="/solutions/omega-omg"
          className={`${base} ${isActive('/solutions/omega-omg') ? active : ''}`}
          aria-current={isActive('/solutions/omega-omg') ? 'page' : undefined}
        >
          OmegaOMG
        </Link>
        <Link
          href="/solutions/omega-omg-vscode"
          className={`${base} ${isActive('/solutions/omega-omg-vscode') ? active : ''}`}
          aria-current={isActive('/solutions/omega-omg-vscode') ? 'page' : undefined}
        >
          OmegaOMG-VSCode
        </Link>
  {/* About & Contact removed for now; reintroduce if we add social/community links */}
      </nav>
    </header>
  )
}
