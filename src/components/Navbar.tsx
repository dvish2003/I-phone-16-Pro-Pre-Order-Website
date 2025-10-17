'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Feature", href: "/feature" },
    { name: "Specs", href: "/specs" },
    { name: "Gallery", href: "/gallery" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full h-16 md:h-20 ${
          isScrolled 
            ? 'bg-transparent backdrop-blur-[6px]' 
            : 'bg-transparent'
        } transition-all duration-300 z-50`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <Image 
                  src="/icons/Apple_logo_white.svg" 
                  alt="Apple Logo" 
                  width={20} 
                  height={20} 
                  className="group-hover:scale-110 transition-transform duration-300" 
                />
              </Link>
            </motion.div>

            <div className="hidden md:flex flex-col items-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[20px] font-light tracking-widest text-gray-500/70 mb-2"
              >
                iPhone 16 TITANIUM EDITION
              </motion.h1>
              <ul className="flex space-x-12 text-[16px] text-gray-300/60">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="relative group hover:text-white transition-all duration-300 font-medium"
                    >
                      {item.name}
                      <motion.span 
                        className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-rose-500 to-orange-400 group-hover:w-full transition-all duration-300"
                        whileHover={{ width: "100%" }}
                      />
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
                className="hidden md:block bg-white/30 hover:from-rose-500 hover:to-orange-400 px-8 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-rose-500/25"
              >
                <Link href="/pre-order" className="text-white text-[16px] font-semibold">
                  Pre Order
                </Link>
              </motion.div>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            className="fixed inset-0 z-50"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              onClick={() => setIsMenuOpen(false)} 
            />
            
            <motion.div 
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 w-80 h-full bg-gradient-to-b from-black via-gray-900 to-black border-r border-gray-800/50"
            >
              <div className="p-6 h-full flex flex-col">
                
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center justify-between mb-12"
                >
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
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
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </motion.div>

                <motion.h2 
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-500/70 text-sm font-light tracking-widest mb-8 px-2"
                >
                  iPhone 16 TITANIUM EDITION
                </motion.h2>

                <ul className="space-y-2 flex-1">
                  {navItems.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center text-white text-lg font-medium hover:bg-white/5 px-4 py-4 rounded-xl transition-all duration-300 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.span 
                          className="flex-1"
                          whileHover={{ x: 5 }}
                        >
                          {item.name}
                        </motion.span>
                        <motion.svg 
                          className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          whileHover={{ x: 2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="pt-8 border-t border-gray-800/50"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/30 hover:from-rose-500 hover:to-orange-400 px-6 py-4 rounded-xl transition-all duration-300 shadow-lg"
                  >
                    <Link 
                      href="/pre-order" 
                      className="text-white text-center font-semibold block"
                      onClick={() => setIsMenuOpen(false)}
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
    </>
  );
};

export default Navbar;