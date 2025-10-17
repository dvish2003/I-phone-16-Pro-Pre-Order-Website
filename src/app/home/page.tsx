"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  const proTextRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -0.3;
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

    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVH();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", setVH);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setVH);
    };
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center text-white overflow-hidden pt-[120px]"
      style={{
        minHeight: "calc(100vh - 80px)",
        background:
          "radial-gradient(circle at top, #000 0%, #0a0a0a 60%, #111 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-950/10 to-black/90 z-0" />

      <div
        ref={proTextRef}
        className="absolute top-[15%] left-0 w-full text-center z-10 pointer-events-none"
      >
        <h1 className="text-[30vw] sm:text-[22vw] md:text-[18vw] font-bold opacity-10 bg-gradient-to-b from-rose-800/60 to-transparent bg-clip-text text-transparent select-none">
          PRO
        </h1>
      </div>

      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="relative flex justify-center items-center w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] drop-shadow-2xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute w-full h-full rounded-full bg-rose-500/10 blur-3xl" />
          <Image
            src="/image/iphone-rose-br_1.png"
            alt="iPhone 16 Pro"
            width={500}
            height={500}
            className="relative z-30 w-full transition-all duration-500 select-none pointer-events-none"
            draggable={false}
            priority
          />
        </motion.div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-rose-200 to-orange-300 bg-clip-text text-transparent"
          >
            iPhone 16 Pro
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Forged in{" "}
            <span className="bg-gradient-to-r from-rose-300 via-orange-200 to-yellow-100 bg-clip-text text-transparent animate-gradient">
              Titanium
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
          >
            The most advanced iPhone ever. Crafted from aerospace-grade titanium
            with a stunning liquid glass display that adapts to your
            environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
            >
              Pre-order Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 hover:border-white/50 text-white font-medium px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300"
            >
              View Features
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-0" />

      <style jsx global>{`
        :root {
          --vh: 1vh;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background: black;
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
      `}</style>
    </section>
  );
};

export default Home;
