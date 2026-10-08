import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Check, Users } from "lucide-react";

import { packages } from "@/data/travelData";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import RenaultTriber from "@/assets/cars/renault-triber.png";

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

export function PackagesPage() {
  const clientCar = {
    id: 7,
    title: "Renault Triber",
    destination: "7 Seater",
    image: RenaultTriber,
     rating: 4.3,
    reviews: 125,
  };

  const carsForBooking = [...packages, clientCar];

  return (
    <div className="min-h-screen pt-20">
      {/* ================================= */}
      {/* HERO SECTION */}
      {/* ================================= */}

      <section className="relative flex h-80 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzY4MzgxNDc4fDA&ixlib=rb-4.1.0&q=80&w=900"
            alt="Cab booking packages and car rental in Gorakhpur"
            className="h-full w-full object-cover"
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
            className="mb-4 text-5xl font-bold md:text-6xl"
          >
            Cab Booking Packages
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
            className="text-xl"
          >
            Local taxi, outstation cab and car rental options
            from Gorakhpur
          </motion.p>
        </div>
      </section>

      {/* ================================= */}
      {/* PACKAGE SEO CONTENT */}
      {/* ================================= */}

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Transparent Cab Booking Packages in Gorakhpur
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Select from sedan, SUV, Innova and traveller
              packages for car rental in Gorakhpur, local taxi
              service, airport pickup and outstation travel.
              Our package options are designed to support family
              trips, business travel and group tours with clear
              charges and no hidden fees.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Every package includes a verified driver, pickup
              from your chosen location, route assistance and
              support for custom schedules. Book the right car
              and route from Gorakhpur today.
            </p>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* FEATURED CARS */}
      {/* ================================= */}

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Featured Cars for Booking
              </h2>

              <p className="mx-auto max-w-2xl text-gray-600">
                Choose cars for local travel, tours, airport
                pickup, railway pickup and outstation cab service
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {carsForBooking.map((pkg, index) => (
              <FadeInWhenVisible
                key={pkg.id}
                delay={index * 0.1}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:shadow-2xl
                  "
                >
                  {/* Car Image */}
                  <div className="relative h-64 overflow-hidden bg-white">
                    <ImageWithFallback
                      src={pkg.image}
                      alt={`${pkg.title} cab booking in Gorakhpur`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    {/* Rating / New Badge */}
                    <div className="absolute right-4 top-4">
                      {pkg.rating !== null &&
                      pkg.reviews !== null ? (
                        <div
                          className="
                            flex
                            items-center
                            gap-1
                            rounded-full
                            bg-white/90
                            px-3
                            py-1
                            shadow-sm
                            backdrop-blur-sm
                          "
                        >
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                          <span className="text-sm font-semibold">
                            {pkg.rating}
                          </span>

                          <span className="text-xs text-gray-500">
                            ({pkg.reviews})
                          </span>
                        </div>
                      ) : (
                        <div
                          className="
                            flex
                            items-center
                            gap-1.5
                            rounded-full
                            bg-white/90
                            px-3
                            py-1
                            shadow-sm
                            backdrop-blur-sm
                          "
                        >
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                          <span className="text-sm font-semibold text-gray-900">
                            New
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Car Details */}
                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h3 className="mb-1 text-2xl font-bold text-gray-900">
                          {pkg.title}
                        </h3>

                        <p className="font-medium text-sky-600">
                          {pkg.destination}
                        </p>
                      </div>
                    </div>

                    {/* Booking Button */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <motion.a
                        href="tel:+917084183421"
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="
                          inline-block
                          rounded-full
                          bg-gradient-to-r
                          from-sky-600
                          to-blue-600
                          px-6
                          py-2.5
                          text-center
                          font-semibold
                          text-white
                          transition-shadow
                          hover:shadow-lg
                        "
                      >
                        Book Now
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* WHY BOOK WITH US */}
      {/* ================================= */}

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Why Book Our Cabs?
              </h2>

              <p className="mx-auto max-w-2xl text-gray-600">
                Reliable car cab booking in Gorakhpur with clean
                cars and professional drivers
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {/* Local / Outstation */}
            <FadeInWhenVisible delay={0.1}>
              <div className="p-6 text-center">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  className="
                    mx-auto
                    mb-4
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-sky-100
                    to-blue-100
                  "
                >
                  <Check className="h-8 w-8 text-sky-600" />
                </motion.div>

                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Local and Outstation
                </h3>

                <p className="text-gray-600">
                  One-way, round-trip, airport and railway
                  station cab service from Gorakhpur
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Drivers */}
            <FadeInWhenVisible delay={0.2}>
              <div className="p-6 text-center">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  className="
                    mx-auto
                    mb-4
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-sky-100
                    to-blue-100
                  "
                >
                  <Users className="h-8 w-8 text-sky-600" />
                </motion.div>

                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Professional Drivers
                </h3>

                <p className="text-gray-600">
                  Experienced drivers for Gorakhpur local rides
                  and long-distance tours
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Comfortable Cars */}
            <FadeInWhenVisible delay={0.3}>
              <div className="p-6 text-center">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  className="
                    mx-auto
                    mb-4
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-sky-100
                    to-blue-100
                  "
                >
                  <Star className="h-8 w-8 text-sky-600" />
                </motion.div>

                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Comfortable Cars
                </h3>

                <p className="text-gray-600">
                  Sedan, SUV and traveller options for family
                  tours and business trips
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* CTA */}
      {/* ================================= */}

      <section className="bg-gradient-to-br from-sky-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInWhenVisible>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Ready to Book a Cab?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-xl text-sky-100">
              Call now for Gorakhpur cab booking, car rental and
              outstation taxi service
            </p>

            <motion.a
              href="tel:+917084183421"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                inline-block
                rounded-full
                bg-white
                px-10
                py-4
                text-lg
                font-semibold
                text-sky-600
                transition-shadow
                hover:shadow-2xl
              "
            >
              Call for Cab Booking
            </motion.a>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}