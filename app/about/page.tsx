import fs from 'fs'
import path from 'path'

export default function About() {
  let lastSync: string | null = null
  try {
    const p = path.join(process.cwd(), 'content', 'LAST_SYNC.md')
    if (fs.existsSync(p)) {
      lastSync = fs.readFileSync(p, 'utf8')
    }
  } catch {}

  return (
    <section className="space-y-4">
      <h1>About Us</h1>
      {lastSync && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {lastSync}
        </p>
      )}
    </section>
  )
}