"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  const proTextRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      if (proTextRef.current) {
        proTextRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const { clientX, clientY } = e;
        const x = (window.innerWidth / 2 - clientX) / 25;
        const y = (window.innerHeight / 2 - clientY) / 25;
        imageRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
      }
    };

    // Initialize proper viewport height for mobile
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener('resize', setVH);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', setVH);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed px-4 sm:px-6 lg:px-8" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-rose-950/20 to-orange-300/10 z-0"></div>

      <div
        ref={proTextRef}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none -top-20 -left-5 md:-top-30 md:-left-15 lg:-top-40 lg:-left-30 xl:-top-50 xl:-left-40 transition-transform duration-100"
      >
        <h1 className="text-[25vw] md:text-[22vw] lg:text-[200px] xl:text-[240px] font-bold opacity-40 bg-gradient-to-b from-rose-900/90 to-transparent bg-clip-text text-transparent select-none">
          PRO
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto relative z-20">
        <div className="relative lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-60 h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-rose-500/10 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
              className="absolute w-52 h-52 md:w-72 md:h-72 lg:w-[380px] lg:h-[380px] bg-rose-400/5 rounded-full blur-2xl"
            />
          </div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="relative z-30 transform transition-transform duration-700"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative">
              <Image
                src={"/image/iphone-rose-br_1.png"}
                width={500}
                height={500}
                alt="iPhone 16 Pro"
                className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[450px] drop-shadow-2xl transition-all duration-500"
                priority
                style={{
                  filter: 'brightness(1.1) contrast(1.1)',
                  WebkitFilter: 'brightness(1.1) contrast(1.1)'
                }}
              />
              <div className="absolute inset-0 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 text-center lg:text-left space-y-4 lg:space-y-6 px-4 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-b from-black/40 via-rose-600 to-orange-100 bg-clip-text text-transparent mb-4 lg:mb-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold">
              iPhone 16 Pro
            </h1>
          </motion.div>

          <div className="space-y-4 lg:space-y-6 flex-1 flex flex-col justify-center w-full">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              Forged in{" "}
              <span className="bg-gradient-to-r from-white via-rose-200 to-orange-300 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Titanium
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              The most advanced iPhone ever. Crafted from aerospace-grade
              titanium with a stunning liquid glass display that adapts to your
              environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="space-y-3"
            >
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-white text-xs sm:text-sm font-medium">
                    A17 Pro Chip
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-white text-xs sm:text-sm font-medium">
                    48MP Camera
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-white text-xs sm:text-sm font-medium">
                    120Hz Display
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-white text-xs sm:text-sm font-medium">
                    5G Ready
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="space-y-3 lg:space-y-4 pt-2 lg:pt-3"
            >
              <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
                Featuring the revolutionary Titanium design that&apos;s both
                lightweight and incredibly durable. With advanced computational
                photography and industry-leading performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-rose-500/25 text-sm sm:text-base"
                >
                  Pre-order Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 hover:border-white/50 text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                >
                  View Features
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 pt-2 lg:pt-3"
              >
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">
                    6.7
                  </div>
                  <div className="text-xs text-gray-400">Display</div>
                </div>
                <div className="w-px h-5 sm:h-6 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">
                    24h+
                  </div>
                  <div className="text-xs text-gray-400">Battery Life</div>
                </div>
                <div className="w-px h-5 sm:h-6 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">
                    1TB
                  </div>
                  <div className="text-xs text-gray-400">Storage</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-black to-transparent z-0"></div>

      <style jsx global>{`
        :root {
          --vh: 1vh;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        /* Better cross-browser compatibility */
        * {
          box-sizing: border-box;
        }
        
        /* Improved mobile responsiveness */
        @media (max-width: 640px) {
          .text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          .space-y-4 > * + * {
            margin-top: 0.75rem;
          }
        }
        
        @media (max-width: 768px) {
          .max-w-\[280px\] {
            max-width: 280px;
          }
        }
        
        @media (max-width: 1024px) {
          .leading-tight {
            line-height: 1.2;
          }
        }
        
        /* Fix for Linux DPI scaling */
        @media (-webkit-device-pixel-ratio: 1.25) {
          html {
            zoom: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;