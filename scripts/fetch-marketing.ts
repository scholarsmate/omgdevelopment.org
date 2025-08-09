import fs from 'fs/promises';
import path from 'path';

const owner = process.env.OMG_OWNER || 'scholarsmate';
const branch = process.env.OMG_BRANCH || 'main';
const repos = ['omega-omg', 'omega-omg-vscode', 'omega-match'] as const;

type Repo = typeof repos[number];

async function ensureDir(p: string) {
  await fs.mkdir(p, { recursive: true });
}

function rewriteLinks(markdown: string, repo: Repo) {
  const baseRaw = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/`;
  const baseBlob = `https://github.com/${owner}/${repo}/blob/${branch}/`;

  const isRelative = (url: string) => {
    return (
      url &&
      !/^https?:\/\//i.test(url) &&
      !/^mailto:/i.test(url) &&
      !/^tel:/i.test(url) &&
      !/^#/i.test(url) &&
      !/^data:/i.test(url) &&
      !/^\/\//.test(url)
    );
  };

  const toAbs = (url: string) => {
    const clean = url.replace(/^\.\//, '').replace(/^\//, '');
    const lower = clean.toLowerCase();
    const imgExt = /(\.(png|jpe?g|gif|svg|webp|avif))([?#].*)?$/i;
    const isImg = imgExt.test(lower);
    const isMd = /\.(md|mdx)([#?].*)?$/i.test(lower);
    if (isImg) return baseRaw + clean;
    if (isMd) return baseBlob + clean;
    if (/\.[a-z0-9]+(\?.*)?$/i.test(lower)) return baseRaw + clean;
    return baseBlob + clean;
  };

  // Images ![]()
  markdown = markdown.replace(/(!\[[^\]]*\]\()(.*?)(\))/g, (m, p1, url, p3) => {
    const u = (url as string).split(/\s+/)[0];
    if (!isRelative(u)) return m;
    const abs = toAbs(u);
    return `${p1}${abs}${p3}`;
  });

  // Links []()
  markdown = markdown.replace(/(\[[^\]]*\]\()(.*?)(\))/g, (m, p1, url, p3) => {
    if ((p1 as string).startsWith('![')) return m;
    const u = (url as string).split(/\s+/)[0];
    if (!isRelative(u)) return m;
    const abs = toAbs(u);
    return `${p1}${abs}${p3}`;
  });

  // <img src>
  markdown = markdown.replace(/(<img[^>]*\ssrc=["'])(.*?)(["'][^>]*>)/gi, (m, p1, url, p3) => {
    if (!isRelative(url as string)) return m;
    return `${p1}${toAbs(url as string)}${p3}`;
  });

  // <a href>
  markdown = markdown.replace(/(<a[^>]*\shref=["'])(.*?)(["'][^>]*>)/gi, (m, p1, url, p3) => {
    if (!isRelative(url as string)) return m;
    return `${p1}${toAbs(url as string)}${p3}`;
  });

  return markdown;
}

async function fetchRemote(repo: Repo) {
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/MARKETING.md`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const text = await res.text();
  const normalized = rewriteLinks(text, repo);
  return { source: 'remote', content: normalized, from: url } as const;
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
