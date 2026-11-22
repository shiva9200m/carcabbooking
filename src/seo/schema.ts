/**
 * JSON-LD builders shared by the browser (Seo.tsx) and the build step
 * (scripts/prerender.mjs). Keep this file free of value imports.
 */
import type { LandingPage } from "@/data/landingPages";

export const SITE_URL = "https://www.carcabbooking.com";

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export type Crumb = { name: string; item: string };

export function breadcrumbsFor(path: string, label?: string): Crumb[] {
  const home: Crumb = { name: "Home", item: `${SITE_URL}/` };

  if (path === "/" || !label) {
    return [home];
  }

  return [home, { name: label, item: `${SITE_URL}${path}` }];
}

export function buildBreadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function buildFaqPageSchema(
  url: string,
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/**
 * WebPage + Service + FAQPage for one landing page.
 * Everything here is also visible on the page (quick answer, FAQs).
 */
export function buildLandingPageSchema(page: LandingPage) {
  const url = `${SITE_URL}/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: "en-IN",
        dateModified: page.updated,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.h1,
        description: page.quickAnswer,
        url,
        serviceType: page.linkLabel,
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@type": "City", name: "Gorakhpur" },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}
