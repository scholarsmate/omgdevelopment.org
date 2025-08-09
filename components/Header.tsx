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
        <a
          href="https://github.com/scholarsmate/omgdevelopment.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          aria-label="View this website on GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path fillRule="evenodd" d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.11-.02-2.02-3.06.66-3.71-1.31-3.71-1.31-.5-1.27-1.22-1.61-1.22-1.61-.99-.67.07-.66.07-.66 1.09.08 1.67 1.12 1.67 1.12.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.19 1.12-2.97-.11-.28-.49-1.42.11-2.95 0 0 .93-.3 3.05 1.13.89-.25 1.84-.38 2.78-.38.94 0 1.89.13 2.78.38 2.12-1.43 3.05-1.13 3.05-1.13.6 1.53.22 2.67.11 2.95.69.78 1.11 1.77 1.11 2.97 0 4.23-2.58 5.15-5.03 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.64.75.53 4.37-1.45 7.52-5.57 7.52-10.43C23.01 5.24 18.27.5 12 .5z" clipRule="evenodd" />
          </svg>
          <span className="hidden sm:inline">View on GitHub</span>
          <span className="sm:hidden">GitHub</span>
        </a>
        <ThemeToggle />
      </div>
      <nav
        className="order-2 md:order-1 -mx-4 px-4 md:mx-0 md:px-0 w-[100vw] max-w-full md:w-auto flex items-center gap-2 text-sm sm:text-base overflow-x-auto md:overflow-visible whitespace-nowrap"
        aria-label="Primary"
        role="navigation"
      >
        <Link
          href="/"
          className={`${base} ${isActive('/') ? active : ''}`}
          aria-current={isActive('/') ? 'page' : undefined}
        >
          Home
        </Link>
        <Link
          href="/marketing/omega-match"
          className={`${base} ${isActive('/marketing/omega-match') ? active : ''}`}
          aria-current={isActive('/marketing/omega-match') ? 'page' : undefined}
        >
          OmegaMatch
        </Link>
        <Link
          href="/marketing/omega-omg"
          className={`${base} ${isActive('/marketing/omega-omg') ? active : ''}`}
          aria-current={isActive('/marketing/omega-omg') ? 'page' : undefined}
        >
          OmegaOMG
        </Link>
        <Link
          href="/marketing/omega-omg-vscode"
          className={`${base} ${isActive('/marketing/omega-omg-vscode') ? active : ''}`}
          aria-current={isActive('/marketing/omega-omg-vscode') ? 'page' : undefined}
        >
          OmegaOMG-VSCode
        </Link>
  {/* About & Contact removed for now; reintroduce if we add social/community links */}
      </nav>
    </header>
  )
}
