/**
 * SEO + plain-text summary for the five main pages.
 * Used by src/seo/Seo.tsx (browser tags) and scripts/prerender.mjs
 * (static HTML snapshot for crawlers that do not run JavaScript).
 * Keep this file free of imports.
 */

export type Faq = {
  question: string;
  answer: string;
};

export type MainPage = {
  path: string;
  title: string;
  description: string;
  keywords: string;
  /** Breadcrumb label (the home page has none) */
  breadcrumbLabel?: string;
  h1: string;
  paragraphs: string[];
  bullets?: string[];
  /** FAQs shown on the page (also used for FAQPage structured data) */
  faqs?: Faq[];
};

// Home page FAQs: shown on the home page, in the FAQPage schema and in the
// static HTML snapshot. Edit them here only.
export const homeFaqs: Faq[] = [
  {
    question:
      "Do you provide cab booking in Gorakhpur 24/7?",
    answer:
      "Yes. Car Cab Booking provides 24/7 booking support for local taxi service, airport pickup, railway station pickup and outstation cab journeys from Gorakhpur.",
  },
  {
    question:
      "Can I book a local taxi in Gorakhpur?",
    answer:
      "Yes. Local taxi booking is available for city travel and areas such as Mohaddipur, Golghar, Taramandal, Rapti Nagar, Gorakhnath and nearby locations.",
  },
  {
    question:
      "Do you provide Gorakhpur Airport taxi service?",
    answer:
      "Yes. You can book cab pickup and drop service for Gorakhpur Airport for local and onward travel.",
  },
  {
    question:
      "Can I book a taxi from Gorakhpur Railway Station?",
    answer:
      "Yes. Pickup and drop service is available for Gorakhpur Railway Station for city travel and outstation journeys.",
  },
  {
    question:
      "Which outstation routes are available from Gorakhpur?",
    answer:
      "Popular routes include Gorakhpur to Ayodhya, Varanasi, Kushinagar, Lucknow, Sonauli, Nepal and Pokhara.",
  },
  {
    question:
      "Can I find a taxi near me or a nearby cab service in Gorakhpur?",
    answer:
      "Yes. Call or WhatsApp Car Cab Booking with your pickup location and we will confirm the cab and pickup time.",
  },
  {
    question:
      "Is online cab booking available in Gorakhpur?",
    answer:
      "Yes. You can book a cab online by sending your trip details on WhatsApp, or call us to confirm the car and fare.",
  },
  {
    question:
      "Do you provide car rental in Gorakhpur with driver?",
    answer:
      "Yes. Cars are available with a driver for local travel, airport and railway pickup and outstation trips.",
  },
  {
    question:
      "Do you provide one-way and round-trip cab booking?",
    answer:
      "Yes. You can contact us for one-way cab and round-trip booking based on your route and travel requirements.",
  },
];

export const mainPages: MainPage[] = [
  {
    path: "/",
    title: "Cab Booking & Taxi Service in Gorakhpur | Car Cab Booking",
    description:
      "Cab booking and taxi service in Gorakhpur: local rides, airport and railway station pickup, car rental and outstation trips to Ayodhya, Varanasi, Lucknow and Nepal.",
    keywords:
      "car cab booking Gorakhpur, car cab booking, cab booking Gorakhpur, Gorakhpur cab booking, online cab booking in Gorakhpur, car booking Gorakhpur, cab service in Gorakhpur, taxi service in Gorakhpur, Gorakhpur taxi service, taxi in Gorakhpur, Gorakhpur taxi, cab in Gorakhpur, outstation taxi from Gorakhpur, car rental in Gorakhpur, Gorakhpur to Nepal taxi, taxi near me, cab near me",
    h1: "Cab Booking & Taxi Service in Gorakhpur",
    paragraphs: [
      "Car Cab Booking provides cab booking and taxi service in Gorakhpur for local rides, airport and railway station pickup, car rental with driver and outstation trips. Book by call on +91 8810990496 or by WhatsApp, and the car and fare are confirmed with you before the trip.",
      "Popular outstation routes from Gorakhpur include Ayodhya, Varanasi, Kushinagar, Lucknow, Sonauli, Nepal and Pokhara.",
    ],
    bullets: [
      "Local taxi in Gorakhpur",
      "Gorakhpur Airport taxi",
      "Gorakhpur Railway Station taxi",
      "Gorakhpur sightseeing cab",
      "Outstation taxi from Gorakhpur",
      "Car rental in Gorakhpur with driver",
    ],
    faqs: homeFaqs,
  },
  {
    path: "/destinations",
    title: "Outstation Cab from Gorakhpur | Ayodhya, Varanasi, Nepal & More",
    description:
      "Book outstation cab from Gorakhpur to Nepal, Pokhara, Muktinath, Pashupatinath, Ayodhya, Varanasi and more with one-way, round-trip and tour package options.",
    keywords:
      "Gorakhpur to Nepal taxi, Gorakhpur to Pokhara taxi, Gorakhpur to Ayodhya taxi, Gorakhpur to Varanasi taxi, Gorakhpur to Lucknow taxi, outstation taxi from Gorakhpur, outstation cab booking, cabs for outstation, car hire in Gorakhpur for Nepal, tourist car booking",
    breadcrumbLabel: "Destinations",
    h1: "Popular Cab Destinations from Gorakhpur",
    paragraphs: [
      "Explore religious places, hill stations, heritage cities and Nepal destinations by cab from Gorakhpur. One-way, round-trip and tour options are available. Call or WhatsApp Car Cab Booking to confirm the car and fare for your route.",
    ],
    bullets: [
      "Nepal: Kathmandu and Pokhara",
      "Pilgrimage: Ayodhya, Banaras (Varanasi), Prayagraj, Kushinagar, Mathura and Vrindavan, Haridwar, Rishikesh, Chitrakoot, Vindhyachal, Kedarnath",
      "Cities and heritage: Lucknow, Agra, Delhi, Jaipur, Udaipur, Jaisalmer, Amritsar",
      "Hills and nature: Nainital, Jim Corbett, Shimla, Mussoorie, Manali",
    ],
  },
  {
    path: "/packages",
    title: "Cab Packages in Gorakhpur | Sedan, SUV, Innova & Traveller",
    description:
      "Explore cab booking packages and car rental in Gorakhpur for local taxi, airport transfer, railway station pickup, Nepal tours and outstation travel with sedan, SUV, Innova, Ertiga and traveller options.",
    keywords:
      "car rental in Gorakhpur, car rental in Gorakhpur with driver, rent a car in Gorakhpur, cab hire, cab booking packages, Innova taxi Gorakhpur, Ertiga taxi Gorakhpur, Tempo Traveller Gorakhpur, outstation cab service from Gorakhpur",
    breadcrumbLabel: "Packages",
    h1: "Cars & Cab Packages in Gorakhpur",
    paragraphs: [
      "Choose a car for local taxi, airport transfer, railway station pickup, Nepal tours and outstation travel from Gorakhpur. Call or WhatsApp Car Cab Booking to confirm availability and the fare for your route.",
    ],
    bullets: [
      "Toyota Innova (7 seater)",
      "Maruti Suzuki Ertiga (7 seater)",
      "Kia Carens (7 seater)",
      "Mahindra Scorpio (6 seater)",
      "Maruti Suzuki Dzire (5 seater)",
      "Luxury Tempo Traveller (16 seater)",
      "Renault Triber (7 seater)",
    ],
  },
  {
    path: "/guides",
    title: "Gorakhpur Taxi Guide | Airport, Railway & Local Cab Travel",
    description:
      "Read Gorakhpur taxi and travel guides for airport pickup, railway station taxi, local sightseeing, Gorakhnath Temple, Ramgarh Tal, Nauka Vihar and outstation cab routes.",
    keywords:
      "how to book a cab, Gorakhpur taxi guide, Gorakhpur airport taxi, Gorakhpur railway station taxi, outstation cab booking, book a cab for a day",
    breadcrumbLabel: "Travel Guide",
    h1: "Gorakhpur Taxi Guide",
    paragraphs: [
      "Useful travel tips, route advice and booking guidance for local and outstation taxi service from Gorakhpur. The guides cover airport pickup, railway station taxi, local sightseeing such as Gorakhnath Temple, Ramgarh Tal and Nauka Vihar, and outstation cab routes.",
    ],
  },
  {
    path: "/contact",
    title: "Contact Car Cab Booking Gorakhpur | Taxi Booking 24/7",
    description:
      "Contact Car Cab Booking for local taxi in Gorakhpur, airport pickup, Gorakhpur Railway Station cab, outstation taxi, one-way cab and round-trip booking.",
    keywords:
      "Gorakhpur taxi service number, taxi booking near me, cab booking Gorakhpur, car booking in Gorakhpur, 24/7 taxi Gorakhpur",
    breadcrumbLabel: "Contact",
    h1: "Contact Car Cab Booking Gorakhpur",
    paragraphs: [
      "Call +91 8810990496 or +91 7084183421, or send a WhatsApp message, to book a local taxi in Gorakhpur, airport pickup, railway station cab or an outstation trip. Email: ajaysingh80098@gmail.com.",
    ],
  },
];
