import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="space-y-12 md:space-y-14">
      <section className="pt-6 md:pt-10 pb-2 md:pb-4 text-center space-y-4 animate-in fade-in slide-in-from-top-1 duration-500">
        <div className="flex justify-center animate-in fade-in-50 duration-700">
          <Image
            src="/images/dev-icon-512.png"
            alt="OMG Development icon"
            width={112}
            height={112}
            priority
            className="h-28 w-28"
          />
        </div>
  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-in fade-in duration-700 delay-75">OMG Development</h1>
  <p className="mx-auto max-w-3xl text-lg md:text-2xl text-gray-700 dark:text-gray-300 animate-in fade-in duration-700 delay-100">
          Our mission is to create <strong className="font-semibold text-gray-900 dark:text-white">world‑class, free and open‑source</strong> software that is
          <span className="font-semibold"> elegant</span>,
          <span className="font-semibold"> efficient</span>, and
          <span className="font-semibold"> solves real‑world problems</span>.
        </p>
      </section>

  <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Explore our projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="relative rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-lg transition-all duration-200 transform-gpu hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800/60 focus-within:ring-2 focus-within:ring-blue-500/40 motion-reduce:transform-none motion-reduce:transition-none">
            <span className="absolute top-3 right-3 inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur px-2 py-0.5 text-[11px] font-medium text-gray-700 dark:text-gray-300">Apache-2.0</span>
            <h3 className="text-xl font-semibold">
              <Link href="/marketing/omega-match" className="hover:underline">OmegaMatch</Link>
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              High‑throughput multi‑pattern text matching engine. Exact, deterministic, and
              tuned for large text streams with structural filters and a memory‑mapped core.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/marketing/omega-match"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm font-medium hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
              >
                Learn more
              </Link>
              <a
                href="https://github.com/scholarsmate/omega-match"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="View OmegaMatch on GitHub"
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
                View on GitHub
              </a>
            </div>
          </article>

          <article className="relative rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-lg transition-all duration-200 transform-gpu hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800/60 focus-within:ring-2 focus-within:ring-blue-500/40 motion-reduce:transform-none motion-reduce:transition-none">
            <span className="absolute top-3 right-3 inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur px-2 py-0.5 text-[11px] font-medium text-gray-700 dark:text-gray-300">Apache-2.0</span>
            <h3 className="text-xl font-semibold">
              <Link href="/marketing/omega-omg" className="hover:underline">OmegaOMG</Link>
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              High‑precision entity extraction powered by a simple regex-like DSL and a fast evaluator,
              built on OmegaMatch anchors with deterministic resolution and clean JSON output.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/marketing/omega-omg"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm font-medium hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
              >
                Learn more
              </Link>
              <a
                href="https://github.com/scholarsmate/omega-omg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="View OmegaOMG on GitHub"
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
                View on GitHub
              </a>
            </div>
          </article>

          <article className="relative rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-lg transition-all duration-200 transform-gpu hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800/60 focus-within:ring-2 focus-within:ring-blue-500/40 motion-reduce:transform-none motion-reduce:transition-none">
            <span className="absolute top-3 right-3 inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur px-2 py-0.5 text-[11px] font-medium text-gray-700 dark:text-gray-300">MIT</span>
            <h3 className="text-xl font-semibold">
              <Link href="/marketing/omega-omg-vscode" className="hover:underline">OmegaOMG for VS Code</Link>
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Language support extension for authoring OMG files with syntax highlighting,
              completions, diagnostics, and on‑cursor insights to speed up rule development.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/marketing/omega-omg-vscode"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm font-medium hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
              >
                Learn more
              </Link>
              <a
                href="https://github.com/scholarsmate/omega-omg-vscode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="View OmegaOMG VS Code Extension on GitHub"
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
                View on GitHub
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}