// app/about/AboutHero.tsx
"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f2d26] to-[#0b1f1a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 pt-36 pb-40 text-center text-white"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="block text-sm tracking-[0.25em] uppercase text-gray-300 mb-6"
        >
          About Us
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto"
        >
          Designing Thoughtful Spaces for Modern Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Interior designers & architects in Mumbai crafting purposeful,
          timeless, and functional homes tailored to Indian lifestyles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 flex justify-center gap-5 flex-wrap"
        >
          <a
            href="/portfolio"
            className="px-8 py-3 rounded-full border border-white/60 hover:bg-white hover:text-black transition"
          >
            View Our Work
          </a>

          <a
            href="/contact"
            className="px-8 py-3 rounded-full bg-white text-black hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
