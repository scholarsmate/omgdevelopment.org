import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="py-16 text-center space-y-6">
      <h1 className="text-4xl font-extrabold tracking-tight">Page not found</h1>
      <p className="text-gray-700 dark:text-gray-300">We couldn’t find what you were looking for.</p>
      <div className="flex justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm font-medium hover:bg-blue-500 transition-colors"
        >
          Go home
        </Link>
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Explore projects
        </Link>
      </div>
    </main>
  )
}
