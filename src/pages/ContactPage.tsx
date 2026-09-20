import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  ExternalLink,
  Clock,
  Car,
  Plane,
  Train,
} from "lucide-react";

import { ImageWithFallback } from "@/components/common/ImageWithFallback";

const GOOGLE_BUSINESS_URL =
  "https://share.google/0RjH4DRUBhenK3tYv";

const PRIMARY_PHONE = "+918810990496";
const SECONDARY_PHONE = "+917084183421";
const EMAIL = "ajaysingh80098@gmail.com";

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
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 30,
            }
      }
      transition={{
        duration: 0.5,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    date: "",
    guests: "2",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      "Hi Car Cab Booking,",
      "",
      "I want to book a cab.",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Destination: ${formData.destination}`,
      `Travel Date: ${formData.date}`,
      `Passengers: ${formData.guests}`,
      `Trip Details: ${formData.message || "Not provided"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${PRIMARY_PHONE.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call for Cab Booking",
      details: [
        {
          label: "+91 8810990496",
          href: "tel:+918810990496",
        },
        {
          label: "+91 7084183421",
          href: "tel:+917084183421",
        },
      ],
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        {
          label: EMAIL,
          href: `mailto:${EMAIL}`,
        },
      ],
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: [
        {
          label: "Gorakhpur, Uttar Pradesh, India",
          href: GOOGLE_BUSINESS_URL,
        },
      ],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const services = [
    {
      icon: Car,
      title: "Local Taxi in Gorakhpur",
      description:
        "Book local cab service for Mohaddipur, Golghar, Taramandal, Rapti Nagar, Gorakhnath, Medical College and nearby areas.",
    },
    {
      icon: Plane,
      title: "Gorakhpur Airport Taxi",
      description:
        "Book airport pickup and drop service for Gorakhpur Airport with local and onward cab options.",
    },
    {
      icon: Train,
      title: "Gorakhpur Railway Station Taxi",
      description:
        "Book pickup or drop at Gorakhpur Railway Station for local travel or outstation journeys.",
    },
    {
      icon: MapPin,
      title: "Gorakhpur Sightseeing Cab",
      description:
        "Book sightseeing taxi for Gorakhnath Temple, Ramgarh Tal, Nauka Vihar, Gita Press and other local attractions.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}

      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixlib=rb-4.1.0&q=80&w=900"
            alt="Contact Car Cab Booking for taxi service in Gorakhpur"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Contact Car Cab Booking Gorakhpur
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            Call or WhatsApp us 24/7 for local taxi in
            Gorakhpur, airport pickup, railway station taxi,
            one-way cab and outstation cab booking.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <FadeInWhenVisible
                key={info.title}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all h-full"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {info.title}
                  </h2>

                  <div className="space-y-2">
                    {info.details.map((detail) => (
                      <a
                        key={detail.label}
                        href={detail.href}
                        target={
                          detail.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          detail.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block text-gray-600 hover:text-sky-700 transition break-words"
                      >
                        {detail.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}

      <section className="pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-4 text-white font-semibold hover:bg-sky-700 transition"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>

            <a
              href={`https://wa.me/${PRIMARY_PHONE.replace(
                "+",
                ""
              )}?text=${encodeURIComponent(
                "Hi Car Cab Booking, I want to book a cab from Gorakhpur."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-4 text-white font-semibold hover:bg-green-700 transition"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Booking
            </a>

            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-600 bg-white px-7 py-4 text-sky-700 font-semibold hover:bg-sky-50 transition"
            >
              <MapPin className="w-5 h-5" />
              View on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* LOCAL SERVICES */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Taxi & Cab Services in Gorakhpur
            </h2>

            <p className="mt-4 text-gray-600">
              Contact us for local taxi service, airport taxi,
              railway station pickup, sightseeing and
              outstation cab booking in Gorakhpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <FadeInWhenVisible
                key={service.title}
                delay={index * 0.1}
              >
                <div className="rounded-2xl bg-slate-50 p-6 text-center shadow-sm ring-1 ring-slate-200 h-full">
                  <service.icon className="w-10 h-10 mx-auto text-sky-600 mb-4" />

                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM + MAP */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <FadeInWhenVisible>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Book a Cab from Gorakhpur
                </h2>

                <p className="text-gray-600 mb-8">
                  Enter your trip details below. You can book
                  local taxi, airport pickup, railway station
                  taxi, one-way cab or outstation travel.
                  On submit, WhatsApp will open with your
                  booking details.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="destination"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Destination *
                    </label>

                    <select
                      id="destination"
                      name="destination"
                      required
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
                    >
                      <option value="">
                        Select a destination
                      </option>

                      <option value="Local Gorakhpur">
                        Local Gorakhpur
                      </option>

                      <option value="Gorakhpur Airport">
                        Gorakhpur Airport
                      </option>

                      <option value="Gorakhpur Railway Station">
                        Gorakhpur Railway Station
                      </option>

                      <option value="Gorakhnath Temple">
                        Gorakhnath Temple
                      </option>

                      <option value="Ramgarh Tal">
                        Ramgarh Tal / Nauka Vihar
                      </option>

                      <option value="Ayodhya">
                        Ayodhya
                      </option>

                      <option value="Varanasi">
                        Varanasi / Banaras
                      </option>

                      <option value="Kushinagar">
                        Kushinagar
                      </option>

                      <option value="Lucknow">
                        Lucknow
                      </option>

                      <option value="Sonauli">
                        Sonauli
                      </option>

                      <option value="Nepal">
                        Nepal
                      </option>

                      <option value="Pokhara">
                        Pokhara
                      </option>

                      <option value="Other">
                        Other Destination
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Travel Date *
                      </label>

                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="guests"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Passengers
                      </label>

                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
                      >
                        <option value="1">1 Passenger</option>
                        <option value="2">2 Passengers</option>
                        <option value="3">3 Passengers</option>
                        <option value="4">4 Passengers</option>
                        <option value="5+">5+ Passengers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Trip Details
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 resize-none"
                      placeholder="Pickup location, drop location, preferred vehicle or other details"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Continue Booking on WhatsApp
                  </motion.button>
                </form>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="lg:sticky lg:top-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Car Cab Booking in Gorakhpur
                </h2>

                <p className="text-gray-600 mb-6">
                  Serving Gorakhpur for local taxi service,
                  Gorakhpur Airport taxi, railway station pickup,
                  sightseeing, one-way cab and outstation travel.
                </p>

                <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps?q=Gorakhpur,Uttar+Pradesh,India&output=embed"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Car Cab Booking service area in Gorakhpur"
                  />
                </div>

                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700"
                >
                  <MapPin className="h-5 w-5" />
                  View Google Business Profile
                  <ExternalLink className="h-4 w-4" />
                </a>

                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-sky-700" />

                    <h3 className="text-xl font-bold text-gray-900">
                      Cab Booking Hours
                    </h3>
                  </div>

                  <div className="flex justify-between gap-4 text-gray-700">
                    <span>Monday - Sunday</span>

                    <span className="font-semibold text-green-700">
                      Open 24 Hours
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-gray-600">
                    Call or WhatsApp for booking availability,
                    route information and pickup confirmation.
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* LOCAL COVERAGE */}

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Local Cab Coverage in Gorakhpur
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Local taxi booking is available for Mohaddipur,
              Golghar, Taramandal, Rapti Nagar, Medical College,
              Gorakhnath, Sahjanwa, Pipraich, Chauri Chaura and
              nearby Gorakhpur areas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Gorakhpur Cab Booking Questions
            </h2>

            <div className="space-y-6 text-gray-700">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">
                  Do you provide local taxi in Gorakhpur?
                </h3>

                <p className="mt-2 leading-relaxed">
                  Yes. Local taxi service is available for city
                  travel, sightseeing and nearby areas including
                  Mohaddipur, Golghar, Taramandal, Rapti Nagar
                  and Gorakhnath.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">
                  Do you provide Gorakhpur Airport taxi?
                </h3>

                <p className="mt-2 leading-relaxed">
                  Yes. You can book Gorakhpur Airport pickup and
                  drop service for local travel and onward
                  journeys.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">
                  Can I book a cab from Gorakhpur Railway Station?
                </h3>

                <p className="mt-2 leading-relaxed">
                  Yes. Gorakhpur Railway Station taxi pickup and
                  drop service is available for city travel and
                  outstation trips.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">
                  Can I book Gorakhpur to Ayodhya cab?
                </h3>

                <p className="mt-2 leading-relaxed">
                  Yes. You can contact us for Gorakhpur to
                  Ayodhya cab booking for one-way or round-trip
                  travel.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">
                  Can I book Gorakhpur to Varanasi taxi?
                </h3>

                <p className="mt-2 leading-relaxed">
                  Yes. Outstation taxi booking is available from
                  Gorakhpur to Varanasi or Banaras based on your
                  trip requirements.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">
                  Which other outstation cab routes are available?
                </h3>

                <p className="mt-2 leading-relaxed">
                  Popular routes include Gorakhpur to Kushinagar,
                  Lucknow, Sonauli, Nepal, Pokhara, Ayodhya and
                  Varanasi.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">
                  Do you provide one-way and round-trip cab booking?
                </h3>

                <p className="mt-2 leading-relaxed">
                  Yes. You can request one-way or round-trip cab
                  booking depending on your route and travel plan.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">
                  Is cab booking available 24 hours?
                </h3>

                <p className="mt-2 leading-relaxed">
                  Booking support is available 24/7. Call or
                  WhatsApp us to confirm vehicle availability,
                  route and pickup time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}