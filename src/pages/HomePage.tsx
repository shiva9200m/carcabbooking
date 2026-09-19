//src\pages\HomePage.tsx
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Shield,
  Clock,
  DollarSign,
  Star,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { destinations, testimonials } from "@/data/travelData";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

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
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 50 }
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
  const features = [
    {
      icon: Globe,
      title: "Gorakhpur Route Coverage",
      description:
        "Local, airport, railway station and outstation cab service from Gorakhpur.",
    },
    {
      icon: Shield,
      title: "Safe Cab Booking",
      description:
        "Clean vehicles and reliable drivers for local, family and outstation travel.",
    },
    {
      icon: Clock,
      title: "24/7 Cab Support",
      description:
        "Cab booking support is available day and night for planned and urgent travel.",
    },
    {
      icon: DollarSign,
      title: "Clear Taxi Pricing",
      description:
        "Easy pricing options for local rides, one-way journeys and round trips.",
    },
  ];

  const faqs = [
    {
      question: "Do you provide cab booking in Gorakhpur 24/7?",
      answer:
        "Yes. Car Cab Booking provides 24/7 taxi and cab booking support in Gorakhpur for local rides, airport pickup, railway station pickup and outstation travel.",
    },
    {
      question: "Can I book an outstation cab from Gorakhpur?",
      answer:
        "Yes. Outstation cab service is available from Gorakhpur for destinations such as Ayodhya, Varanasi, Kushinagar, Lucknow, Nepal, Pokhara and other routes.",
    },
    {
      question: "Do you provide Gorakhpur airport and railway station pickup?",
      answer:
        "Yes. You can book pickup and drop service for Gorakhpur Airport and Gorakhpur Railway Station for local and onward travel.",
    },
    {
      question: "Which vehicles are available for cab booking?",
      answer:
        "Vehicle options may include sedan, SUV, Innova, Ertiga, Scorpio and traveller options depending on your trip and availability.",
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
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1694786001018-b43efc0a7983?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwdmFjYXRpb258ZW58MXx8fHwxNzY4MzYwMTA1fDA&ixlib=rb-4.1.0&q=80&w=900"
            alt="Cab booking and taxi service in Gorakhpur"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-5 leading-tight"
          >
            Cab Booking & Taxi Service in Gorakhpur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="text-lg md:text-2xl mb-4 max-w-3xl mx-auto text-white/90"
          >
            Reliable local and outstation cab service with
            airport pickup, railway station pickup and 24/7
            booking support.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="text-base md:text-lg mt-2 text-white/90 max-w-3xl mx-auto"
          >
            Travel from Gorakhpur to Ayodhya, Varanasi,
            Kushinagar, Lucknow, Nepal, Pokhara and other
            destinations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="text-sm md:text-base mt-2 text-white/80 max-w-3xl mx-auto"
          >
            One-way and round-trip booking • Clean vehicles •
            Local sightseeing • Family and outstation travel
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link to="/packages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl transition-shadow flex items-center gap-2 mx-auto sm:mx-0"
              >
                View Cab Packages

                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link to="/destinations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold border-2 border-white hover:bg-white/20 transition-all"
              >
                Explore Destinations
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-3 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          LOCAL CAB INTRODUCTION
      ====================================================== */}

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 md:p-10 shadow-xl ring-1 ring-slate-200 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Local & Outstation Cab Service in Gorakhpur
              </h2>

              <p className="text-slate-600 mt-5 leading-relaxed">
                Car Cab Booking provides taxi service in
                Gorakhpur for local city rides, sightseeing,
                airport transfers, railway station pickup and
                outstation journeys. Choose the trip type that
                suits your travel plan and contact us for
                booking assistance.
              </p>

              <p className="text-slate-600 mt-5 leading-relaxed">
                Popular travel options include Gorakhpur to
                Ayodhya, Varanasi, Kushinagar, Lucknow, Nepal
                and Pokhara, along with nearby local routes.
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

      {/* =====================================================
          TRAVEL GUIDE
      ====================================================== */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="max-w-4xl mx-auto text-center rounded-3xl bg-white p-10 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Gorakhpur Taxi & Travel Guide
              </h2>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Explore taxi routes, booking information and
                local travel guidance for Gorakhpur. Find useful
                information for local trips, pilgrimage travel,
                airport journeys and outstation routes.
              </p>

              <Link
                to="/guides"
                className="inline-flex items-center justify-center mt-8 rounded-full bg-sky-600 px-8 py-4 text-white font-semibold hover:bg-sky-700 transition"
              >
                Read Travel Guide
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* =====================================================
          POPULAR DESTINATIONS
      ====================================================== */}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Popular Cab Destinations from Gorakhpur
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore popular outstation taxi routes from
                Gorakhpur for family travel, pilgrimage,
                holidays and private trips.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations
              .slice(0, 4)
              .map((destination, index) => (
                <FadeInWhenVisible
                  key={destination.id}
                  delay={index * 0.1}
                >
                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={destination.image}
                        alt={`${destination.name} cab route from Gorakhpur`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileHover={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Link to="/destinations">
                          <button className="px-6 py-2 bg-white text-sky-600 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View Details
                          </button>
                        </Link>
                      </motion.div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {destination.name}
                      </h3>

                      <p className="text-gray-600 text-sm">
                        {destination.location}
                      </p>
                    </div>
                  </motion.div>
                </FadeInWhenVisible>
              ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 font-semibold text-sky-700 hover:text-sky-800"
            >
              View All Destinations

              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Car Cab Booking
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Convenient cab booking for local travel,
                airport and railway transfers and outstation
                journeys from Gorakhpur.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeInWhenVisible
                key={feature.title}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-lg transition-all"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-sky-600 to-blue-600 rounded-full flex items-center justify-center"
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>

              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Quick answers about cab booking and taxi service
                in Gorakhpur.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="max-w-4xl mx-auto space-y-5">
            {faqs.map((faq, index) => (
              <FadeInWhenVisible
                key={faq.question}
                delay={index * 0.05}
              >
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    {faq.question}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-4 text-white font-semibold hover:bg-sky-700 transition"
            >
              Contact Us for Cab Booking
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}

      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                What Our Travelers Say
              </h2>

              <p className="text-sky-100 max-w-2xl mx-auto">
                Experiences shared by travelers using our cab
                services.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="px-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>

                    <p className="text-lg mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center justify-center gap-4">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={`${testimonial.name} customer review`}
                        className="w-16 h-16 rounded-full object-cover"
                      />

                      <div className="text-left">
                        <h3 className="font-bold">
                          {testimonial.name}
                        </h3>

                        <p className="text-sky-100 text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}