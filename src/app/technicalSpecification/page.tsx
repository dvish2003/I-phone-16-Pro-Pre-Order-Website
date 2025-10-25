"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Specs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const specs = [
    { label: "Display", value: '6.7" Super Retina XDR' },
    { label: "Chip", value: "A18 Pro" },
    { label: "Camera", value: "48MP Pro System" },
    { label: "Battery", value: "Up to 29 hours video" },
    { label: "Storage", value: "Up to 1TB" },
    { label: "Material", value: "Titanium Frame" },
  ];

  const colors = [
    { name: "Natural Titanium", color: "spec-color-1" },
    { name: "Blue Titanium", color: "spec-color-2" },
    { name: "White Titanium", color: "spec-color-3" },
    { name: "Black Titanium", color: "spec-color-4" },
  ];

  return (
    <section id="specs" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Technical <br /> Specifications
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Cutting-edge technology meets premium craftsmanship.
            </motion.p>

            <div className="space-y-4 sm:space-y-6">
              {specs.map((spec, index) => (
                <motion.div
                  key={index}
                  className="flex justify-between items-center pb-4 border-b border-border text-sm sm:text-base"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <motion.span
                    className="font-semibold text-foreground"
                    whileHover={{ scale: 1.05 }}
                  >
                    {spec.value}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="glass-card rounded-3xl p-8 sm:p-10 md:p-12"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <motion.h3
              className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Available Colors
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {colors.map((color, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
                  whileHover={{ y: -6 }}
                >
                  <motion.div
                    className="glass-card glass-hover rounded-2xl p-6 md:p-8 mb-3 md:mb-4 relative overflow-hidden"
                    whileHover={{ boxShadow: "0 12px 25px rgba(0,0,0,0.1)" }}
                  >
                    <motion.div
                      className="spec-shine-overlay"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${color.color} mx-auto shadow-lg relative z-10`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    />
                  </motion.div>
                  <motion.p
                    className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {color.name}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .spec-color-1 {
          background: #8B8680;
        }
        
        .spec-color-2 {
          background: #4A5568;
        }
        
        .spec-color-3 {
          background: #E5E7EB;
        }
        
        .spec-color-4 {
          background: #1F2937;
        }
        
        .spec-shine-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, #ffffff33, transparent);
        }
      `}</style>
    </section>
  );
};

export default Specs;