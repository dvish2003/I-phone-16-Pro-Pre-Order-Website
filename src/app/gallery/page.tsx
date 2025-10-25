"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gallery-bg" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 gallery-orb-1" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 gallery-orb-2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Liquid Glass
            <br />
            <span className="gallery-title-gradient">
              Display
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Immersive visuals with ProMotion technology and always-on display
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="glass-card glass-hover rounded-3xl overflow-hidden aspect-[4/5] relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute inset-0 gallery-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Image
                src="/image/Rose Gold iPhones with Flamingo Background.png"
                alt="iPhone 16 Camera"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                width={400}
                height={500}
              />
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="glass-card glass-hover rounded-3xl overflow-hidden aspect-[4/3] relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 gallery-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 1.1 }
                }
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Image
                  src="/gallery/Esthetic iPhone 15 Pro.jpeg"
                  alt="iPhone 16 Display"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width={400}
                  height={300}
                />
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="glass-card glass-hover rounded-3xl overflow-hidden aspect-square relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 gallery-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 1.1 }
                  }
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <Image
                    src="/gallery/gm2.jpeg"
                    alt="iPhone 16 Titanium Detail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    width={300}
                    height={300}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="glass-card glass-hover rounded-3xl overflow-hidden aspect-square relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 gallery-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 1.1 }
                  }
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <Image
                    src="/gallery/gm3.jpeg"
                    alt="iPhone 16 Titanium Detail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    width={300}
                    height={300}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute top-40 -left-10 w-20 h-20 gallery-orb-small-1"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 -right-10 w-16 h-16 gallery-orb-small-2"
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <style jsx global>{`
        .gallery-bg {
          background: linear-gradient(135deg, #000000, #000000, #0a0a0a08);
        }
        
        .gallery-orb-1 {
          background: #f43f5e0d;
          border-radius: 50%;
          filter: blur(48px);
        }
        
        .gallery-orb-2 {
          background: #3b82f60d;
          border-radius: 50%;
          filter: blur(48px);
        }
        
        .gallery-title-gradient {
          background: linear-gradient(to right, #ffffff, #6b7280);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .gallery-overlay {
          background: linear-gradient(to top, #00000033, transparent);
        }
        
        .gallery-orb-small-1 {
          background: #f43f5e1a;
          border-radius: 50%;
          filter: blur(16px);
        }
        
        .gallery-orb-small-2 {
          background: #3b82f61a;
          border-radius: 50%;
          filter: blur(16px);
        }
      `}</style>
    </section>
  );
};

export default Gallery;