import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Check, Clock, Users } from "lucide-react";
import { packages } from "@/data/travelData";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const FadeInWhenVisible = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export function PackagesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzY4MzgxNDc4fDA&ixlib=rb-4.1.0&q=80&w=900"
            alt="Cab booking packages and car rental in Gorakhpur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Cab Booking Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Local taxi, outstation cab and car rental options from Gorakhpur
          </motion.p>
        </div>
      </section>

      {/* Package SEO Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Transparent Cab Booking Packages in Gorakhpur
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Select from sedan, SUV, Innova and traveller packages for local
              taxi service, airport pickup and outstation travel. Our package
              options are designed to support family trips, business travel and
              group tours with clear charges and no hidden fees.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Every package includes a verified driver, pickup from your chosen
              location, route assistance and support for custom schedules. Book
              the right car and route from Gorakhpur today.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Cars for Booking
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose cars for local travel, tours, airport pickup, railway
                pickup and outstation cab service
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <FadeInWhenVisible key={pkg.id} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-sm">
                          {pkg.rating}
                        </span>
                        <span className="text-gray-500 text-xs">
                          ({pkg.reviews})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {pkg.title}
                        </h3>
                        <p className="text-sky-600 font-medium">
                          {pkg.destination}
                        </p>
                      </div>
                    </div>

                    {/* Duration
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div> */}

                    {/* Includes */}
                    {/* <div className="space-y-2 mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Package Includes:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {pkg.includes.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-sky-600" />
                            </div>
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div> */}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      {/* <div>
                        <p className="text-sm text-gray-500">Starting from</p>
                        <p className="text-3xl font-bold text-sky-600">
                          {pkg.price}
                        </p>
                      </div> */}
                      <motion.a
                        href="tel:+917084183421"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow inline-block text-center"
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

      {/* Why Book With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Book Our Cabs?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Reliable car cab booking in Gorakhpur with clean cars and
                professional drivers
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeInWhenVisible delay={0.1}>
              <div className="text-center p-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center"
                >
                  <Check className="w-8 h-8 text-sky-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Local and Outstation
                </h3>
                <p className="text-gray-600">
                  One-way, round-trip, airport and railway station cab service
                  from Gorakhpur
                </p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="text-center p-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center"
                >
                  <Users className="w-8 h-8 text-sky-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Professional Drivers
                </h3>
                <p className="text-gray-600">
                  Experienced drivers for Gorakhpur local rides and long-distance
                  tours
                </p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <div className="text-center p-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center"
                >
                  <Star className="w-8 h-8 text-sky-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Comfortable Cars
                </h3>
                <p className="text-gray-600">
                  Sedan, SUV and traveller options for family tours and business
                  trips
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Book a Cab?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-sky-100">
              Call now for Gorakhpur cab booking, car rental and outstation taxi
              service
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-sky-600 rounded-full text-lg font-semibold hover:shadow-2xl transition-shadow"
            >
              Call for Cab Booking
            </motion.button>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}
