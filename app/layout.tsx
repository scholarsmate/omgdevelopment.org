import '../styles/globals.css'
import Head from './head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white antialiased">
        {/* Ensure theme is set before paint to avoid FOUC and make toggle reliable */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try {
              const ls = window.localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const isDark = ls ? ls === 'dark' : prefersDark;
              document.documentElement.classList.toggle('dark', isDark);
            } catch (e) {} })();`
          }}
        />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Header />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
