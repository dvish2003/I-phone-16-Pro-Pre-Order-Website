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
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      image: "/image/iPhone 16.jpeg",
      alt: "new look iphone",
      title: "Revolutionary Design",
      description: "The thinnest and lightest Pro model ever, with an all-new contoured edge design.",
      features: ["Ergonomic contoured edges", "Thinnest bezels in smartphone history", "Four stunning finishes"],
      gradient: "from-purple-500 to-pink-500",
      reverse: true
    },
    {
      image: "/image/How to enable Apple Intelligence on your iPhone.jpeg",
      alt: "apple intelligence",
      title: "Apple Intelligence",
      description: "The most personal and powerful AI system, integrated throughout your iPhone.",
      features: ["On-device processing", "Contextual awareness", "Personalized assistance"],
      gradient: "from-green-500 to-emerald-400"
    },
    {
      image: "/image/_.jpeg",
      alt: "A18 chip",
      title: "A18 Pro Chip",
      description: "The most powerful chip ever in a smartphone, with breakthrough performance and efficiency.",
      features: ["6-core GPU for pro graphics", "16-core Neural Engine", "Industry-leading efficiency"],
      gradient: "from-orange-500 to-red-500",
      reverse: true
    },
    {
      image: "/image/cam.jpeg",
      alt: "cam system",
      title: "Pro Camera System",
      description: "Our most advanced camera system with computational photography breakthroughs.",
      features: ["48MP Main camera", "5x Telephoto zoom", "Photonic Engine"],
      gradient: "from-gray-700 to-gray-500"
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-rose-100 to-orange-200 bg-clip-text text-transparent">
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
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl relative z-10 transform transition-all duration-500 group-hover:shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                  <span className="text-sm font-medium text-gray-300">Feature {index + 1}</span>
                </div>

                <h3 className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
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
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${feature.gradient} text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl mt-6`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <div className="bg-gradient-to-r from-rose-500/10 via-orange-400/10 to-amber-500/10 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Experience Innovation?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join millions of users who have already discovered the future of smartphone technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-rose-500 to-orange-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-rose-500/25"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 hover:border-white/50 text-white font-medium px-8 py-4 rounded-2xl transition-all duration-300 backdrop-blur-sm"
            >
              Watch Demo
            </motion.button>
          </div>
        </div>
      </motion.div> */}
    </section>
  );
};

export default Feature;