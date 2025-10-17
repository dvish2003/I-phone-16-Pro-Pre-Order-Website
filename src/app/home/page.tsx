"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Home = () => {
  const proTextRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll animation
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
            <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] bg-rose-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>

          <div
            ref={imageRef}
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
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-orange-300/5 mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div
          ref={contentRef}
          className="lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8 px-4 lg:px-8 flex flex-col justify-center animate-fade-in-up"
        >
          <div className="bg-gradient-to-b from-black/40 via-rose-600 to-orange-100 bg-clip-text text-transparent mb-6 lg:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold animate-slide-in-left">
              iPhone 16 Pro
            </h1>
          </div>

          <div className="space-y-6 lg:space-y-8 flex-1 flex flex-col justify-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none animate-slide-in-right whitespace-nowrap">
              Forged in{" "}
              <span className="bg-gradient-to-r from-white via-rose-200 to-orange-300 bg-clip-text text-transparent animate-gradient">
                Titanium
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in delay-300">
              The most advanced iPhone ever. Crafted from aerospace-grade
              titanium with a stunning liquid glass display that adapts to your
              environment.
            </p>

            <div className="space-y-4 animate-fade-in delay-500">
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-all duration-300">
                  <span className="text-white text-xs sm:text-sm font-medium">
                    A17 Pro Chip
                  </span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-all duration-300">
                  <span className="text-white text-xs sm:text-sm font-medium">
                    48MP Camera
                  </span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-all duration-300">
                  <span className="text-white text-xs sm:text-sm font-medium">
                    120Hz Display
                  </span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-all duration-300">
                  <span className="text-white text-xs sm:text-sm font-medium">
                    5G Ready
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6 pt-2 lg:pt-4 animate-fade-in delay-700">
              <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
                Featuring the revolutionary Titanium design that&apos;s both
                lightweight and incredibly durable. With advanced computational
                photography and industry-leading performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-rose-500/25">
                  Pre-order Now
                </button>
                <button className="border border-white/30 hover:border-white/50 text-white font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  View Features
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 pt-2 lg:pt-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 lg:h-32 bg-gradient-to-t from-black to-transparent z-0"></div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        
        /* Mobile responsiveness improvements */
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
      `}</style>
    </section>
  );
};

export default Home;