import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
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

const googleMapsUrl = "https://maps.app.goo.gl/Dne8KhEc8ojc6vQA6";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    date: "",
    guests: "2",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        destination: "",
        date: "",
        guests: "2",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 8810990496 ","+91 7084183421"],
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["ajaysingh80098@gmail.com"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Gorakhpur, Uttar Pradesh, India"],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2ODMxMjY3Mnww&ixlib=rb-4.1.0&q=80&w=900"
            alt="Contact Car Cab Booking Gorakhpur"
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
            Contact Car Cab Booking
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Call or message us for cab booking in Gorakhpur
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <FadeInWhenVisible key={info.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form and Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Booking Form */}
            <FadeInWhenVisible>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Book Your Cab
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we will get back to you for your
                  cab booking request
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
                      placeholder="your full name"
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
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
                      placeholder="@example.com"
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
                      <option value="">Select a destination</option>
                      <option value="maldives">Nepal</option>
                      <option value="switzerland">Lucknow</option>
                      <option value="paris">Banaras</option>
                      <option value="tokyo">Ayodhya</option>
                      <option value="santorini">Kushinagar</option>
                      <option value="dubai">Patana</option>
                      <option value="bali">Mumbai</option>
                      <option value="iceland">Gujarat</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
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
                        Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests</option>
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
                      placeholder="Pickup, drop, cab type or route details"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Cab Booking Request
                  </motion.button>
                </form>
              </div>
            </FadeInWhenVisible>

            {/* Map Section */}
            <FadeInWhenVisible delay={0.2}>
              <div className="lg:sticky lg:top-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Visit Our Gorakhpur Office
                </h2>
                <p className="text-gray-600 mb-6">
                  Contact us for local taxi, car rental and outstation cab
                  booking from Gorakhpur
                </p>

                {/* Map Placeholder */}
                <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5605272747227!2d83.36478391504156!3d26.76055498319117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915b7a7b7c8a1d%3A0x3c7f4e8c1d9b8e3!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1705300000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Gorakhpur Location"
                  />
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 font-semibold text-white transition hover:bg-sky-700"
                >
                  <MapPin className="h-4 w-4" />
                  Open Car Cab Booking on Google Maps
                </a>

                {/* Office Hours */}
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Cab Service Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Can I book a cab from Gorakhpur for an outstation trip?
                </h3>
                <p className="mt-2 leading-relaxed">
                  Yes, we provide outstation cab booking from Gorakhpur to
                  destinations such as Nepal, Banaras, Ayodhya, Kushinagar,
                  Lucknow and more with flexible one-way or round-trip options.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Do you offer airport and railway station pickup?
                </h3>
                <p className="mt-2 leading-relaxed">
                  Absolutely. Our drivers can meet you at the airport or railway
                  station and provide safe pickup and drop services across
                  Gorakhpur and nearby areas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  How do I confirm the booking?
                </h3>
                <p className="mt-2 leading-relaxed">
                  Fill out the booking form on this page or call us directly at
                  +91 8810990496. We'll confirm your cab, route and pickup time
                  as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Animation Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-4">
                Your booking request has been submitted successfully. We'll get
                back to you within 24 hours.
              </p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3 }}
                className="h-1 bg-sky-600 rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
