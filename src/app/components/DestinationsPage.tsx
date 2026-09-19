import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Search, SlidersHorizontal, MapPin } from 'lucide-react';
import { destinations } from '@/data/travelData';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

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

export function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const countries = ['all', ...Array.from(new Set(destinations.map(d => d.country)))];
  const budgets = ['all', 'budget', 'medium', 'luxury'];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || dest.country === selectedCountry;
    const matchesBudget = selectedBudget === 'all' || dest.budget === selectedBudget;
    
    return matchesSearch && matchesCountry && matchesBudget;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1713959989861-2425c95e9777?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjgzOTMxNDB8MA&ixlib=rb-4.1.0&q=80&w=900"
            alt="Outstation cab destinations from Gorakhpur"
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
            Cab Destinations from Gorakhpur
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Book taxi routes for Nepal, Pokhara, Banaras, Ayodhya, Kushinagar and more
          </motion.p>
        </div>
      </section>

      {/* Destination Intro for SEO */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Outstation Cab Routes from Gorakhpur
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Book safe and comfortable cabs from Gorakhpur to Nepal, Pokhara,
              Banaras, Ayodhya, Kushinagar, Lucknow and nearby destinations. Our
              outstation taxi service includes airport transfers, railway station
              pickups and family tours with experienced drivers and transparent
              pricing.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Choose one-way or round-trip packages for local travel, pilgrimage
              journeys and long-distance routes. We provide clean cars, flexible
              pickup options and 24/7 support for cab booking in Gorakhpur.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-md sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search cab routes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>

            {/* Filter Toggle Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden px-6 py-3 bg-sky-600 text-white rounded-full flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex gap-4">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
              >
                {countries.map(country => (
                  <option key={country} value={country}>
                    {country === 'all' ? 'All' : country}
                  </option>
                ))}
              </select>

              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
              >
                {budgets.map(budget => (
                  <option key={budget} value={budget}>
                    {budget === 'all' ? 'All Budgets' : budget.charAt(0).toUpperCase() + budget.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 flex flex-col gap-3"
            >
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
              >
                {countries.map(country => (
                  <option key={country} value={country}>
                    {country === 'all' ? 'All Countries' : country}
                  </option>
                ))}
              </select>

              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
              >
                {budgets.map(budget => (
                  <option key={budget} value={budget}>
                    {budget === 'all' ? 'All Budgets' : budget.charAt(0).toUpperCase() + budget.slice(1)}
                  </option>
                ))}
              </select>
            </motion.div>
          )}
        </div>
      </section>

      {/* Popular Routes and Travel Benefits */}
      <section className="py-10 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Popular Cab Routes from Gorakhpur
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-gray-600">
              <p>Gorakhpur to Nepal cab service for secure cross-border travel.</p>
              <p>Gorakhpur to Pokhara one-way and round-trip taxi bookings.</p>
              <p>Gorakhpur to Banaras pilgrim and tourist cab packages.</p>
              <p>Gorakhpur to Ayodhya, Kushinagar, Lucknow and Sonauli routes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredDestinations.length}</span> cab destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <FadeInWhenVisible key={destination.id} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-72 overflow-hidden">
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-sm mb-4">{destination.description}</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-2 bg-white text-sky-600 rounded-full font-semibold"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div> */}

                    {/* Budget Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        destination.budget === 'luxury' ? 'bg-yellow-500' :
                        destination.budget === 'medium' ? 'bg-blue-500' :
                        'bg-green-500'
                      }`}>
                        {destination.budget.charAt(0).toUpperCase() + destination.budget.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{destination.name}</h3>
                        <div className="flex items-center gap-1 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{destination.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      {/* <div>
                        <p className="text-sm text-gray-500">Starting from</p>
                        <p className="text-2xl font-bold text-sky-600">{destination.price}</p>
                      </div> */}
                      {/* <div className="text-right">
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-semibold text-gray-900">{destination.duration}</p>
                      </div> */}
                    </div>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No cab destinations found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCountry('all');
                  setSelectedBudget('all');
                }}
                className="mt-4 px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors"
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
