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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex h-20 items-center justify-between gap-3">

          {/* ============================= */}
          {/* Logo + Business Heading */}
          {/* ============================= */}

          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
            aria-label="Car Cab Booking Home"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="shrink-0"
            >
              <img
                src={CCBLogo}
                alt="Car Cab Booking"
                className="
                  h-[44px]
                  w-auto
                  max-w-[100px]
                  object-contain

                  sm:h-[48px]
                  sm:max-w-[110px]

                  md:h-[50px]
                  md:max-w-[115px]

                  lg:h-[54px]
                  lg:max-w-[125px]
                "
              />
            </motion.div>

            {/* Business Heading */}
            <div className="min-w-0">
              <p
                className="
                  whitespace-nowrap
                  text-[11px]
                  font-bold
                  leading-[14px]
                  text-gray-900

                  sm:text-[13px]
                  sm:leading-[16px]

                  md:text-[13px]

                  lg:text-[15px]
                  lg:leading-[18px]
                "
              >
                Gorakhpur Car & Tour Service
              </p>

              <p
                className="
                  mt-0.5
                  whitespace-nowrap
                  text-[9px]
                  font-semibold
                  leading-[11px]
                  text-sky-600

                  sm:text-[10px]

                  md:text-[10px]

                  lg:text-[11px]
                "
              >
                24/7 Cab Booking
              </p>
            </div>
          </Link>

          {/* ============================= */}
          {/* Desktop Navigation */}
          {/* ============================= */}

          <nav
            className="
              hidden
              items-center
              md:flex
              md:gap-4
              lg:gap-6
              xl:gap-8
            "
          >
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group relative whitespace-nowrap"
                >
                  <span
                    className={`
                      text-sm
                      transition-colors
                      lg:text-[15px]
                      ${
                        isActive
                          ? "font-medium text-sky-600"
                          : "text-gray-700 hover:text-sky-600"
                      }
                    `}
                  >
                    {item.name}
                  </span>

                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-600"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                    }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ============================= */}
          {/* Desktop Book Now */}
          {/* ============================= */}

          <motion.a
            href="tel:+917084183421"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              hidden
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-sky-600
              to-blue-600
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition-shadow
              hover:shadow-lg

              md:inline-flex

              lg:px-6
              lg:text-base
            "
          >
            Book Now
          </motion.a>

          {/* ============================= */}
          {/* Mobile Menu Button */}
          {/* ============================= */}

          <button
            type="button"
            onClick={() =>
              setIsMobileMenuOpen((current) => !current)
            }
            className="
              ml-auto
              shrink-0
              rounded-lg
              p-2
              text-gray-700
              transition-colors
              hover:bg-sky-50
              hover:text-sky-600
              md:hidden
            "
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* ============================= */}
      {/* Mobile Navigation */}
      {/* ============================= */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              overflow-hidden
              border-t
              border-gray-100
              bg-white
              shadow-lg
              md:hidden
            "
          >
            <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => {
                const isActive =
                  item.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className={`
                      rounded-lg
                      px-3
                      py-3
                      text-[15px]
                      transition-colors
                      ${
                        isActive
                          ? "bg-sky-50 font-semibold text-sky-600"
                          : "text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile Book Now */}
              <a
                href="tel:+917084183421"
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
                className="
                  mt-3
                  rounded-full
                  bg-gradient-to-r
                  from-sky-600
                  to-blue-600
                  px-6
                  py-3
                  text-center
                  font-semibold
                  text-white
                  shadow-sm
                  transition
                  hover:shadow-md
                "
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}