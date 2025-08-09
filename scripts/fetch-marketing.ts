import fs from 'fs/promises';
import path from 'path';

const owner = process.env.OMG_OWNER || 'scholarsmate';
const branch = process.env.OMG_BRANCH || 'main';
const repos = ['omega-omg', 'omega-omg-vscode', 'omega-match'] as const;

type Repo = typeof repos[number];

async function ensureDir(p: string) {
  await fs.mkdir(p, { recursive: true });
}

async function fetchRemote(repo: Repo) {
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/MARKETING.md`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const text = await res.text();
  return { source: 'remote', content: text, from: url } as const;
}

async function writeContent(repo: Repo, content: string) {
  const outDir = path.resolve(process.cwd(), 'content', repo);
  await ensureDir(outDir);
  const outFile = path.join(outDir, 'MARKETING.md');
  await fs.writeFile(outFile, content, 'utf8');
  return outFile;
}

(async () => {
  for (const repo of repos) {
    try {
      const result = await fetchRemote(repo);
      const outFile = await writeContent(repo, result.content);
      console.log(`Saved ${repo}: ${outFile} (from ${result.from})`);
    } catch (err: any) {
      console.error(`Failed for ${repo}: ${err.message}`);
    }
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
