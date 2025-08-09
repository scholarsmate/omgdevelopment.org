import Link from 'next/link';

export default function MarketingIndex() {
  return (
    <main>
      <h1>Marketing</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li><Link href="/marketing/omega-omg">Omega OMG</Link></li>
        <li><Link href="/marketing/omega-omg-vscode">Omega OMG VS Code Extension</Link></li>
        <li><Link href="/marketing/omega-match">Omega Match</Link></li>
      </ul>
    </main>
  );
}
