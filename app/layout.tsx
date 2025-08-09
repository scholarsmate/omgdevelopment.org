import '../styles/globals.css'
import Head from './head'
import Header from '../components/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white antialiased">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
