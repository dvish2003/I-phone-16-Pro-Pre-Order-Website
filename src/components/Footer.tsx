"use client";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/20 rounded-full blur-[100px]"
          />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              The Future is
              <br />
              <span className="bg-gradient-to-r from-titanium via-accent to-primary bg-clip-text text-transparent">
                Titanium
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2"
            >
              Pre-order now and be among the first to experience the most
              advanced iPhone ever created.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg py-3 sm:py-4 px-8 sm:px-12 rounded-full transition-all"
              >
                Pre-Order iPhone 16
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card glass-hover text-base sm:text-lg py-3 sm:py-4 px-8 sm:px-12 bg-transparent rounded-full border border-border hover:bg-white/5 transition-all"
              >
                Contact Sales
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="mt-16 md:mt-20 text-center text-xs sm:text-sm text-muted-foreground px-4">
        <p>© 2025 iPhone 16. All rights reserved.</p>
      </footer>
    </section>
  );
}
