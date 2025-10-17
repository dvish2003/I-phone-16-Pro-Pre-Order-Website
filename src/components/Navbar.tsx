'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
 <nav className={`fixed top-0 left-0 w-full h-16 md:h-20 ${
        isScrolled 
          ? 'bg-transparent backdrop-blur-[6px]' 
          : 'bg-transparent'
      } transition-all duration-300 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2 group">
                <Image 
                  src="/icons/Apple_logo_white.svg" 
                  alt="Apple Logo" 
                  width={20} 
                  height={20} 
                  className="group-hover:scale-110 transition-transform duration-300" 
                />
            
              </Link>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <h1 className="text-[20px] font-light tracking-widest text-gray-500/70 mb-2">
                iPhone 16 TITANIUM EDITION
              </h1>
              <ul className="flex space-x-12 text-[16px] text-gray-300/60">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="relative group hover:text-white transition-all duration-300 font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block bg-white/30 hover:from-rose-500 hover:to-orange-400 px-8 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-rose-500/25">
                <Link href="/pre-order" className="text-white text-[16px] font-semibold">
                  Pre Order
                </Link>
              </div>
              
              <button 
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-50 transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setIsMenuOpen(false)} 
        />
        
        <div className={`absolute top-0 left-0 w-80 h-full bg-gradient-to-b from-black via-gray-900 to-black border-r border-gray-800/50 transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6 h-full flex flex-col">
            
            <div className="flex items-center justify-between mb-12">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/icons/Apple_logo_white.svg"
                  alt="Apple Logo"
                  width={20}
                  height={20}
                />
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h2 className="text-gray-500/70 text-sm font-light tracking-widest mb-8 px-2">
              iPhone 16 TITANIUM EDITION
            </h2>

            <ul className="space-y-2 flex-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center text-white text-lg font-medium hover:bg-white/5 px-4 py-4 rounded-xl transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex-1">{item.name}</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-gray-800/50">
              <div className="bg-white/30 hover:from-rose-500 hover:to-orange-400 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                <Link 
                  href="/pre-order" 
                  className="text-white text-center font-semibold block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pre Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;