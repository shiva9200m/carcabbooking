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
      "Cab Booking in Gorakhpur | Local Taxi & Outstation Cab 24/7",
    description:
      "Book cab and taxi service in Gorakhpur for local rides, airport pickup, railway station pickup, sightseeing and outstation trips to Ayodhya, Varanasi, Kushinagar, Lucknow, Nepal and more.",
  },

  "/destinations": {
    title:
      "Outstation Cab from Gorakhpur | Ayodhya, Varanasi, Nepal & More",
    description:
      "Book outstation cab from Gorakhpur to Ayodhya, Varanasi, Kushinagar, Lucknow, Sonauli, Nepal, Pokhara and nearby destinations with one-way and round-trip options.",
  },

  "/packages": {
    title:
      "Cab Packages in Gorakhpur | Sedan, SUV, Innova & Traveller",
    description:
      "Explore cab booking packages in Gorakhpur for local taxi, airport transfer, railway station pickup and outstation travel with sedan, SUV, Innova, Ertiga and traveller options.",
  },

  "/guides": {
    title:
      "Gorakhpur Taxi Guide | Airport, Railway & Local Cab Travel",
    description:
      "Read Gorakhpur taxi and travel guides for airport pickup, railway station taxi, local sightseeing, Gorakhnath Temple, Ramgarh Tal, Nauka Vihar and outstation cab routes.",
  },

  "/contact": {
    title:
      "Contact Car Cab Booking Gorakhpur | Taxi Booking 24/7",
    description:
      "Contact Car Cab Booking for local taxi in Gorakhpur, airport pickup, Gorakhpur Railway Station cab, outstation taxi, one-way cab and round-trip booking.",
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
      name: "Travel Guide",
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
            "The requested page could not be found. Visit Car Cab Booking for local taxi and outstation cab service in Gorakhpur.",
          robots: "noindex, follow",
        };

    const canonicalUrl =
      path === "/"
        ? `${siteUrl}/`
        : `${siteUrl}${path}`;

    document.title = activeSeo.title;

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