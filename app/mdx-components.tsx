"use client";
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Example: map 'a' tags if needed in future
    // a: (props) => <a {...props} className="underline" />,
    ...components,
  };
}
