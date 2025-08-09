import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function loadMarkdown(): string {
  const filePath = path.join(process.cwd(), 'content', 'omega-match', 'MARKETING.md');
  return fs.readFileSync(filePath, 'utf8');
}

export default function Page() {
  const markdown = loadMarkdown();
  return (
    <article className="prose dark:prose-invert max-w-none prose-img:rounded-md prose-img:shadow-sm prose-table:table-auto prose-table:overflow-x-auto">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </article>
  );
}
