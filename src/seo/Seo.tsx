import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  landingPages,
  landingPagePath,
} from "@/data/landingPages";
import { mainPages } from "@/data/pageSeo";
import {
  SITE_URL,
  breadcrumbsFor,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildLandingPageSchema,
} from "@/seo/schema";

const siteName = "Car Cab Booking";
const defaultLocale = "en_IN";
const defaultImage = `${SITE_URL}/assets/ccb.png`;
const defaultImageAlt = "Car Cab Booking Gorakhpur";

type SeoConfig = {
  title: string;
  description: string;
  keywords?: string;
  robots?: string;
};

const seoByPath: Record<string, SeoConfig> = {};
const breadcrumbLabelByPath: Record<string, string | undefined> = {};
const faqsByPath: Record<
  string,
  { question: string; answer: string }[] | undefined
> = {};

// Main pages: src/data/pageSeo.ts
for (const page of mainPages) {
  seoByPath[page.path] = {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
  };
  breadcrumbLabelByPath[page.path] = page.breadcrumbLabel;
  faqsByPath[page.path] = page.faqs;
}

// Landing pages: src/data/landingPages.ts
// Adding a page there is all that is needed for SEO + breadcrumbs.
const landingBySlugPath: Record<
  string,
  (typeof landingPages)[number]
> = {};

for (const page of landingPages) {
  const path = landingPagePath(page.slug);

  seoByPath[path] = {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
  };
  breadcrumbLabelByPath[path] = page.linkLabel;
  landingBySlugPath[path] = page;
}

function upsertMeta(
  attr: "name" | "property",
  key: string,
  value: string
) {
  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }

  meta.content = value;
}

function upsertJsonLd(id: string, json: object) {
  let script = document.head.querySelector<HTMLScriptElement>(
    `script#${id}`
  );

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(json);
}

function removeJsonLd(id: string) {
  document.head
    .querySelector<HTMLScriptElement>(`script#${id}`)
    ?.remove();
}

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "");
}

export function Seo() {
  const location = useLocation();

  useEffect(() => {
    const path = normalizePath(location.pathname);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    const seo = seoByPath[path];
    const isKnownPage = Boolean(seo);

    const activeSeo: SeoConfig = isKnownPage
      ? seo
      : {
          title: "Page Not Found | Car Cab Booking Gorakhpur",
          description:
            "The requested page could not be found. Visit Car Cab Booking for local taxi and outstation cab service in Gorakhpur.",
          robots: "noindex, follow",
        };

    const canonicalUrl =
      path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

    document.title = activeSeo.title;

    upsertMeta("name", "description", activeSeo.description);

    if (activeSeo.keywords) {
      upsertMeta("name", "keywords", activeSeo.keywords);
    } else {
      // Avoid a previous page's keywords staying in the head
      document.head
        .querySelector('meta[name="keywords"]')
        ?.remove();
    }

    upsertMeta(
      "name",
      "robots",
      activeSeo.robots ??
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    upsertMeta("property", "og:title", activeSeo.title);
    upsertMeta("property", "og:description", activeSeo.description);
    upsertMeta("property", "og:image", defaultImage);
    upsertMeta("property", "og:image:alt", defaultImageAlt);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:locale", defaultLocale);

    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", activeSeo.title);
    upsertMeta("name", "twitter:description", activeSeo.description);
    upsertMeta("name", "twitter:image", defaultImage);
    upsertMeta("name", "twitter:image:alt", defaultImageAlt);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    // Breadcrumb structured data
    if (isKnownPage) {
      upsertJsonLd(
        "breadcrumb-jsonld",
        buildBreadcrumbSchema(
          breadcrumbsFor(path, breadcrumbLabelByPath[path])
        )
      );
    } else {
      removeJsonLd("breadcrumb-jsonld");
    }

    // WebPage + Service + FAQPage structured data (landing pages),
    // FAQPage structured data (main pages that have FAQs)
    const landing = landingBySlugPath[path];

    const pageFaqs = faqsByPath[path];

    if (landing) {
      upsertJsonLd("page-jsonld", buildLandingPageSchema(landing));
    } else if (pageFaqs && pageFaqs.length > 0) {
      // Main pages with FAQs (home page)
      upsertJsonLd(
        "page-jsonld",
        buildFaqPageSchema(canonicalUrl, pageFaqs)
      );
    } else {
      removeJsonLd("page-jsonld");
    }
  }, [location.pathname]);

  return null;
}
