import Link from 'next/link';

export default function SolutionsIndex() {
  return (
    <main>
      <h1>Solutions</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link href="/solutions/omega-omg">Omega OMG</Link>
          <span className="mx-2">•</span>
          <a href="https://github.com/scholarsmate/omega-omg" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">View on GitHub</a>
        </li>
        <li>
          <Link href="/solutions/omega-omg-vscode">Omega OMG VS Code Extension</Link>
          <span className="mx-2">•</span>
          <a href="https://github.com/scholarsmate/omega-omg-vscode" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">View on GitHub</a>
        </li>
        <li>
          <Link href="/solutions/omega-match">Omega Match</Link>
          <span className="mx-2">•</span>
          <a href="https://github.com/scholarsmate/omega-match" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">View on GitHub</a>
        </li>
      </ul>
    </main>
  );
}
