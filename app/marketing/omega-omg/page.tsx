import OmegaOMG from '../../../content/omega-omg/MARKETING.md';

export default function Page() {
  // Render as-is; MDX loader will convert to a React component
  // Tailwind typography classes applied globally in layout
  // Wrap with article for better semantics
  return (
    <article className="prose dark:prose-invert max-w-none">
      <OmegaOMG />
    </article>
  );
}
