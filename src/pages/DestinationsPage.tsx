import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";

import {
  destinations as existingDestinations,
} from "@/data/travelData";

import { ImageWithFallback } from "@/components/common/ImageWithFallback";

/* =========================================================
   LOCAL DESTINATION IMAGES
   ========================================================= */

import PrayagrajImg from "@/assets/destinations/prayagraj.jpg";
import AgraImg from "@/assets/destinations/agra.jpg";
import MathuraVrindavanImg from "@/assets/destinations/mathura-vrindavan.jpg";
import DelhiImg from "@/assets/destinations/delhi.jpg";
import LucknowImg from "@/assets/destinations/lucknow.jpg";
import HaridwarImg from "@/assets/destinations/haridwar.jpg";
import RishikeshImg from "@/assets/destinations/rishikesh.jpg";
import NainitalImg from "@/assets/destinations/nainital.jpg";
import JimCorbettImg from "@/assets/destinations/jim-corbett.jpg";
import JaipurImg from "@/assets/destinations/jaipur.jpg";
import UdaipurImg from "@/assets/destinations/udaipur.jpg";
import JaisalmerImg from "@/assets/destinations/jaisalmer.jpg";
import ShimlaImg from "@/assets/destinations/shimla.jpg";
import MussoorieImg from "@/assets/destinations/mussoorie.jpg";
import AmritsarImg from "@/assets/destinations/amritsar.jpg";
import ChitrakootImg from "@/assets/destinations/chitrakoot.jpg";
import VindhyachalImg from "@/assets/destinations/vindhyachal.jpg";

/* =========================================================
   ADDITIONAL POPULAR DESTINATIONS
   ========================================================= */

const additionalDestinations = [
  {
    id: 101,
    name: "Prayagraj",
    location: "Uttar Pradesh",
    price: "",
    duration: "",
    image: PrayagrajImg,
    country: "India",
    budget: "budget",
    description:
      "Popular pilgrimage destination known for Triveni Sangam.",
  },
  {
    id: 102,
    name: "Agra",
    location: "Uttar Pradesh",
    price: "",
    duration: "",
    image: AgraImg,
    country: "India",
    budget: "luxury",
    description:
      "Visit the Taj Mahal and other famous heritage attractions.",
  },
  {
    id: 103,
    name: "Mathura & Vrindavan",
    location: "Uttar Pradesh",
    price: "",
    duration: "",
    image: MathuraVrindavanImg,
    country: "India",
    budget: "medium",
    description:
      "Popular Krishna pilgrimage destination for families and devotees.",
  },
  {
    id: 104,
    name: "Delhi",
    location: "Delhi",
    price: "",
    duration: "",
    image: DelhiImg,
    country: "India",
    budget: "luxury",
    description:
      "Explore India Gate, Red Fort, markets and major city attractions.",
  },
  {
    id: 105,
    name: "Lucknow",
    location: "Uttar Pradesh",
    price: "",
    duration: "",
    image: LucknowImg,
    country: "India",
    budget: "medium",
    description:
      "Popular city destination for business, family and leisure travel.",
  },
  {
    id: 106,
    name: "Haridwar",
    location: "Uttarakhand",
    price: "",
    duration: "",
    image: HaridwarImg,
    country: "India",
    budget: "medium",
    description:
      "Pilgrimage destination famous for Har Ki Pauri and Ganga Aarti.",
  },
  {
    id: 107,
    name: "Rishikesh",
    location: "Uttarakhand",
    price: "",
    duration: "",
    image: RishikeshImg,
    country: "India",
    budget: "medium",
    description:
      "Popular for temples, yoga, river views and adventure tourism.",
  },
  {
    id: 108,
    name: "Nainital",
    location: "Uttarakhand",
    price: "",
    duration: "",
    image: NainitalImg,
    country: "India",
    budget: "luxury",
    description:
      "Beautiful hill station famous for lakes and mountain scenery.",
  },
  {
    id: 109,
    name: "Jim Corbett",
    location: "Uttarakhand",
    price: "",
    duration: "",
    image: JimCorbettImg,
    country: "India",
    budget: "luxury",
    description:
      "Popular wildlife destination for jungle safari and family holidays.",
  },
  {
    id: 110,
    name: "Jaipur",
    location: "Rajasthan",
    price: "",
    duration: "",
    image: JaipurImg,
    country: "India",
    budget: "luxury",
    description:
      "Explore forts, palaces and the heritage of Rajasthan's Pink City.",
  },
  {
    id: 111,
    name: "Udaipur",
    location: "Rajasthan",
    price: "",
    duration: "",
    image: UdaipurImg,
    country: "India",
    budget: "luxury",
    description:
      "Beautiful Rajasthan destination famous for lakes and royal palaces.",
  },
  {
    id: 112,
    name: "Jaisalmer",
    location: "Rajasthan",
    price: "",
    duration: "",
    image: JaisalmerImg,
    country: "India",
    budget: "luxury",
    description:
      "Experience desert tourism, forts and Rajasthan culture.",
  },
  {
    id: 113,
    name: "Shimla",
    location: "Himachal Pradesh",
    price: "",
    duration: "",
    image: ShimlaImg,
    country: "India",
    budget: "luxury",
    description:
      "Popular hill station for family vacations and mountain holidays.",
  },
  {
    id: 114,
    name: "Mussoorie",
    location: "Uttarakhand",
    price: "",
    duration: "",
    image: MussoorieImg,
    country: "India",
    budget: "medium",
    description:
      "Beautiful hill destination known for mountain views and pleasant weather.",
  },
  {
    id: 115,
    name: "Amritsar",
    location: "Punjab",
    price: "",
    duration: "",
    image: AmritsarImg,
    country: "India",
    budget: "medium",
    description:
      "Visit the Golden Temple and other famous attractions in Punjab.",
  },
  {
    id: 116,
    name: "Chitrakoot",
    location: "Uttar Pradesh",
    price: "",
    duration: "",
    image: ChitrakootImg,
    country: "India",
    budget: "budget",
    description:
      "Important religious destination for pilgrimage and family trips.",
  },
  {
    id: 117,
    name: "Vindhyachal",
    location: "Uttar Pradesh",
    price: "",
    duration: "",
    image: VindhyachalImg,
    country: "India",
    budget: "budget",
    description:
      "Popular temple destination for pilgrimage travel from Gorakhpur.",
  },
];

/*
 * Existing travelData.ts records use destination names inside the
 * country field. Normalize them so the country filter remains clean.
 */
const normalizedExistingDestinations = existingDestinations.map(
  (destination) => ({
    ...destination,
    country:
      destination.location.toLowerCase() === "nepal"
        ? "Nepal"
        : "India",
  }),
);

const allDestinations = [
  ...normalizedExistingDestinations,
  ...additionalDestinations,
];

/* =========================================================
   ANIMATION COMPONENT
   ========================================================= */

const FadeInWhenVisible = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 }
      }
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   DESTINATIONS PAGE
   ========================================================= */

export function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const countries = [
    "all",
    ...Array.from(
      new Set(
        allDestinations.map(
          (destination) => destination.country,
        ),
      ),
    ),
  ];

  const budgets = ["all", "budget", "medium", "luxury"];

  const filteredDestinations = allDestinations.filter(
    (destination) => {
      const search = searchTerm.trim().toLowerCase();

      const matchesSearch =
        destination.name.toLowerCase().includes(search) ||
        destination.location.toLowerCase().includes(search) ||
        destination.country.toLowerCase().includes(search) ||
        destination.description.toLowerCase().includes(search);

      const matchesCountry =
        selectedCountry === "all" ||
        destination.country === selectedCountry;

      const matchesBudget =
        selectedBudget === "all" ||
        destination.budget === selectedBudget;

      return matchesSearch && matchesCountry && matchesBudget;
    },
  );

  return (
    <div className="min-h-screen pt-20">
      {/* HERO SECTION */}
      <section className="relative flex h-80 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={NainitalImg}
            alt="Popular cab destinations from Gorakhpur"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-bold md:text-6xl"
          >
            Popular Cab Destinations from Gorakhpur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-4xl text-lg md:text-xl"
          >
            Explore religious places, hill stations, heritage cities,
            family holiday destinations and Nepal tour routes
          </motion.p>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Outstation Cab Routes from Gorakhpur
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Book comfortable cabs from Gorakhpur to Nepal, Pokhara,
              Banaras, Ayodhya, Prayagraj, Agra, Mathura, Vrindavan,
              Delhi, Lucknow, Haridwar, Rishikesh, Nainital, Jaipur and
              many other popular destinations.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Choose one-way or round-trip cab booking for pilgrimage
              journeys, family holidays, sightseeing tours and
              long-distance travel. We provide flexible pickup options
              and 24/7 booking support from Gorakhpur.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTERS */}
      <section className="sticky top-20 z-40 bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations, states or cab routes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-gray-300 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>

            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-white md:hidden"
            >
              <SlidersHorizontal className="h-5 w-5" />
              Filters
            </button>

            <div className="hidden gap-4 md:flex">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="rounded-full border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country === "all" ? "All Countries" : country}
                  </option>
                ))}
              </select>

              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="rounded-full border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
              >
                {budgets.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget === "all"
                      ? "All Budgets"
                      : budget.charAt(0).toUpperCase() + budget.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 flex flex-col gap-3 md:hidden"
            >
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country === "all" ? "All Countries" : country}
                  </option>
                ))}
              </select>

              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
              >
                {budgets.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget === "all"
                      ? "All Budgets"
                      : budget.charAt(0).toUpperCase() + budget.slice(1)}
                  </option>
                ))}
              </select>
            </motion.div>
          )}
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="border-b border-t border-gray-200 bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              Popular Cab Routes from Gorakhpur
            </h2>

            <div className="grid grid-cols-1 gap-x-12 gap-y-4 text-left text-gray-600 sm:grid-cols-2">
              <p>Gorakhpur to Nepal cab service for comfortable cross-border travel.</p>
              <p>Gorakhpur to Pokhara one-way and round-trip taxi booking.</p>
              <p>Gorakhpur to Banaras / Varanasi pilgrimage cab service.</p>
              <p>Gorakhpur to Ayodhya cab for temple and family tours.</p>
              <p>Gorakhpur to Prayagraj outstation taxi booking.</p>
              <p>Gorakhpur to Mathura & Vrindavan cab booking.</p>
              <p>Gorakhpur to Agra and Delhi cab service.</p>
              <p>Gorakhpur to Haridwar & Rishikesh tour cab.</p>
              <p>Gorakhpur to Nainital and Jim Corbett cab booking.</p>
              <p>Gorakhpur to Jaipur, Udaipur and Rajasthan tour cab.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS GRID */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filteredDestinations.length}
              </span>{" "}
              cab destinations
            </p>

            <p className="text-sm text-gray-500">
              India & Nepal Tour Routes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((destination, index) => (
              <FadeInWhenVisible
                key={`${destination.id}-${destination.name}`}
                delay={Math.min(index, 8) * 0.05}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-72 overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={destination.image}
                      alt={`${destination.name} cab booking from Gorakhpur`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute right-4 top-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                          destination.budget === "luxury"
                            ? "bg-yellow-500"
                            : destination.budget === "medium"
                              ? "bg-blue-500"
                              : "bg-green-500"
                        }`}
                      >
                        {destination.budget.charAt(0).toUpperCase() +
                          destination.budget.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                      {destination.name}
                    </h3>

                    <div className="mb-4 flex items-center gap-1 text-gray-600">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span className="text-sm">
                        {destination.location}
                      </span>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <p className="line-clamp-2 text-sm leading-relaxed text-gray-500">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-gray-500">
                No cab destinations found matching your search.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCountry("all");
                  setSelectedBudget("all");
                }}
                className="mt-4 rounded-full bg-sky-600 px-6 py-2 text-white transition-colors hover:bg-sky-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
