import fs from 'fs/promises';
import path from 'path';

const owner = process.env.OMG_OWNER || 'scholarsmate';
const branch = process.env.OMG_BRANCH || 'main';
const repos = ['omega-omg', 'omega-omg-vscode', 'omega-match'];

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function fetchRemote(repo) {
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/MARKETING.md`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const text = await res.text();
  const normalized = rewriteLinks(text, repo);
  return { source: 'remote', content: normalized, from: url };
}

async function writeContent(repo, content) {
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
    } catch (err) {
      console.error(`Failed for ${repo}: ${err.message}`);
    }
  }
})();

// --- helpers ---
function rewriteLinks(markdown, repo) {
  const baseRaw = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/`;
  const baseBlob = `https://github.com/${owner}/${repo}/blob/${branch}/`;

  const isRelative = (url) => {
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

  const toAbs = (url) => {
    const clean = url.replace(/^\.\//, '').replace(/^\//, '');
    const lower = clean.toLowerCase();
    const imgExt = /(\.(png|jpe?g|gif|svg|webp|avif))([?#].*)?$/i;
    const isImg = imgExt.test(lower);
    const isMd = /\.(md|mdx)([#?].*)?$/i.test(lower);
    if (isImg) return baseRaw + clean;
    if (isMd) return baseBlob + clean;
    // heuristic: if it looks like an asset path (has a dot and not md) use raw; else blob
    if (/\.[a-z0-9]+(\?.*)?$/i.test(lower)) return baseRaw + clean;
    return baseBlob + clean;
  };

  // Rewrite Markdown image links: ![alt](url "title")
  markdown = markdown.replace(/(!\[[^\]]*\]\()(.*?)(\))/g, (m, p1, url, p3) => {
    const u = url.split(/\s+/)[0]; // strip optional title part
    if (!isRelative(u)) return m;
    const abs = toAbs(u);
    return `${p1}${abs}${p3}`;
  });

  // Rewrite Markdown links: [text](url)
  markdown = markdown.replace(/(\[[^\]]*\]\()(.*?)(\))/g, (m, p1, url, p3) => {
    // Skip images already handled (they start with ![)
    if (p1.startsWith('![')) return m;
    const u = url.split(/\s+/)[0];
    if (!isRelative(u)) return m;
    const abs = toAbs(u);
    return `${p1}${abs}${p3}`;
  });

  // Rewrite HTML <img src="...">
  markdown = markdown.replace(/(<img[^>]*\ssrc=["'])(.*?)(["'][^>]*>)/gi, (m, p1, url, p3) => {
    if (!isRelative(url)) return m;
    return `${p1}${toAbs(url)}${p3}`;
  });

  // Rewrite HTML <a href="...">
  markdown = markdown.replace(/(<a[^>]*\shref=["'])(.*?)(["'][^>]*>)/gi, (m, p1, url, p3) => {
    if (!isRelative(url)) return m;
    return `${p1}${toAbs(url)}${p3}`;
  });

  return markdown;
}
