export default function Head() {
  return (
    <>
      <title>OMG Development — Elegant, Efficient Open Source</title>
      <meta
        name="description"
        content="OMG Development creates world‑class, free and open‑source software: OmegaMatch (high‑throughput multi‑pattern matcher), OmegaOMG (entity extraction DSL), and the OmegaOMG VS Code extension."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/images/dev-icon-32.png" sizes="32x32" type="image/png" />
  <link rel="icon" href="/images/dev-icon-192.png" sizes="192x192" type="image/png" />
  <link rel="apple-touch-icon" href="/images/dev-icon-180.png" sizes="180x180" />
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
  <meta property="og:image" content="https://omgdevelopment.org/images/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="OMG Development — Elegant, Efficient Open Source" />
      <meta
        name="twitter:description"
        content="OmegaMatch, OmegaOMG, and the OmegaOMG VS Code extension — open tools that are elegant, efficient, and solve real‑world problems."
      />
  <meta name="twitter:image" content="https://omgdevelopment.org/images/og.png" />
    </>
  )
}
