"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Feature = () => {
  const features = [
    {
      image: "/image/_ (1).jpeg",
      alt: "titanium",
      title: "Aerospace-Grade Titanium",
      description: "Crafted from the same alloy used in spacecraft, offering unparalleled strength-to-weight ratio.",
      features: ["Lightweight yet incredibly durable", "Corrosion resistant", "Premium matte finish"],
      gradientClass: "feature-gradient-1"
    },
    {
      image: "/image/iPhone 16.jpeg",
      alt: "new look iphone",
      title: "Revolutionary Design",
      description: "The thinnest and lightest Pro model ever, with an all-new contoured edge design.",
      features: ["Ergonomic contoured edges", "Thinnest bezels in smartphone history", "Four stunning finishes"],
      gradientClass: "feature-gradient-2",
      reverse: true
    },
    {
      image: "/image/How to enable Apple Intelligence on your iPhone.jpeg",
      alt: "apple intelligence",
      title: "Apple Intelligence",
      description: "The most personal and powerful AI system, integrated throughout your iPhone.",
      features: ["On-device processing", "Contextual awareness", "Personalized assistance"],
      gradientClass: "feature-gradient-3"
    },
    {
      image: "/image/_.jpeg",
      alt: "A18 chip",
      title: "A18 Pro Chip",
      description: "The most powerful chip ever in a smartphone, with breakthrough performance and efficiency.",
      features: ["6-core GPU for pro graphics", "16-core Neural Engine", "Industry-leading efficiency"],
      gradientClass: "feature-gradient-4",
      reverse: true
    },
    {
      image: "/image/cam.jpeg",
      alt: "cam system",
      title: "Pro Camera System",
      description: "Our most advanced camera system with computational photography breakthroughs.",
      features: ["48MP Main camera", "5x Telephoto zoom", "Photonic Engine"],
      gradientClass: "feature-gradient-5"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.header 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 lg:mb-24 relative"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-20 -left-20 w-40 h-40"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 feature-main-title">
          Engineered for
          <br /> Excellence
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto relative z-10">
          Every detail meticulously crafted to deliver an unparalleled experience
        </p>
      </motion.header>

      <div className="w-full max-w-7xl mx-auto space-y-32 lg:space-y-48">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 ${
              feature.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="lg:w-1/2 flex justify-center relative">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                <div className={`absolute inset-0 ${feature.gradientClass} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl relative z-10 transform transition-all duration-500 group-hover:shadow-2xl"
                />
                <div className="absolute inset-0 feature-image-overlay rounded-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>

            <div className="lg:w-1/2 text-center lg:text-left space-y-6 relative">
              <motion.div
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className={`w-2 h-2 rounded-full ${feature.gradientClass.replace('feature-gradient', 'feature-dot')}`} />
                  <span className="text-sm font-medium text-gray-300">Feature {index + 1}</span>
                </div>

                <h3 className={`text-4xl sm:text-5xl font-bold ${feature.gradientClass}`}>
                  {feature.title}
                </h3>

                <p className="text-xl text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: feature.reverse ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-lg text-gray-400"
                    >
                      <div className={`w-6 h-6 rounded-full ${feature.gradientClass} flex items-center justify-center`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${feature.gradientClass} text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl mt-6`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        .feature-main-title {
          background: linear-gradient(to right, #ffffff, #fecaca, #fed7aa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .feature-gradient-1 {
          background: linear-gradient(to right, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .feature-gradient-2 {
          background: linear-gradient(to right, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .feature-gradient-3 {
          background: linear-gradient(to right, #10b981, #10b981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .feature-gradient-4 {
          background: linear-gradient(to right, #f97316, #ef4444);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .feature-gradient-5 {
          background: linear-gradient(to right, #6b7280, #6b7280);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .feature-dot-1 {
          background: linear-gradient(to right, #3b82f6, #06b6d4);
        }
        
        .feature-dot-2 {
          background: linear-gradient(to right, #8b5cf6, #ec4899);
        }
        
        .feature-dot-3 {
          background: linear-gradient(to right, #10b981, #10b981);
        }
        
        .feature-dot-4 {
          background: linear-gradient(to right, #f97316, #ef4444);
        }
        
        .feature-dot-5 {
          background: linear-gradient(to right, #6b7280, #6b7280);
        }
        
        .feature-image-overlay {
          background: linear-gradient(to top, #00000080, transparent);
        }
      `}</style>
    </section>
  );
};

export default Feature;