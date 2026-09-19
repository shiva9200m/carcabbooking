import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Clock, Globe } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const guideCards = [
  {
    title: "Book a Gorakhpur Taxi Quickly",
    description:
      "Learn how to reserve a local cab, airport transfer or outstation ride with simple steps and fast confirmation.",
    icon: Clock,
    link: "/guides#how-to-book",
  },
  {
    title: "Best Routes from Gorakhpur",
    description:
      "Explore the most popular routes from Gorakhpur to Nepal, Banaras, Ayodhya and Kushinagar.",
    icon: Globe,
    link: "/guides#popular-routes",
  },
  {
    title: "Local Taxi Safety Tips",
    description:
      "Find practical advice for comfortable travel, reliable drivers, clean cars and safe pickup points.",
    icon: CheckCircle,
    link: "/guides#safety-tips",
  },
];

export function GuidesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBpbmRpYSUyMGNhYiUyMHBhdGh8ZW58MXx8fHwxNzY4Mzg2MzI3fDA&ixlib=rb-4.1.0&q=80&w=900"
            alt="Gorakhpur taxi guide and travel tips"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Gorakhpur Taxi Guide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Useful travel tips, route advice and booking guidance for local and
            outstation taxi service from Gorakhpur.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Make Your Cab Travel from Gorakhpur Easier
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This guide page helps travelers book the right cab, choose the
              best route, and enjoy safe service across Gorakhpur and nearby
              destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guideCards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all bg-sky-50"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-white flex items-center justify-center text-sky-600 shadow">
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6">{card.description}</p>
                <Link
                  to={card.link}
                  className="inline-flex items-center gap-2 text-sky-700 font-semibold"
                >
                  Read guide
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-to-book" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Book a Taxi from Gorakhpur
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To book a taxi from Gorakhpur, choose your route, select a car
              type and contact us by phone or the booking form. We offer local
              city rides, airport and railway transfers, and outstation
              packages.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Step 1:</strong> Select your pickup location in Gorakhpur.
              </li>
              <li>
                <strong>Step 2:</strong> Choose a destination like Nepal,
                Banaras, Ayodhya or Kushinagar.
              </li>
              <li>
                <strong>Step 3:</strong> Pick the right vehicle type for your
                group: sedan, SUV, Innova or traveller.
              </li>
              <li>
                <strong>Step 4:</strong> Confirm your travel date, passenger
                count and cab type using the contact form.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="popular-routes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Routes from Gorakhpur
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Travelers often choose routes with the best comfort, timing and
              value. We serve the most requested outstation corridors from
              Gorakhpur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-gray-200 p-6 shadow-sm bg-sky-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Gorakhpur to Nepal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cross-border travel with trusted routes to Sonauli and Nepal.
                  Ideal for families, pilgrim groups and international tourists.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-200 p-6 shadow-sm bg-sky-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Gorakhpur to Banaras & Ayodhya</h3>
                <p className="text-gray-700 leading-relaxed">
                  Comfortable religious and tourist travel for Varanasi, Banaras,
                  Ayodhya and nearby pilgrimage destinations.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-200 p-6 shadow-sm bg-sky-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Airport & Railway Pickup</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reliable pickup and drop services for Gorakhpur Airport and
                  Gorakhpur Railway Station with timely arrival.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-200 p-6 shadow-sm bg-sky-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Kushinagar & Lucknow</h3>
                <p className="text-gray-700 leading-relaxed">
                  Long-distance cabs for Kushinagar, Lucknow and nearby Uttar
                  Pradesh destinations with safe and comfortable travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="safety-tips" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Taxi Safety & Comfort Tips</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Follow these simple tips to ensure a smooth and safe cab experience.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Confirm the pickup address and phone number before departure.</li>
              <li>Choose the right vehicle size for luggage and passengers.</li>
              <li>Keep a copy of your booking details and driver information.</li>
              <li>Ask for local route suggestions if you want sightseeing or faster travel.</li>
              <li>Use our 24/7 support line for any changes or immediate assistance.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Book Your Gorakhpur Cab?</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Choose a guide above, then contact us to confirm your route and
              travel date. We support local taxi service, car rental, airport
              pickup, railway transfer and outstation cab bookings.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-4 text-white font-semibold hover:bg-sky-700 transition"
            >
              Contact Us for Booking
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
