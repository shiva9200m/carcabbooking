import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import CCBLogo from "@/assets/logo/ccb.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Guides", path: "/guides" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-sky-600"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={CCBLogo}
                alt="Car Cab Booking Logo"
                className="w-15 h-15 object-contain"
              />
            </motion.div>

            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Car Cab Booking
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="relative group">
                <span
                  className={`text-gray-700 hover:text-sky-600 transition-colors ${
                    location.pathname === item.path ? "text-sky-600" : ""
                  }`}
                >
                  {item.name}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-600"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: location.pathname === item.path ? 1 : 0,
                  }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="tel:+917084183421"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-shadow"
          >
            Book Now
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-sky-600 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-gray-700 hover:text-sky-600 transition-colors py-2 ${
                    location.pathname === item.path
                      ? "text-sky-600 font-medium"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="mt-2 px-6 py-2.5 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full text-center">
                Book Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
