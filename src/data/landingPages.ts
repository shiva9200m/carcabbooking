export type LandingFaq = {
  question: string;
  answer: string;
};

export type LandingSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LandingPage = {
  slug: string;
  /** Short label used in footer / internal link lists */
  linkLabel: string;
  /** <title> – keep under about 60 characters */
  title: string;
  /** meta description – keep under about 155 characters */
  description: string;
  keywords: string;
  h1: string;
  /** 35-55 word direct answer shown first on the page (AEO) */
  quickAnswer: string;
  /** ISO date (YYYY-MM-DD). Update when you change the content. */
  updated: string;
  heroText: string;
  intro: string[];
  sections: LandingSection[];
  faqs: LandingFaq[];
  /** Hindi paragraph for local search ("कैब बुकिंग", "टैक्सी सेवा") */
  hindi?: string;
  /** slugs of other landing pages to link to */
  related: string[];
};

export const landingPages: LandingPage[] = [
  {
    slug: "taxi-service-in-gorakhpur",
    linkLabel: "Taxi Service in Gorakhpur",
    title: "Taxi Service in Gorakhpur | Local & Outstation Cab 24/7",
    description:
      "Book taxi service in Gorakhpur for local rides, airport and railway station pickup, sightseeing and outstation trips. Call or WhatsApp Car Cab Booking.",
    keywords:
      "taxi service in Gorakhpur, Gorakhpur taxi service, taxi services in Gorakhpur, Gorakhpur taxi services, taxi in Gorakhpur, taxi Gorakhpur, Gorakhpur taxi, cab service in Gorakhpur, cab services in Gorakhpur, cab service Gorakhpur, Gorakhpur cab service, cab in Gorakhpur, Gorakhpur cab, Gorakhpur cabs, taxi near me, cab near me, nearby cab service, cab service near me, car taxi near me, 24/7 taxi, Gorakhpur taxi service number, best taxi service in Gorakhpur",
    h1: "Taxi Service in Gorakhpur",
    quickAnswer:
      "Car Cab Booking provides taxi service in Gorakhpur for local rides, airport and railway station pickup, sightseeing and outstation trips. To book, call +91 8810990496 or WhatsApp your pickup point, destination, travel date and number of passengers. The car and fare are confirmed with you before the trip.",
    updated: "2026-11-22",
    heroText:
      "Local taxi, airport pickup, railway station cab and outstation trips with call and WhatsApp booking.",
    intro: [
      "Car Cab Booking provides taxi service in Gorakhpur for people who need a dependable cab for city travel, station and airport transfers, family visits and long-distance journeys. You can book by phone, WhatsApp or the booking form on this page.",
      "Tell us your pickup point, destination, travel date and number of passengers. We will confirm the car, route and fare with you before your trip.",
    ],
    sections: [
      {
        heading: "Our Taxi Services in Gorakhpur",
        paragraphs: [
          "Choose the service that matches your trip. Each one can be booked for a single ride or for a full day.",
        ],
        bullets: [
          "Local taxi in Gorakhpur for city travel, shopping, hospital visits and family functions",
          "Gorakhpur Airport taxi for pickup and drop",
          "Gorakhpur Railway Station taxi for arrivals and departures",
          "Sightseeing cab for Gorakhnath Temple, Ramgarh Tal, Nauka Vihar and Gita Press",
          "One-way and round-trip outstation taxi from Gorakhpur",
        ],
      },
      {
        heading: "How to Choose a Good Taxi Service in Gorakhpur",
        paragraphs: [
          "When you compare taxi services, check a few simple things: whether the fare is confirmed before the trip, whether toll, parking and driver charges are explained, whether the car size suits your group and luggage, and whether someone answers the phone at any hour.",
          "Ask these questions when you contact us. We are happy to explain how the fare for your route is worked out before you confirm.",
        ],
      },
      {
        heading: "Taxi Near Me and Nearby Cab Service in Gorakhpur",
        paragraphs: [
          "If you are searching for a taxi near me or a nearby cab service in Gorakhpur, call or WhatsApp us with your pickup location. We will confirm the car and pickup time with you. Cab service in Gorakhpur is available for day and night travel, so you can also ask for a 24/7 taxi for early-morning or late-night trips.",
        ],
      },
      {
        heading: "Areas We Cover in Gorakhpur",
        paragraphs: [
          "Local taxi booking is available for Mohaddipur, Golghar, Taramandal, Rapti Nagar, Medical College, Gorakhnath, Sahjanwa, Pipraich, Chauri Chaura and nearby areas.",
        ],
      },
    ],
    hindi:
      "गोरखपुर में कैब बुकिंग और टैक्सी सेवा के लिए हमें कॉल या WhatsApp करें। लोकल टैक्सी, एयरपोर्ट पिकअप, रेलवे स्टेशन पिकअप और आउटस्टेशन कैब के लिए अपनी जानकारी भेजें, हम गाड़ी और किराया कन्फर्म करेंगे।",
    faqs: [
      {
        question: "What is the Gorakhpur taxi service number?",
        answer:
          "You can call Car Cab Booking on +91 8810990496 or +91 7084183421, or send a WhatsApp message to book a taxi in Gorakhpur.",
      },
      {
        question: "How can I book a taxi in Gorakhpur?",
        answer:
          "Call or WhatsApp Car Cab Booking, or fill in the booking form on this page. Share your pickup location, destination, date, time and passenger count, and we will confirm the car and fare.",
      },
      {
        question: "Is taxi service available at night in Gorakhpur?",
        answer:
          "Booking support is available 24/7. Contact us with your pickup time and we will confirm vehicle availability.",
      },
      {
        question: "Can I book a taxi for a full day in Gorakhpur?",
        answer:
          "Yes. You can request a local taxi for a few hours or a full day for sightseeing, events or multiple stops. Share your plan and we will confirm the details.",
      },
      {
        question: "Do you provide outstation taxi from Gorakhpur?",
        answer:
          "Yes. One-way and round-trip cabs are available for Ayodhya, Varanasi, Lucknow, Nepal, Pokhara and other routes.",
      },
    ],
    related: [
      "outstation-taxi-service-gorakhpur",
      "gorakhpur-airport-taxi",
      "gorakhpur-railway-station-taxi",
      "car-rental-in-gorakhpur",
      "online-cab-booking-gorakhpur",
      "tour-and-travels-gorakhpur",
    ],
  },

  {
    slug: "outstation-taxi-service-gorakhpur",
    linkLabel: "Outstation Taxi from Gorakhpur",
    title: "Outstation Taxi from Gorakhpur | One-Way & Round Trip Cab",
    description:
      "Book outstation taxi from Gorakhpur for one-way or round-trip travel to Ayodhya, Varanasi, Lucknow, Nepal, Pokhara and more. Call or WhatsApp to confirm.",
    keywords:
      "outstation taxi service in Gorakhpur, outstation taxi from Gorakhpur, outstation cab booking, cab booking outstation, cabs for outstation, outstation cabs, outstation cab service from Gorakhpur",
    h1: "Outstation Taxi Service from Gorakhpur",
    quickAnswer:
      "Car Cab Booking offers one-way and round-trip outstation taxi from Gorakhpur to places such as Ayodhya, Varanasi, Lucknow, Nepal and Pokhara. Share your route, dates and number of passengers on call or WhatsApp, and the car and fare are confirmed before you travel.",
    updated: "2026-11-22",
    heroText:
      "One-way and round-trip cabs from Gorakhpur to Ayodhya, Varanasi, Lucknow, Nepal and other destinations.",
    intro: [
      "Planning a long-distance journey? Car Cab Booking offers outstation taxi service from Gorakhpur for families, pilgrims, business travellers and tour groups. Pick the car that fits your group and tell us your route.",
      "We confirm the car, route and fare before you travel, so you know what to expect on the day.",
    ],
    sections: [
      {
        heading: "Popular Outstation Routes from Gorakhpur",
        paragraphs: [
          "These are the routes people ask for most often. Other destinations can also be requested.",
        ],
        bullets: [
          "Gorakhpur to Ayodhya taxi",
          "Gorakhpur to Varanasi (Banaras) taxi",
          "Gorakhpur to Lucknow taxi",
          "Gorakhpur to Nepal taxi via Sonauli",
          "Gorakhpur to Pokhara taxi",
          "Gorakhpur to Kushinagar, Prayagraj and other pilgrimage and tourist places",
        ],
      },
      {
        heading: "One-Way and Round-Trip Booking",
        paragraphs: [
          "For a one-way drop, tell us where you want to go and when. For a round trip, add your return date in the booking form so the driver and car are planned for the full journey.",
          "Ask us how toll, parking and driver allowance apply to your route so there are no surprises.",
        ],
      },
      {
        heading: "Choose the Right Car",
        paragraphs: [
          "Sedan cars suit small families, while Ertiga, Carens, Triber, Scorpio and Innova suit larger groups with luggage. A Tempo Traveller is available for bigger groups. Mention your passengers and luggage and we will suggest a suitable car.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer one-way outstation cabs from Gorakhpur?",
        answer:
          "Yes. You can book a one-way drop or a round trip. Share your route and dates and we will confirm the fare.",
      },
      {
        question: "Which car is best for a family outstation trip?",
        answer:
          "That depends on group size and luggage. For up to four passengers a sedan is usually enough; for five or more, an Ertiga, Carens, Scorpio or Innova is more comfortable.",
      },
      {
        question: "Are toll and parking charges included?",
        answer:
          "This depends on the route and booking. Ask us when you enquire and we will explain which charges apply before you confirm.",
      },
    ],
    related: [
      "gorakhpur-to-ayodhya-taxi",
      "gorakhpur-to-varanasi-taxi",
      "gorakhpur-to-lucknow-taxi",
      "gorakhpur-to-nepal-taxi",
    ],
  },

  {
    slug: "gorakhpur-to-nepal-taxi",
    linkLabel: "Gorakhpur to Nepal Taxi",
    title: "Gorakhpur to Nepal Taxi Service | Sonauli, Kathmandu & More",
    description:
      "Book Gorakhpur to Nepal taxi via Sonauli for Kathmandu, Pokhara and other destinations. One-way and round-trip cab with call and WhatsApp booking.",
    keywords:
      "Gorakhpur to Nepal taxi, Gorakhpur to Nepal taxi service, car hire in Gorakhpur for Nepal, Gorakhpur to Sonauli cab, Gorakhpur to Kathmandu taxi",
    h1: "Gorakhpur to Nepal Taxi Service",
    quickAnswer:
      "Car Cab Booking arranges taxi from Gorakhpur to Nepal, usually through the Sonauli border, for destinations such as Pokhara and Kathmandu. Send your destination, dates and number of travellers on call or WhatsApp. Border and vehicle permit rules can change, so confirm current requirements before you travel.",
    updated: "2026-11-22",
    heroText:
      "Cab booking from Gorakhpur to Sonauli, Kathmandu, Pokhara and other Nepal destinations.",
    intro: [
      "Gorakhpur is a common starting point for road trips to Nepal through the Sonauli border. Car Cab Booking arranges taxis from Gorakhpur for Nepal trips, whether you are going for sightseeing, a pilgrimage, family travel or business.",
      "Tell us where you want to go in Nepal, your dates and the number of travellers, and we will confirm the car and fare.",
    ],
    sections: [
      {
        heading: "Nepal Destinations We Can Plan For",
        paragraphs: [
          "Popular requests include the following. Other places can also be requested.",
        ],
        bullets: [
          "Gorakhpur to Sonauli border drop",
          "Gorakhpur to Pokhara taxi",
          "Gorakhpur to Kathmandu taxi",
          "Kathmandu city and nearby places",
          "Muktinath and Pashupatinath tour enquiries",
        ],
      },
      {
        heading: "Before You Travel to Nepal",
        paragraphs: [
          "Carry valid photo identification for every traveller. Border formalities and rules for taking a vehicle across the border can change, so please confirm the current requirements with us and with the relevant authorities before you travel.",
          "Share your full itinerary when you enquire so we can tell you whether the trip is a drop at the border or a complete journey into Nepal.",
        ],
      },
      {
        heading: "Cars for Nepal Trips",
        paragraphs: [
          "Choose from sedan, SUV, Innova and Tempo Traveller options depending on group size. Mention your luggage so the right vehicle is planned.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide Gorakhpur to Nepal taxi service?",
        answer:
          "Yes. Contact us with your destination in Nepal and your travel dates, and we will confirm availability and fare.",
      },
      {
        question: "Which border is used from Gorakhpur to Nepal?",
        answer:
          "Most road travellers from Gorakhpur use the Sonauli border. We will confirm the route for your trip.",
      },
      {
        question: "Can I book a round trip to Nepal?",
        answer:
          "Yes. Add your return date in the booking form or tell us on the call so the plan covers the full journey.",
      },
    ],
    related: [
      "gorakhpur-to-pokhara-taxi",
      "outstation-taxi-service-gorakhpur",
      "car-rental-in-gorakhpur",
    ],
  },

  {
    slug: "gorakhpur-to-pokhara-taxi",
    linkLabel: "Gorakhpur to Pokhara Taxi",
    title: "Gorakhpur to Pokhara Taxi | One-Way & Round Trip Cab",
    description:
      "Book Gorakhpur to Pokhara taxi via Sonauli. One-way and round-trip cab for families and groups. Ask for the fare on call or WhatsApp.",
    keywords:
      "Gorakhpur to Pokhara taxi, Gorakhpur to Pokhara taxi fare, Gorakhpur to Pokhara cab, Pokhara taxi from Gorakhpur",
    h1: "Gorakhpur to Pokhara Taxi",
    quickAnswer:
      "You can book a taxi from Gorakhpur to Pokhara with Car Cab Booking as a one-way drop or a round trip. The fare depends on the car, the dates and whether you need a return journey, so call or WhatsApp +91 8810990496 with your plan to get the fare for your trip.",
    updated: "2026-11-22",
    heroText:
      "Comfortable cab booking from Gorakhpur to Pokhara through the Sonauli border.",
    intro: [
      "Pokhara is one of the most requested Nepal destinations from Gorakhpur. Car Cab Booking arranges one-way and round-trip taxis for Pokhara so you can travel with your family or group in a car that suits your luggage.",
      "The fare depends on the car, the dates and whether you need a return journey. Call or WhatsApp us with your plan to get the fare for your trip.",
    ],
    sections: [
      {
        heading: "Planning Your Gorakhpur to Pokhara Trip",
        paragraphs: [
          "Most travellers go from Gorakhpur to the Sonauli border and continue by road into Nepal. Mountain roads can take longer than you expect, so plan your start time with some buffer.",
        ],
        bullets: [
          "Tell us your travel date and pickup time",
          "Share the number of passengers and bags",
          "Say whether you need a one-way drop or a round trip",
          "Ask us about toll, parking and driver allowance for the trip",
        ],
      },
      {
        heading: "What to Carry",
        paragraphs: [
          "Keep valid photo identification for every traveller. Rules for crossing the border with a vehicle can change, so confirm the latest requirements with us before you leave.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the taxi fare from Gorakhpur to Pokhara?",
        answer:
          "The fare depends on the car type, the number of days and whether it is one way or a round trip. Call or WhatsApp us with your details to get the fare for your trip.",
      },
      {
        question: "Can I book a one-way taxi to Pokhara?",
        answer:
          "Yes. One-way and round-trip bookings are both available. Share your dates when you enquire.",
      },
      {
        question: "Which car should I choose for Pokhara?",
        answer:
          "For couples and small families a sedan or Triber is usually enough. For bigger groups or more luggage, choose an Ertiga, Carens, Scorpio, Innova or Tempo Traveller.",
      },
    ],
    related: [
      "gorakhpur-to-nepal-taxi",
      "outstation-taxi-service-gorakhpur",
      "taxi-service-in-gorakhpur",
    ],
  },

  {
    slug: "gorakhpur-to-ayodhya-taxi",
    linkLabel: "Gorakhpur to Ayodhya Taxi",
    title: "Gorakhpur to Ayodhya Taxi | One-Way & Round Trip Cab",
    description:
      "Book Gorakhpur to Ayodhya taxi for temple visits and family trips. One-way and round-trip cab booking by call or WhatsApp from Car Cab Booking.",
    keywords:
      "Gorakhpur to Ayodhya taxi, Gorakhpur to Ayodhya cab, Gorakhpur to Ayodhya cab booking, Ayodhya taxi from Gorakhpur",
    h1: "Gorakhpur to Ayodhya Taxi",
    quickAnswer:
      "Car Cab Booking provides taxi from Gorakhpur to Ayodhya for one-way drops, same-day return trips and pilgrimage tours. Call or WhatsApp with your date, pickup point and group size, and the car and fare are confirmed before you travel.",
    updated: "2026-11-22",
    heroText:
      "Cab booking from Gorakhpur to Ayodhya for temple visits, family trips and day tours.",
    intro: [
      "Ayodhya is a popular pilgrimage destination for travellers from Gorakhpur. Car Cab Booking provides Gorakhpur to Ayodhya taxi service for one-way drops, same-day return trips and multi-day pilgrimages.",
      "Share your travel date, pickup point and group size, and we will confirm the car and fare.",
    ],
    sections: [
      {
        heading: "Gorakhpur to Ayodhya Cab Options",
        paragraphs: [
          "Choose the plan that suits your visit.",
        ],
        bullets: [
          "One-way drop to Ayodhya",
          "Round trip with the driver waiting or returning on your chosen date",
          "Ayodhya darshan with local travel between temples and ghats",
          "Combined trips such as Ayodhya with Varanasi or Prayagraj",
        ],
      },
      {
        heading: "Tips for Your Ayodhya Trip",
        paragraphs: [
          "Temple areas can be busy on weekends, festivals and holidays, so start early and tell us your preferred pickup time. Mention elders or children in the group so we can suggest a comfortable car.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I book a same-day Gorakhpur to Ayodhya round trip?",
        answer:
          "Yes. Tell us your pickup time and when you want to return, and we will confirm if the plan works and what the fare will be.",
      },
      {
        question: "Which car is suitable for a family trip to Ayodhya?",
        answer:
          "A sedan suits up to four passengers. For larger families, an Ertiga, Carens, Scorpio or Innova is more comfortable.",
      },
      {
        question: "How do I get the fare for Gorakhpur to Ayodhya?",
        answer:
          "Call or WhatsApp us with your date, car preference and trip type. We will share the fare before you confirm.",
      },
    ],
    related: [
      "gorakhpur-to-varanasi-taxi",
      "gorakhpur-to-lucknow-taxi",
      "outstation-taxi-service-gorakhpur",
    ],
  },

  {
    slug: "gorakhpur-to-varanasi-taxi",
    linkLabel: "Gorakhpur to Varanasi Taxi",
    title: "Gorakhpur to Varanasi Taxi | Banaras Cab Booking",
    description:
      "Book Gorakhpur to Varanasi (Banaras) taxi for Kashi Vishwanath, ghats and Sarnath. One-way and round-trip cabs by call or WhatsApp.",
    keywords:
      "Gorakhpur to Varanasi taxi, Gorakhpur to Banaras taxi, Gorakhpur to Varanasi cab, Gorakhpur to Kashi cab",
    h1: "Gorakhpur to Varanasi Taxi",
    quickAnswer:
      "Car Cab Booking provides taxi from Gorakhpur to Varanasi (Banaras) for one-way travel, round trips and multi-day visits, including Kashi Vishwanath, the ghats and Sarnath. Share your dates and group size by call or WhatsApp to get the car and fare confirmed.",
    updated: "2026-11-22",
    heroText:
      "Cab booking from Gorakhpur to Varanasi (Banaras) for pilgrimage, ghats and sightseeing.",
    intro: [
      "Varanasi, also called Banaras or Kashi, is a major destination for pilgrims and tourists from Gorakhpur. Car Cab Booking offers Gorakhpur to Varanasi taxi service for one-way travel, round trips and multi-day visits.",
      "Tell us your travel dates and group size, and we will confirm the right car and fare.",
    ],
    sections: [
      {
        heading: "Gorakhpur to Varanasi Cab Service",
        paragraphs: [
          "We can plan your trip in the way that suits you.",
        ],
        bullets: [
          "One-way drop to Varanasi",
          "Round trip with return on your chosen date",
          "Varanasi sightseeing with Kashi Vishwanath, the ghats and Sarnath",
          "Combined route with Ayodhya or Prayagraj",
        ],
      },
      {
        heading: "Good to Know Before You Go",
        paragraphs: [
          "Roads near the old city and ghats are narrow and busy, so cars usually stop at designated parking areas and you walk the last part. Plan extra time for darshan and ghat visits, and tell us your preferred pickup time when you book.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide taxi from Gorakhpur to Banaras?",
        answer:
          "Yes. Varanasi and Banaras are the same destination. Contact us with your travel dates and we will confirm the cab and fare.",
      },
      {
        question: "Can I add sightseeing in Varanasi to my trip?",
        answer:
          "Yes. Mention it when you book and we will plan the car for local travel in Varanasi as well.",
      },
      {
        question: "Is a one-way taxi to Varanasi available?",
        answer:
          "Yes. One-way and round-trip options are both available. Share your plan and we will confirm the fare.",
      },
    ],
    related: [
      "gorakhpur-to-ayodhya-taxi",
      "gorakhpur-to-lucknow-taxi",
      "outstation-taxi-service-gorakhpur",
    ],
  },

  {
    slug: "gorakhpur-airport-taxi",
    linkLabel: "Gorakhpur Airport Taxi",
    title: "Gorakhpur Airport Taxi | Pickup & Drop Cab Booking",
    description:
      "Book Gorakhpur Airport taxi for pickup and drop to the city, railway station or other destinations. Call or WhatsApp Car Cab Booking.",
    keywords:
      "Gorakhpur airport taxi, Gorakhpur airport cab, Gorakhpur airport pickup, Gorakhpur airport drop taxi",
    h1: "Gorakhpur Airport Taxi",
    quickAnswer:
      "Car Cab Booking provides pickup and drop taxi service for Gorakhpur Airport. Send your flight date and time by call or WhatsApp, and the cab is planned around it. You can travel from the airport to the city, the railway station or an outstation destination.",
    updated: "2026-11-22",
    heroText:
      "Airport pickup and drop with cab booking by call or WhatsApp.",
    intro: [
      "Car Cab Booking provides Gorakhpur Airport taxi service for arrivals and departures. Book a cab to or from the airport for city travel, the railway station, hotels or an onward outstation journey.",
      "Share your flight date and time so the pickup can be planned around it.",
    ],
    sections: [
      {
        heading: "Airport Pickup and Drop Options",
        paragraphs: [
          "Tell us what you need and we will confirm the car.",
        ],
        bullets: [
          "Airport to Gorakhpur city or hotel",
          "Home or hotel to the airport",
          "Airport to Gorakhpur Railway Station",
          "Airport to outstation destinations such as Ayodhya, Varanasi, Lucknow and Nepal",
        ],
      },
      {
        heading: "How to Book an Airport Taxi",
        paragraphs: [
          "Choose Gorakhpur Airport pickup or drop in the booking form, add your date and time, and send the details on WhatsApp. For early-morning or late-night flights, contact us in advance so the driver is ready.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I book a taxi for Gorakhpur Airport in advance?",
        answer:
          "Yes. Send your flight date and time and we will plan the pickup or drop.",
      },
      {
        question: "Do you provide airport drop at early morning or late night?",
        answer:
          "Booking support is available 24/7. Contact us ahead of time with your timing and we will confirm availability.",
      },
      {
        question: "Can I travel from the airport to another city?",
        answer:
          "Yes. Airport pickup can be combined with an outstation trip. Mention your destination when you book.",
      },
    ],
    related: [
      "gorakhpur-railway-station-taxi",
      "taxi-service-in-gorakhpur",
      "outstation-taxi-service-gorakhpur",
    ],
  },

  {
    slug: "gorakhpur-railway-station-taxi",
    linkLabel: "Gorakhpur Railway Station Taxi",
    title: "Gorakhpur Railway Station Taxi | Pickup & Drop Cab",
    description:
      "Book a cab from Gorakhpur Railway Station for city travel or outstation trips. Pickup and drop with call and WhatsApp booking from Car Cab Booking.",
    keywords:
      "Gorakhpur railway station taxi, Gorakhpur junction taxi, Gorakhpur station cab, Gorakhpur railway station pickup",
    h1: "Gorakhpur Railway Station Taxi",
    quickAnswer:
      "Car Cab Booking provides taxi pickup and drop at Gorakhpur Railway Station for city travel and outstation trips. Send your train arrival or departure time by call or WhatsApp, and the pickup is planned around it.",
    updated: "2026-11-22",
    heroText:
      "Station pickup and drop for city travel and outstation journeys.",
    intro: [
      "Gorakhpur Junction is one of the busiest railway stations in the region. Car Cab Booking provides railway station taxi service so you have a cab ready when your train arrives or when you need to reach the station on time.",
      "Share your train arrival or departure time and we will plan the pickup around it.",
    ],
    sections: [
      {
        heading: "Railway Station Taxi Options",
        paragraphs: [
          "Book the service you need.",
        ],
        bullets: [
          "Station pickup to home, hotel or hospital in Gorakhpur",
          "Drop to the station for your train",
          "Station to Gorakhpur Airport",
          "Station to outstation destinations such as Ayodhya, Varanasi, Lucknow and Nepal",
        ],
      },
      {
        heading: "Tips for a Smooth Pickup",
        paragraphs: [
          "Trains can run late, so tell us your train name or number and we will keep the pickup flexible. Share your phone number on the call or WhatsApp so the driver can reach you at the station.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I book a cab from Gorakhpur Railway Station?",
        answer:
          "Yes. Send your arrival time and destination and we will confirm the cab.",
      },
      {
        question: "What if my train is delayed?",
        answer:
          "Share your train details when you book. We will plan around the schedule, and you can update us by phone if the train runs late.",
      },
      {
        question: "Do you provide outstation trips from the station?",
        answer:
          "Yes. You can go straight from the station to Ayodhya, Varanasi, Lucknow, Nepal and other destinations.",
      },
    ],
    related: [
      "gorakhpur-airport-taxi",
      "taxi-service-in-gorakhpur",
      "outstation-taxi-service-gorakhpur",
    ],
  },

  {
    slug: "gorakhpur-to-lucknow-taxi",
    linkLabel: "Gorakhpur to Lucknow Taxi",
    title: "Gorakhpur to Lucknow Taxi | Outstation Cab Booking",
    description:
      "Book Gorakhpur to Lucknow taxi for business, family or airport travel. One-way and round-trip cab by call or WhatsApp from Car Cab Booking.",
    keywords:
      "Gorakhpur to Lucknow taxi, Gorakhpur to Lucknow cab, Gorakhpur to Lucknow cab booking, Lucknow taxi from Gorakhpur",
    h1: "Gorakhpur to Lucknow Taxi",
    quickAnswer:
      "Car Cab Booking provides one-way and round-trip taxi from Gorakhpur to Lucknow for business, family and airport or railway station travel. Share your date, pickup time and drop point by call or WhatsApp to get the car and fare confirmed.",
    updated: "2026-11-22",
    heroText:
      "One-way and round-trip cab booking from Gorakhpur to Lucknow.",
    intro: [
      "Lucknow is a frequent destination for business trips, medical visits, exams and family travel from Gorakhpur. Car Cab Booking arranges Gorakhpur to Lucknow taxi service with a car that suits your group and luggage.",
      "Share your travel date, pickup time and drop point, and we will confirm the fare.",
    ],
    sections: [
      {
        heading: "Gorakhpur to Lucknow Cab Options",
        paragraphs: [
          "Pick the trip type that fits your plan.",
        ],
        bullets: [
          "One-way drop to Lucknow city, railway station or airport",
          "Round trip with return on a date you choose",
          "Same-day return for meetings and appointments",
          "Pickup from Lucknow back to Gorakhpur",
        ],
      },
      {
        heading: "Choosing a Car for Lucknow",
        paragraphs: [
          "A sedan is comfortable for one to four passengers. For larger groups, hospital visits with attendants or heavy luggage, choose an Ertiga, Carens, Scorpio or Innova.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide one-way taxi from Gorakhpur to Lucknow?",
        answer:
          "Yes. One-way and round-trip bookings are both available. Contact us with your date and car preference.",
      },
      {
        question: "Can I be dropped at Lucknow airport or railway station?",
        answer:
          "Yes. Mention the exact drop point in the booking form and we will plan the trip accordingly.",
      },
      {
        question: "How do I get the fare for Gorakhpur to Lucknow?",
        answer:
          "Call or WhatsApp us with your trip details and we will share the fare before you confirm.",
      },
    ],
    related: [
      "gorakhpur-to-ayodhya-taxi",
      "gorakhpur-to-varanasi-taxi",
      "outstation-taxi-service-gorakhpur",
    ],
  },

  {
    slug: "car-rental-in-gorakhpur",
    linkLabel: "Car Rental in Gorakhpur",
    title: "Car Rental in Gorakhpur | Cab with Driver for Any Trip",
    description:
      "Car rental in Gorakhpur with driver for local, airport and outstation trips. Sedan, Ertiga, Carens, Triber, Scorpio, Innova and Tempo Traveller.",
    keywords:
      "car rental in Gorakhpur, car rental Gorakhpur, rent a car in Gorakhpur, car rental in Gorakhpur with driver, Gorakhpur car rental service, car hire in Gorakhpur, car service in Gorakhpur",
    h1: "Car Rental in Gorakhpur with Driver",
    quickAnswer:
      "Car Cab Booking offers car rental in Gorakhpur with a driver for local use, airport and railway transfers, events and outstation trips. Cars range from a 5 seater Dzire to a 16 seater Tempo Traveller. Share your dates and route to get availability and fare.",
    updated: "2026-11-22",
    heroText:
      "Sedan, SUV, Innova and Tempo Traveller options for local and outstation trips.",
    intro: [
      "Car Cab Booking offers car rental in Gorakhpur with a driver for local use, airport and railway transfers, weddings, family events and outstation journeys. Choose the car that fits your group, then tell us your plan.",
      "All rentals are with a driver. Share your dates, route and number of passengers, and we will confirm the car and fare.",
    ],
    sections: [
      {
        heading: "Cars Available for Rental",
        paragraphs: [
          "Availability depends on your dates, so please confirm when you enquire.",
        ],
        bullets: [
          "Maruti Suzuki Dzire (5 seater)",
          "Maruti Suzuki Ertiga, Kia Carens and Renault Triber (7 seater)",
          "Mahindra Scorpio (6 seater)",
          "Toyota Innova (7 seater)",
          "Luxury Tempo Traveller (16 seater)",
        ],
      },
      {
        heading: "Rental Options",
        paragraphs: [
          "You can rent for a few hours in Gorakhpur, a full day, or a multi-day outstation trip. Tell us which one you need and ask how the charges work for your plan, including toll, parking and driver allowance.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is car rental in Gorakhpur with driver available?",
        answer:
          "Yes. Cars are provided with a driver. Contact us with your dates and route to confirm availability and fare.",
      },
      {
        question: "Can I rent a car for a wedding or family event?",
        answer:
          "Yes. Share the date, timings and number of cars you need and we will confirm what is available.",
      },
      {
        question: "Which car should I rent for a big group?",
        answer:
          "For up to seven passengers, an Ertiga, Carens, Triber or Innova works well. For larger groups, ask about the Tempo Traveller.",
      },
    ],
    related: [
      "taxi-service-in-gorakhpur",
      "outstation-taxi-service-gorakhpur",
      "gorakhpur-airport-taxi",
    ],
  },

  {
    slug: "online-cab-booking-gorakhpur",
    linkLabel: "Online Cab Booking in Gorakhpur",
    title: "Online Cab Booking in Gorakhpur | Book Car & Taxi 24/7",
    description:
      "Online cab booking in Gorakhpur by call or WhatsApp. Book a cab for a day, local car booking or outstation taxi with Car Cab Booking.",
    keywords:
      "online cab booking in Gorakhpur, cab booking Gorakhpur, Gorakhpur cab booking, car booking in Gorakhpur, car booking Gorakhpur, Gorakhpur car booking, car cab booking Gorakhpur, car cab booking, cab booking, car booking, booking car, how to book a cab, book a cab for a day, gadi booking, vehicle booking, taxi booking near me, Gorakhpur taxi service online, 24/7 taxi",
    h1: "Online Cab Booking in Gorakhpur",
    quickAnswer:
      "You can book a cab in Gorakhpur with Car Cab Booking by calling +91 8810990496 or sending your pickup point, destination, date, time and passenger count on WhatsApp. Booking support is available 24/7, and the car and fare are confirmed with you before the trip.",
    updated: "2026-11-22",
    heroText:
      "Book a car or cab in Gorakhpur by call or WhatsApp for local, airport, railway station and outstation trips.",
    intro: [
      "Car Cab Booking makes cab booking in Gorakhpur simple. You can book a car online by sending your trip details on WhatsApp or by calling us, and we confirm the vehicle, pickup time and fare with you.",
      "Whether you need a quick local ride, a cab for a full day or an outstation trip, this page explains how to book and what to share.",
    ],
    sections: [
      {
        heading: "How to Book a Cab in Gorakhpur",
        paragraphs: [
          "Booking a cab takes only a few minutes. Follow these steps.",
        ],
        bullets: [
          "Call or WhatsApp Car Cab Booking",
          "Share your pickup location and destination",
          "Tell us the travel date, pickup time and number of passengers",
          "Choose the car you prefer, such as sedan, SUV, Innova or Tempo Traveller",
          "Confirm the fare and booking details with us",
        ],
      },
      {
        heading: "Book a Cab for a Day in Gorakhpur",
        paragraphs: [
          "Need a car for several stops, a wedding, hospital visits or local sightseeing? You can book a cab for a day and use it for multiple places in Gorakhpur. Tell us your timings and we will confirm the details.",
        ],
      },
      {
        heading: "Car Booking, Gadi Booking and Vehicle Booking",
        paragraphs: [
          "People use many names for the same service: car booking, taxi booking, vehicle booking or gadi booking. Whatever you call it, you can book the car you need for local travel, airport and railway station transfers or outstation journeys from Gorakhpur.",
        ],
      },
      {
        heading: "Available 24/7",
        paragraphs: [
          "Booking support is available day and night. For early-morning or late-night trips, contact us in advance so we can confirm vehicle availability.",
        ],
      },
    ],
    hindi:
      "गोरखपुर में गाड़ी बुकिंग और कैब बुकिंग के लिए कॉल या WhatsApp करें। अपनी लोकेशन, तारीख, समय और यात्रियों की संख्या बताएं, हम गाड़ी और किराया कन्फर्म करेंगे।",
    faqs: [
      {
        question: "Can I book a cab online in Gorakhpur?",
        answer:
          "Yes. You can send your trip details on WhatsApp or call us, and we will confirm the cab and fare.",
      },
      {
        question: "How do I book a cab for a day?",
        answer:
          "Share your date, start time, places you want to visit and number of passengers. We will confirm the car and charges for the day.",
      },
      {
        question: "Can I book a taxi near me in Gorakhpur?",
        answer:
          "Yes. Send your pickup location and we will confirm availability and pickup time.",
      },
      {
        question: "Do you provide car booking for outstation trips?",
        answer:
          "Yes. One-way and round-trip cars are available for Ayodhya, Varanasi, Lucknow, Nepal, Pokhara and other routes.",
      },
    ],
    related: [
      "taxi-service-in-gorakhpur",
      "outstation-taxi-service-gorakhpur",
      "car-rental-in-gorakhpur",
      "gorakhpur-airport-taxi",
    ],
  },

  {
    slug: "tour-and-travels-gorakhpur",
    linkLabel: "Tour and Travels Taxi in Gorakhpur",
    title: "Tour & Travels Taxi Service in Gorakhpur | Tourist Car Booking",
    description:
      "Tour and travels taxi service in Gorakhpur: tourist car booking, cab hire and trip cars for Nepal, Ayodhya, Varanasi and more. Call or WhatsApp.",
    keywords:
      "tour and travels taxi service, tour and travels Gorakhpur, tourist car booking, trip travel agency near me, travel car booking, travel car booking near me, travel booking car, car travels, car travel, cab hire, cab car, cab cars, cab taxi, taxi car booking, Gorakhpur to Nepal tour package",
    h1: "Tour and Travels Taxi Service in Gorakhpur",
    quickAnswer:
      "Car Cab Booking provides tourist car booking and cab hire with a driver from Gorakhpur for family trips, pilgrimages and Nepal tours. Tell us your destinations, dates and group size by call or WhatsApp, and we suggest a suitable car and confirm the fare.",
    updated: "2026-11-22",
    heroText:
      "Tourist car booking and cab hire for family trips, pilgrimages and Nepal tours from Gorakhpur.",
    intro: [
      "Car Cab Booking provides tour and travels taxi service from Gorakhpur for tourists, pilgrims and families. If you are looking for a travel car for a trip, you can book a cab with a driver and plan the route with us.",
      "Tell us where you want to go and for how many days, and we will suggest a suitable car and confirm the fare.",
    ],
    sections: [
      {
        heading: "Tourist Car Booking from Gorakhpur",
        paragraphs: [
          "Choose a car for sightseeing, pilgrimage or a holiday. We can plan one-way, round-trip and multi-day journeys.",
        ],
        bullets: [
          "Nepal trips through Sonauli, including Pokhara and Kathmandu",
          "Pilgrimage trips to Ayodhya, Varanasi, Prayagraj and Vindhyachal",
          "Hill station trips to Nainital, Mussoorie and Shimla",
          "Heritage tours to Agra, Jaipur and Delhi",
        ],
      },
      {
        heading: "Cab Hire for Family and Group Travel",
        paragraphs: [
          "Cab hire with a driver is a comfortable option for families and groups. Choose a sedan for a small family, an Ertiga, Carens, Triber, Scorpio or Innova for larger groups, or a Tempo Traveller for big groups.",
        ],
      },
      {
        heading: "Planning Your Trip",
        paragraphs: [
          "Share your travel dates, number of passengers and places you want to visit. Ask us about toll, parking and driver allowance so you know what applies to your trip before you confirm.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide tourist car booking from Gorakhpur?",
        answer:
          "Yes. You can book a car with a driver for sightseeing, pilgrimage or holiday trips from Gorakhpur.",
      },
      {
        question: "Can I book a car for a Nepal tour?",
        answer:
          "Yes. Contact us with your Nepal destination and dates and we will confirm the car and fare.",
      },
      {
        question: "Can I hire a cab for several days?",
        answer:
          "Yes. Multi-day cab hire is available. Share your plan and we will confirm the details.",
      },
    ],
    related: [
      "gorakhpur-to-nepal-taxi",
      "outstation-taxi-service-gorakhpur",
      "car-rental-in-gorakhpur",
      "taxi-service-in-gorakhpur",
    ],
  },
];

export const landingPageBySlug: Record<string, LandingPage> =
  Object.fromEntries(landingPages.map((page) => [page.slug, page]));

export const landingPagePath = (slug: string) => `/${slug}`;

// ---------------------------------------------------------------------
// Facts used by the "At a glance" box (and the static HTML snapshot).
// Only confirmed facts that are already on the website belong here.
// ---------------------------------------------------------------------
export const BUSINESS_FACTS = {
  phones: ["+91 8810990496", "+91 7084183421"],
  location: "Gorakhpur, Uttar Pradesh",
};

export function getKeyFacts(page: LandingPage) {
  return [
    { label: "Service", value: page.linkLabel },
    { label: "Based in", value: BUSINESS_FACTS.location },
    {
      label: "How to book",
      value: `Call ${BUSINESS_FACTS.phones.join(" or ")}, or WhatsApp your trip details`,
    },
    { label: "Booking support", value: "24/7" },
    { label: "Fare", value: "Confirmed with you before the trip" },
  ];
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatUpdated(iso: string) {
  const [year, month, day] = iso.split("-");
  const monthName = MONTHS[Number(month) - 1];
  return monthName && day && year
    ? `${Number(day)} ${monthName} ${year}`
    : iso;
}
