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

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden top-10 md:top-15">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-rose-950/20 to-orange-300/10 z-0"></div>

      <div
        ref={proTextRef}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none -top-30 -left-10 md:-top-40 md:-left-20 lg:-top-60 lg:-left-40 xl:-top-80 xl:-left-60 transition-transform duration-100"
      >
        <h1 className="text-[35vw] md:text-[30vw] lg:text-[280px] xl:text-[320px] font-bold opacity-40 bg-gradient-to-b from-rose-900/90 to-transparent bg-clip-text text-transparent select-none">
          PRO
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl relative z-20 mt-16 lg:mt-0">
        <div className="relative lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-rose-500/10 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
              className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] bg-rose-400/5 rounded-full blur-2xl"
            />
          </div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="relative z-30 transform transition-transform duration-700 hover:scale-105"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative">
              <Image
                src={"/image/iphone-rose-br_1.png"}
                width={600}
                height={600}
                alt="iPhone 16 Pro"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl transition-all duration-500"
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

        <div className="lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8 px-4 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-b from-black/40 via-rose-600 to-orange-100 bg-clip-text text-transparent mb-6 lg:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold">
              iPhone 16 Pro
            </h1>
          </motion.div>

          <div className="space-y-6 lg:space-y-8 flex-1 flex flex-col justify-center w-full">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none whitespace-nowrap"
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
              className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              The most advanced iPhone ever. Crafted from aerospace-grade
              titanium with a stunning liquid glass display that adapts to your
              environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-white text-xs sm:text-sm font-medium">
                    A17 Pro Chip
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-white text-xs sm:text-sm font-medium">
                    48MP Camera
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-white text-xs sm:text-sm font-medium">
                    120Hz Display
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-all duration-300"
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
              className="space-y-4 lg:space-y-6 pt-2 lg:pt-4"
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
                Featuring the revolutionary Titanium design that&apos;s both
                lightweight and incredibly durable. With advanced computational
                photography and industry-leading performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-rose-500/25"
                >
                  Pre-order Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 hover:border-white/50 text-white font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  View Features
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 pt-2 lg:pt-4"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    6.7
                  </div>
                  <div className="text-xs text-gray-400">Display</div>
                </div>
                <div className="w-px h-6 sm:h-8 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    24h+
                  </div>
                  <div className="text-xs text-gray-400">Battery Life</div>
                </div>
                <div className="w-px h-6 sm:h-8 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    1TB
                  </div>
                  <div className="text-xs text-gray-400">Storage</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 lg:h-32 bg-gradient-to-t from-black to-transparent z-0"></div>

      <style jsx>{`
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
        
        @media (max-width: 640px) {
          .text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
          .space-y-6 > * + * {
            margin-top: 1rem;
          }
        }
        
        @media (max-width: 768px) {
          .max-w-xs {
            max-width: 20rem;
          }
        }
        
        @media (max-width: 1024px) {
          .whitespace-nowrap {
            white-space: normal;
          }
        }
        
        @media (max-width: 480px) {
          .text-3xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          .space-y-6 > * + * {
            margin-top: 0.75rem;
          }
          .flex-col {
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;