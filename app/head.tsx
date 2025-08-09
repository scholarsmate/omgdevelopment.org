export default function Head() {
  return (
    <>
      <title>OMG Development — Elegant, Efficient Open Source</title>
      <meta
        name="description"
        content="OMG Development creates world‑class, free and open‑source software: OmegaMatch (high‑throughput multi‑pattern matcher), OmegaOMG (entity extraction DSL), and the OmegaOMG VS Code extension."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/dev-icon.svg" type="image/svg+xml" />
      <meta name="theme-color" content="#0b66c3" />
      <meta name="theme-color" content="#0b66c3" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />

      {/* Open Graph / Social */}
      <meta property="og:title" content="OMG Development — Elegant, Efficient Open Source" />
      <meta
        property="og:description"
        content="OmegaMatch, OmegaOMG, and the OmegaOMG VS Code extension — open tools that are elegant, efficient, and solve real‑world problems."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://omgdevelopment.org/" />
      <meta property="og:image" content="https://omgdevelopment.org/images/dev-icon.svg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="OMG Development — Elegant, Efficient Open Source" />
      <meta
        name="twitter:description"
        content="OmegaMatch, OmegaOMG, and the OmegaOMG VS Code extension — open tools that are elegant, efficient, and solve real‑world problems."
      />
      <meta name="twitter:image" content="https://omgdevelopment.org/images/dev-icon.svg" />
    </>
  )
}
