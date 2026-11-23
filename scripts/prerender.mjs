/**
 * Static HTML snapshots for crawlers (SEO, AEO and GEO).
 *
 * Why: the site is a React single-page app. Googlebot runs JavaScript,
 * but many AI crawlers and answer engines read only the raw HTML. This
 * script runs after `vite build` and writes one HTML file per page into
 * dist/, containing the page's real title, description, canonical URL,
 * structured data and a plain-text copy of its main content.
 * When the browser loads the page, React replaces that plain content
 * with the normal interactive page (main.tsx uses createRoot).
 *
 * Source of truth: src/data/landingPages.ts, src/data/pageSeo.ts and
 * src/seo/schema.ts (read directly, nothing is duplicated).
 *
 * Usage:  node scripts/prerender.mjs        (runs automatically in `npm run build`)
 * Test:   PRERENDER_DIST=some/dist node scripts/prerender.mjs
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);
const distDir = process.env.PRERENDER_DIST
  ? path.resolve(process.env.PRERENDER_DIST)
  : path.join(root, "dist");

const warnings = [];

// ---------------------------------------------------------------------
// Load the project's own TypeScript data files (they have no value imports)
// ---------------------------------------------------------------------
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "ccb-prerender-"));

async function loadTs(relativePath) {
  const source = fs.readFileSync(path.join(root, relativePath), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const file = path.join(
    tmpDir,
    path.basename(relativePath).replace(/\.ts$/, ".mjs")
  );
  fs.writeFileSync(file, outputText);
  return import(pathToFileURL(file).href);
}

const { landingPages, getKeyFacts, formatUpdated } = await loadTs(
  "src/data/landingPages.ts"
);
const { mainPages } = await loadTs("src/data/pageSeo.ts");
const {
  SITE_URL,
  breadcrumbsFor,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildLandingPageSchema,
} = await loadTs("src/seo/schema.ts");

// ---------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------
const esc = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function setMeta(html, attr, key, value) {
  const pattern = new RegExp(
    `(<meta\\s+${attr}="${key}"\\s+content=")[^"]*("\\s*/?>)`
  );

  if (!pattern.test(html)) {
    warnings.push(`meta ${key} not found in dist/index.html`);
    return html;
  }

  return html.replace(pattern, (_, start, end) => start + esc(value) + end);
}

function jsonLdTag(id, data) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return `<script type="application/ld+json" id="${id}">${json}</script>`;
}

const li = (items) =>
  `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

// Visually hidden (but still in the HTML) so crawlers, AI bots and screen
// readers can read it, while visitors never see an unstyled text page
// flash before React loads. React replaces it with the identical,
// styled content as soon as the app starts.
const shellStyle =
  "position:absolute;width:1px;height:1px;margin:-1px;padding:0;" +
  "overflow:hidden;clip:rect(0,0,0,0);clip-path:inset(50%);" +
  "white-space:nowrap;border:0";

const serviceLinks = landingPages.map(
  (page) =>
    `<a href="/${page.slug}">${esc(page.linkLabel)}</a>`
);

function contactLine() {
  return `<p>Call <a href="tel:+918810990496">+91 8810990496</a> or <a href="tel:+917084183421">+91 7084183421</a> to book a cab in Gorakhpur.</p>`;
}

function mainShell(page) {
  return (
    `<main id="prerender-shell" style="${shellStyle}">` +
    `<h1>${esc(page.h1)}</h1>` +
    page.paragraphs.map((text) => `<p>${esc(text)}</p>`).join("") +
    (page.bullets ? li(page.bullets.map(esc)) : "") +
    (page.faqs
      ? `<h2>Frequently Asked Questions</h2>` +
        page.faqs
          .map(
            (faq) =>
              `<h3>${esc(faq.question)}</h3><p>${esc(faq.answer)}</p>`
          )
          .join("")
      : "") +
    `<h2>Taxi services and routes from Gorakhpur</h2>` +
    li(serviceLinks) +
    contactLine() +
    `</main>`
  );
}

function landingShell(page) {
  const related = page.related
    .map((slug) => landingPages.find((item) => item.slug === slug))
    .filter(Boolean)
    .map((item) => `<a href="/${item.slug}">${esc(item.linkLabel)}</a>`);

  const sections = page.sections
    .map(
      (section) =>
        `<h2>${esc(section.heading)}</h2>` +
        section.paragraphs.map((text) => `<p>${esc(text)}</p>`).join("") +
        (section.bullets ? li(section.bullets.map(esc)) : "")
    )
    .join("");

  const facts = getKeyFacts(page).map(
    (fact) => `<strong>${esc(fact.label)}:</strong> ${esc(fact.value)}`
  );

  const faqs = page.faqs
    .map(
      (faq) => `<h3>${esc(faq.question)}</h3><p>${esc(faq.answer)}</p>`
    )
    .join("");

  return (
    `<main id="prerender-shell" style="${shellStyle}">` +
    `<h1>${esc(page.h1)}</h1>` +
    `<p>${esc(page.heroText)}</p>` +
    `<p><strong>Quick answer:</strong> ${esc(page.quickAnswer)}</p>` +
    li(facts) +
    page.intro.map((text) => `<p>${esc(text)}</p>`).join("") +
    sections +
    (page.hindi ? `<p lang="hi">${esc(page.hindi)}</p>` : "") +
    contactLine() +
    `<h2>${esc(page.h1)}: Frequently Asked Questions</h2>` +
    faqs +
    `<h2>Related cab services from Gorakhpur</h2>` +
    li(related) +
    `<p>Last updated: ${esc(formatUpdated(page.updated))}</p>` +
    `</main>`
  );
}

// ---------------------------------------------------------------------
// Build the list of pages
// ---------------------------------------------------------------------
const pages = [
  ...mainPages.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    shell: mainShell(page),
    jsonLd: [
      [
        "breadcrumb-jsonld",
        buildBreadcrumbSchema(
          breadcrumbsFor(page.path, page.breadcrumbLabel)
        ),
      ],
      ...(page.faqs && page.faqs.length > 0
        ? [
            [
              "page-jsonld",
              buildFaqPageSchema(
                page.path === "/"
                  ? `${SITE_URL}/`
                  : `${SITE_URL}${page.path}`,
                page.faqs
              ),
            ],
          ]
        : []),
    ],
  })),
  ...landingPages.map((page) => ({
    path: `/${page.slug}`,
    title: page.title,
    description: page.description,
    shell: landingShell(page),
    jsonLd: [
      [
        "breadcrumb-jsonld",
        buildBreadcrumbSchema(
          breadcrumbsFor(`/${page.slug}`, page.linkLabel)
        ),
      ],
      ["page-jsonld", buildLandingPageSchema(page)],
    ],
  })),
];

// ---------------------------------------------------------------------
// Read the Vite-built index.html and write one HTML file per page
// ---------------------------------------------------------------------
const indexFile = path.join(distDir, "index.html");

if (!fs.existsSync(indexFile)) {
  console.error(
    `[prerender] ${indexFile} not found. Run "vite build" first.`
  );
  process.exit(1);
}

// Remove anything a previous prerender run added, so re-running is safe
const template = fs
  .readFileSync(indexFile, "utf8")
  .replace(/<link\s+rel="canonical"[^>]*>\s*/g, "")
  .replace(
    /<script type="application\/ld\+json" id="(?:page|breadcrumb)-jsonld">[\s\S]*?<\/script>\s*/g,
    ""
  )
  .replace(
    /<div id="root">[\s\S]*?<\/main>\s*<\/div>/,
    '<div id="root"></div>'
  )
  // The static snapshot below replaces the generic <noscript> text, so
  // each page keeps exactly one H1 and its own content without JavaScript.
  .replace(/<noscript>[\s\S]*?<\/noscript>\s*/, "");

if (!/<div id="root">\s*<\/div>/.test(template)) {
  console.error('[prerender] <div id="root"></div> not found in dist/index.html');
  process.exit(1);
}

let written = 0;

for (const page of pages) {
  const url =
    page.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${page.path}`;

  let html = template;

  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${esc(page.title)}</title>`
  );
  html = setMeta(html, "name", "description", page.description);
  html = setMeta(html, "property", "og:title", page.title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "name", "twitter:title", page.title);
  html = setMeta(html, "name", "twitter:description", page.description);

  const headExtras =
    `<link rel="canonical" href="${esc(url)}" />\n    ` +
    page.jsonLd.map(([id, data]) => jsonLdTag(id, data)).join("\n    ") +
    "\n  ";

  html = html.replace("</head>", `${headExtras}</head>`);
  html = html.replace(
    /<div id="root">\s*<\/div>/,
    `<div id="root">${page.shell}</div>`
  );

  const outFile =
    page.path === "/"
      ? indexFile
      : path.join(distDir, page.path.replace(/^\//, ""), "index.html");

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  written += 1;
}

fs.rmSync(tmpDir, { recursive: true, force: true });

console.log(`[prerender] wrote ${written} static HTML pages to ${distDir}`);

for (const warning of [...new Set(warnings)]) {
  console.warn(`[prerender] warning: ${warning}`);
}