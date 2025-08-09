export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-10 border-t pt-6 text-sm text-gray-600 dark:text-gray-400">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p>
          © {year} OmgDevelopment.org ·{' '}
          Licensed under{' '}
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-700 dark:hover:text-blue-300"
          >
            MIT License
          </a>
          .
        </p>
        <p className="flex items-center gap-3">
          <a
            href="https://github.com/scholarsmate/omgdevelopment.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 underline hover:text-blue-700 dark:hover:text-blue-300"
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
            <span>View on GitHub</span>
          </a>
        </p>
      </div>
    </footer>
  )
}
