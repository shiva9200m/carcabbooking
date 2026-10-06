import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Shield,
  Clock,
  DollarSign,
  Star,
  MapPin,
  Plane,
  Train,
  Car,
  Send,
} from "lucide-react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  destinations,
  testimonials,
} from "@/data/travelData";

import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { trackEvent } from "@/analytics/GA4";

const PRIMARY_PHONE = "+918810990496";

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
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 50,
            }
      }
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pickupLocation: "",
    destination: "",
    date: "",
    guests: "2",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackEvent("booking_form_submit", {
      passengers: formData.guests || "Not selected",
      page_path: window.location.pathname,
      source: "home_booking_form",
    });

    const whatsappMessage = `Hi Car Cab Booking,

I want to book a cab.

Name: ${formData.name}
Email: ${formData.email}
Pickup Location: ${formData.pickupLocation}
Destination: ${formData.destination}
Travel Date: ${formData.date}
Passengers: ${formData.guests}
Trip Details: ${formData.message || "Not provided"}`;

    const whatsappUrl = `https://wa.me/${PRIMARY_PHONE.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  const features = [
    {
      icon: Globe,
      title: "Gorakhpur Route Coverage",
      description:
        "Local taxi, airport pickup, railway station pickup and outstation cab service from Gorakhpur.",
    },
    {
      icon: Shield,
      title: "Reliable Cab Booking",
      description:
        "Clean vehicles and convenient booking for local, family and outstation travel.",
    },
    {
      icon: Clock,
      title: "24/7 Cab Support",
      description:
        "Cab booking support available day and night for planned and urgent journeys.",
    },
    {
      icon: DollarSign,
      title: "Clear Taxi Pricing",
      description:
        "Easy booking options for local rides, one-way travel and round trips.",
    },
  ];

  const localServices = [
    {
      icon: Car,
      title: "Local Taxi in Gorakhpur",
      description:
        "Book a local cab in Gorakhpur for city travel, shopping, family visits and everyday transportation.",
    },
    {
      icon: Plane,
      title: "Gorakhpur Airport Taxi",
      description:
        "Book airport pickup and drop service for Gorakhpur Airport with convenient cab booking.",
    },
    {
      icon: Train,
      title: "Gorakhpur Railway Station Taxi",
      description:
        "Book pickup or drop at Gorakhpur Railway Station for local and onward journeys.",
    },
    {
      icon: MapPin,
      title: "Gorakhpur Sightseeing Cab",
      description:
        "Book local sightseeing cab service for popular places across Gorakhpur.",
    },
  ];

  const localAreas = [
    "Gorakhnath Temple",
    "Ramgarh Tal",
    "Nauka Vihar",
    "Gita Press",
    "Medical College Gorakhpur",
    "Mohaddipur",
    "Golghar",
    "Taramandal",
    "Rapti Nagar",
    "Sahjanwa",
    "Pipraich",
    "Chauri Chaura",
  ];

  const popularRoutes = [
    "Gorakhpur to Ayodhya Cab",
    "Gorakhpur to Varanasi Cab",
    "Gorakhpur to Kushinagar Cab",
    "Gorakhpur to Lucknow Cab",
    "Gorakhpur to Sonauli Cab",
    "Gorakhpur to Nepal Cab",
    "Gorakhpur to Pokhara Cab",
  ];

  const faqs = [
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
        "Do you provide one-way and round-trip cab booking?",
      answer:
        "Yes. You can contact us for one-way cab and round-trip booking based on your route and travel requirements.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1694786001018-b43efc0a7983?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Cab booking and taxi service in Gorakhpur"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
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
            transition={{
              duration: 0.8,
            }}
            className="text-4xl md:text-6xl font-bold mb-5 leading-tight"
          >
            Cab Booking & Taxi Service in Gorakhpur
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
              duration: 0.8,
              delay: 0.2,
            }}
            className="text-lg md:text-2xl mb-4 max-w-3xl mx-auto text-white/90"
          >
            Local taxi, Gorakhpur Airport pickup,
            railway station taxi and outstation cab
            booking with 24/7 support.
          </motion.p>

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
              duration: 0.8,
              delay: 0.3,
            }}
            className="text-base md:text-lg mt-2 text-white/90 max-w-4xl mx-auto"
          >
            Book Gorakhpur to Ayodhya, Varanasi,
            Kushinagar, Lucknow, Sonauli, Nepal,
            Pokhara and other outstation cab routes.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link to="/packages">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl transition-shadow flex items-center gap-2 mx-auto sm:mx-0"
              >
                View Cab Packages

                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <a href="#booking-form">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold border-2 border-white hover:bg-white/20 transition-all"
              >
                Book a Cab
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FULL BOOKING FORM */}

      <section id="booking-form" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Book Your Cab from Gorakhpur
                </h2>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                  Fill in your complete trip details below. After submission,
                  WhatsApp will open with your booking information ready to send.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-slate-50 p-6 md:p-8 shadow-xl ring-1 ring-slate-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="home-name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>

                    <input
                      type="text"
                      id="home-name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-600"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="home-email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>

                    <input
                      type="email"
                      id="home-email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-600"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="home-pickupLocation"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Pickup Location *
                    </label>

                    <input
                      type="text"
                      id="home-pickupLocation"
                      name="pickupLocation"
                      required
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-600"
                      placeholder="Enter pickup location, e.g. Gorakhpur Railway Station"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="home-destination"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Destination *
                    </label>

                    <input
                      type="text"
                      id="home-destination"
                      name="destination"
                      required
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-600"
                      placeholder="Enter destination, e.g. Nepal, Ayodhya, Varanasi"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="home-date"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Travel Date *
                    </label>

                    <input
                      type="date"
                      id="home-date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="home-guests"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Passengers
                    </label>

                    <select
                      id="home-guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-600"
                    >
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="3">3 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="5+">5+ Passengers</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="home-message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Trip Details
                  </label>

                  <textarea
                    id="home-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 resize-none"
                    placeholder="Preferred vehicle, pickup time, return-trip details or other special requirements"
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
                  className="mt-6 w-full px-6 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Continue Booking on WhatsApp
                </motion.button>

                <p className="mt-4 text-center text-sm text-gray-500">
                  Your booking details will be prepared in WhatsApp. You can review
                  them before sending the message.
                </p>
              </form>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* LOCAL SERVICE INTRO */}

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 md:p-10 shadow-xl ring-1 ring-slate-200 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Local & Outstation Cab Service in Gorakhpur
              </h2>

              <p className="text-slate-600 mt-5 leading-relaxed">
                Car Cab Booking provides local taxi
                service in Gorakhpur for city rides,
                airport transfers, railway station
                pickup, sightseeing and outstation
                travel.
              </p>

              <p className="text-slate-600 mt-5 leading-relaxed">
                If you are searching for a travel agency near me, car rental in
                Gorakhpur, or the best tour and travel in Gorakhpur, contact us
                for local, one-way, Nepal tour and round-trip cab booking.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/destinations"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-7 py-3 text-white font-semibold hover:bg-sky-700 transition"
                >
                  View Destinations
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-sky-600 px-7 py-3 text-sky-700 font-semibold hover:bg-sky-50 transition"
                >
                  Contact for Booking
                </Link>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* LOCAL SERVICES */}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Taxi Services in Gorakhpur
              </h2>

              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Book local taxi, airport transfer,
                railway station pickup and sightseeing
                cab service in Gorakhpur.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localServices.map(
              (service, index) => (
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
              )
            )}
          </div>
        </div>
      </section>

      {/* LOCAL AREAS */}

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Local Taxi Coverage in Gorakhpur
                </h2>

                <p className="mt-4 text-gray-600">
                  Cab booking is available for popular
                  local areas and sightseeing locations
                  across Gorakhpur and nearby places.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {localAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-slate-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* POPULAR ROUTES */}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Popular Outstation Cab Routes from Gorakhpur
              </h2>

              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Book one-way or round-trip cab service
                from Gorakhpur to popular destinations.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularRoutes.map(
              (route, index) => (
                <FadeInWhenVisible
                  key={route}
                  delay={index * 0.05}
                >
                  <Link
                    to="/destinations"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-sky-50 hover:border-sky-300 transition"
                  >
                    <span className="font-semibold text-gray-800">
                      {route}
                    </span>

                    <ArrowRight className="w-5 h-5 text-sky-600" />
                  </Link>
                </FadeInWhenVisible>
              )
            )}
          </div>
        </div>
      </section>

      {/* EXISTING DESTINATIONS */}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Popular Cab Destinations
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore popular taxi and outstation cab
                destinations from Gorakhpur.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations
              .slice(0, 4)
              .map(
                (
                  destination,
                  index
                ) => (
                  <FadeInWhenVisible
                    key={
                      destination.id
                    }
                    delay={
                      index * 0.1
                    }
                  >
                    <motion.div
                      whileHover={{
                        y: -10,
                      }}
                      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <ImageWithFallback
                          src={
                            destination.image
                          }
                          alt={`${destination.name} cab route from Gorakhpur`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {
                            destination.name
                          }
                        </h3>

                        <p className="text-gray-600 text-sm">
                          {
                            destination.location
                          }
                        </p>
                      </div>
                    </motion.div>
                  </FadeInWhenVisible>
                )
              )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Car Cab Booking
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Convenient taxi booking for local
                travel, airport transfers, railway
                station pickup and outstation trips.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(
              (
                feature,
                index
              ) => (
                <FadeInWhenVisible
                  key={
                    feature.title
                  }
                  delay={
                    index * 0.1
                  }
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-sky-600 to-blue-600 rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {
                        feature.title
                      }
                    </h3>

                    <p className="text-gray-600">
                      {
                        feature.description
                      }
                    </p>
                  </motion.div>
                </FadeInWhenVisible>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Gorakhpur Cab Booking FAQs
              </h2>
            </div>
          </FadeInWhenVisible>

          <div className="max-w-4xl mx-auto space-y-5">
            {faqs.map(
              (
                faq,
                index
              ) => (
                <FadeInWhenVisible
                  key={
                    faq.question
                  }
                  delay={
                    index * 0.05
                  }
                >
                  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                      {
                        faq.question
                      }
                    </h3>

                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {
                        faq.answer
                      }
                    </p>
                  </div>
                </FadeInWhenVisible>
              )
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              What Our Travelers Say
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {testimonials.map(
                (
                  testimonial
                ) => (
                  <div
                    key={
                      testimonial.id
                    }
                    className="px-4"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[
                          ...Array(
                            testimonial.rating
                          ),
                        ].map(
                          (
                            _,
                            i
                          ) => (
                            <Star
                              key={
                                i
                              }
                              className="w-6 h-6 fill-yellow-400 text-yellow-400"
                            />
                          )
                        )}
                      </div>

                      <p className="text-lg mb-6 italic">
                        "
                        {
                          testimonial.text
                        }
                        "
                      </p>

                      <h3 className="font-bold">
                        {
                          testimonial.name
                        }
                      </h3>

                      <p className="text-sky-100 text-sm">
                        {
                          testimonial.location
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}