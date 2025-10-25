"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Feature", href: "#feature" },
    { name: "Specs", href: "#specs" },
    { name: "Gallery", href: "#gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 h-16 md:h-20 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/" 
                className="flex items-center space-x-2 group"
                aria-label="Apple Home"
              >
                <Image
                  src="/icons/Apple_logo_white.svg"
                  alt="Apple Logo"
                  width={20}
                  height={20}
                  className="group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </Link>
            </motion.div>

            <div className="hidden md:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm font-light tracking-widest text-gray-400 mb-1"
              >
                iPhone 16 TITANIUM
              </motion.h1>
              <ul className="flex space-x-8 text-sm text-gray-300">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="relative group hover:text-white transition-all duration-300 font-medium px-2 py-1"
                    >
                      {item.name}
                      <span className="nav-underline" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block"
              >
                <Link
                  href="/pre-order"
                  className="bg-white text-black hover:bg-gray-100 text-sm font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Pre Order
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-80 h-full mobile-menu-bg border-l border-gray-800/50"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-12">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={handleNavClick}
                  >
                    <Image
                      src="/icons/Apple_logo_white.svg"
                      alt="Apple Logo"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                <motion.h2
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-400 text-sm font-light tracking-widest mb-8 px-2"
                >
                  iPhone 16 TITANIUM
                </motion.h2>

                <ul className="space-y-1 flex-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center text-white text-base font-medium hover:bg-white/5 px-4 py-4 rounded-xl transition-all duration-300 group"
                        onClick={handleNavClick}
                      >
                        <span className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                          {item.name}
                        </span>
                        <svg
                          className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8 border-t border-gray-800/50"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/pre-order"
                      className="bg-white text-black text-center font-medium py-3 px-6 rounded-full transition-all duration-300 block hover:bg-gray-100"
                      onClick={handleNavClick}
                    >
                      Pre Order Now
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(to right, #f43f5e, #fb923c);
          transition: width 0.3s ease;
        }
        
        .group:hover .nav-underline {
          width: 100%;
        }
        
        .mobile-menu-bg {
          background: linear-gradient(to bottom, #000000, #1f2937, #000000);
        }
      `}</style>
    </>
  );
};

export default Navbar;