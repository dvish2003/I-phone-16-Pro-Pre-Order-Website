"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function AppleSlug() {
  return (
    <section className="py-20 md:py-32 relative h-auto flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center items-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/icons/_ (1).jpeg"
            alt="Apple IOS 26 Release"
            width={160}
            height={160}
            className="w-28 md:w-40 rounded-2xl shadow-lg"
          />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-titanium via-accent to-primary bg-clip-text text-transparent"
      >
        Apple iOS 26 <br className="hidden md:block" /> Release
      </motion.h1>
    </section>
  );
}

export default AppleSlug;
