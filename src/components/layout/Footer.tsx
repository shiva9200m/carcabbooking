import { Link } from "react-router-dom";
import {
  Car,
  Mail,
  Phone,
  MapPin,
  Instagram,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

const GOOGLE_BUSINESS_URL =
  "https://share.google/0RjH4DRUBhenK3tYv";

const PRIMARY_PHONE = "+918810990496";
const EMAIL = "ajaysingh80098@gmail.com";

export function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Travel Guide", path: "/guides" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    {
      name: "Local Taxi in Gorakhpur",
      path: "/destinations",
    },
    {
      name: "Outstation Cab from Gorakhpur",
      path: "/destinations",
    },
    {
      name: "Airport Pickup",
      path: "/contact",
    },
    {
      name: "Railway Station Pickup",
      path: "/contact",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-8 h-8 text-sky-400" />

              <span className="text-2xl font-bold text-white">
                Car Cab Booking
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-5">
              Reliable cab booking and taxi service in
              Gorakhpur for local rides, airport pickup,
              railway station pickup, sightseeing and
              outstation travel.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/ajaysingh.650525?igsh=MW53OGgzc2c3ZWRwbw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Car Cab Booking on Instagram"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-sky-600 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Car Cab Booking Google Business Profile"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-sky-600 flex items-center justify-center transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Cab Services
            </h2>

            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-sm mt-4 leading-relaxed text-gray-400">
              Popular routes include Gorakhpur to Ayodhya,
              Varanasi, Kushinagar, Lucknow, Nepal and Pokhara.
            </p>
          </div>

          {/* Contact */}

          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact Car Cab Booking
            </h2>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />

                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition"
                >
                  Gorakhpur, Uttar Pradesh, India
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />

                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="hover:text-sky-400 transition"
                >
                  +91 8810990496
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />

                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-sky-400 transition break-all"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`https://wa.me/${PRIMARY_PHONE.replace(
                  "+",
                  ""
                )}?text=${encodeURIComponent(
                  "Hi Car Cab Booking, I want to book a cab from Gorakhpur."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-white font-semibold hover:bg-green-700 transition"
              >
                <MessageCircle className="w-5 h-5" />

                WhatsApp Booking
              </a>

              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-sky-500 px-4 py-3 text-sky-300 font-semibold hover:bg-sky-500/10 transition"
              >
                <MapPin className="w-5 h-5" />

                View on Google

                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Car Cab Booking.
            All rights reserved.
          </p>

          <p className="mt-2 text-gray-400">
            Cab booking and taxi service in Gorakhpur,
            Uttar Pradesh.
          </p>

          <p className="mt-2">
            Powered by{" "}
            <a
              href="https://www.techssetu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              TechsSetu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}