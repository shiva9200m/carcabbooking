import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://www.carcabbooking.com";
const siteName = "Car Cab Booking";
const defaultLocale = "en_IN";
const defaultImage = `${siteUrl}/assets/ccb.png`;
const defaultImageAlt = "Car Cab Booking Gorakhpur";

type SeoConfig = {
  title: string;
  description: string;
  robots?: string;
};

const seoByPath: Record<string, SeoConfig> = {
  "/": {
    title:
      "Cab Booking in Gorakhpur | Taxi Service 24/7 | Car Cab Booking",
    description:
      "Book reliable cab and taxi service in Gorakhpur for local travel, airport and railway pickup, sightseeing and outstation trips including Ayodhya, Varanasi, Kushinagar and Nepal.",
  },

  "/destinations": {
    title:
      "Outstation Cab from Gorakhpur | Nepal, Ayodhya, Varanasi & More",
    description:
      "Book outstation cab from Gorakhpur to Nepal, Pokhara, Ayodhya, Varanasi, Kushinagar, Lucknow, Sonauli and other destinations with reliable taxi service.",
  },

  "/packages": {
    title:
      "Cab Packages in Gorakhpur | Sedan, SUV, Innova & Traveller",
    description:
      "Explore cab booking packages in Gorakhpur with sedan, SUV, Innova, Ertiga, Scorpio and tempo traveller options for local, family and outstation travel.",
  },

  "/guides": {
    title:
      "Gorakhpur Taxi & Travel Guide | Local and Outstation Cab Tips",
    description:
      "Read useful Gorakhpur taxi and travel guides for local cab booking, airport pickup, railway station travel, sightseeing and outstation trips.",
  },

  "/contact": {
    title:
      "Contact Car Cab Booking Gorakhpur | Book Taxi 24/7",
    description:
      "Contact Car Cab Booking in Gorakhpur for local taxi, airport pickup, railway station pickup, car rental and outstation cab booking. Call or WhatsApp 24/7.",
  },
};

const breadcrumbByPath: Record<
  string,
  { name: string; item: string }[]
> = {
  "/": [
    {
      name: "Home",
      item: `${siteUrl}/`,
    },
  ],

  "/destinations": [
    {
      name: "Home",
      item: `${siteUrl}/`,
    },
    {
      name: "Destinations",
      item: `${siteUrl}/destinations`,
    },
  ],

  "/packages": [
    {
      name: "Home",
      item: `${siteUrl}/`,
    },
    {
      name: "Packages",
      item: `${siteUrl}/packages`,
    },
  ],

  "/guides": [
    {
      name: "Home",
      item: `${siteUrl}/`,
    },
    {
      name: "Guides",
      item: `${siteUrl}/guides`,
    },
  ],

  "/contact": [
    {
      name: "Home",
      item: `${siteUrl}/`,
    },
    {
      name: "Contact",
      item: `${siteUrl}/contact`,
    },
  ],
};

function upsertMeta(
  selector: string,
  create: () => HTMLMetaElement,
  value: string
) {
  let meta =
    document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = create();
    document.head.appendChild(meta);
  }

  meta.content = value;
}

function upsertJsonLd(id: string, json: object) {
  let script =
    document.head.querySelector<HTMLScriptElement>(
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
  const script =
    document.head.querySelector<HTMLScriptElement>(
      `script#${id}`
    );

  if (script) {
    script.remove();
  }
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
          title:
            "Page Not Found | Car Cab Booking Gorakhpur",
          description:
            "The page you are looking for could not be found. Visit Car Cab Booking for taxi and cab service in Gorakhpur.",
          robots: "noindex, follow",
        };

    const canonicalUrl =
      path === "/"
        ? `${siteUrl}/`
        : `${siteUrl}${path}`;

    /*
     * =========================================================
     * TITLE
     * =========================================================
     */

    document.title = activeSeo.title;

    /*
     * =========================================================
     * META DESCRIPTION
     * =========================================================
     */

    upsertMeta(
      'meta[name="description"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.name = "description";
        return meta;
      },
      activeSeo.description
    );

    /*
     * =========================================================
     * ROBOTS
     * =========================================================
     */

    upsertMeta(
      'meta[name="robots"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.name = "robots";
        return meta;
      },
      activeSeo.robots ??
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    /*
     * =========================================================
     * OPEN GRAPH
     * =========================================================
     */

    upsertMeta(
      'meta[property="og:title"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.setAttribute(
          "property",
          "og:title"
        );
        return meta;
      },
      activeSeo.title
    );

    upsertMeta(
      'meta[property="og:description"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.setAttribute(
          "property",
          "og:description"
        );
        return meta;
      },
      activeSeo.description
    );

    upsertMeta(
      'meta[property="og:image"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.setAttribute(
          "property",
          "og:image"
        );
        return meta;
      },
      defaultImage
    );

    upsertMeta(
      'meta[property="og:image:alt"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.setAttribute(
          "property",
          "og:image:alt"
        );
        return meta;
      },
      defaultImageAlt
    );

    upsertMeta(
      'meta[property="og:url"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.setAttribute(
          "property",
          "og:url"
        );
        return meta;
      },
      canonicalUrl
    );

    upsertMeta(
      'meta[property="og:type"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.setAttribute(
          "property",
          "og:type"
        );
        return meta;
      },
      "website"
    );

    upsertMeta(
      'meta[property="og:site_name"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.setAttribute(
          "property",
          "og:site_name"
        );
        return meta;
      },
      siteName
    );

    upsertMeta(
      'meta[property="og:locale"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.setAttribute(
          "property",
          "og:locale"
        );
        return meta;
      },
      defaultLocale
    );

    /*
     * =========================================================
     * TWITTER / SOCIAL META
     * =========================================================
     */

    upsertMeta(
      'meta[name="twitter:card"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.name = "twitter:card";
        return meta;
      },
      "summary"
    );

    upsertMeta(
      'meta[name="twitter:title"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.name = "twitter:title";
        return meta;
      },
      activeSeo.title
    );

    upsertMeta(
      'meta[name="twitter:description"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.name =
          "twitter:description";
        return meta;
      },
      activeSeo.description
    );

    upsertMeta(
      'meta[name="twitter:image"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.name = "twitter:image";
        return meta;
      },
      defaultImage
    );

    upsertMeta(
      'meta[name="twitter:image:alt"]',
      () => {
        const meta =
          document.createElement("meta");
        meta.name =
          "twitter:image:alt";
        return meta;
      },
      defaultImageAlt
    );

    /*
     * =========================================================
     * CANONICAL URL
     * =========================================================
     */

    let canonical =
      document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (!canonical) {
      canonical =
        document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    /*
     * =========================================================
     * BREADCRUMB SCHEMA
     * =========================================================
     */

    const breadcrumbList =
      breadcrumbByPath[path];

    if (
      isKnownPage &&
      breadcrumbList &&
      breadcrumbList.length > 0
    ) {
      upsertJsonLd(
        "breadcrumb-jsonld",
        {
          "@context":
            "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement:
            breadcrumbList.map(
              (item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: item.item,
              })
            ),
        }
      );
    } else {
      removeJsonLd(
        "breadcrumb-jsonld"
      );
    }
  }, [location.pathname]);

  return null;
}