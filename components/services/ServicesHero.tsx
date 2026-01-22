"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-b from-[#0b2f2a] to-[#071e1b]">
      {/* HERO CONTENT */}
      <div className="container mx-auto px-6 h-full">
        <div className="grid md:grid-cols-2 h-[90vh] items-center gap-16">
          {/* ================= LEFT TEXT (TRUE CENTER) ================= */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-sm tracking-widest text-green-300 mb-4 pl-12"
            >
              OUR SERVICES
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl md:text-5xl font-light text-white leading-tight mb-6 pl-12"
            >
              Designing Spaces That Elevate <br />
              Everyday Living
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-base md:text-lg text-gray-300 max-w-lg pl-12"
            >
              Premium interior and architectural solutions thoughtfully crafted
              for modern Indian homes and commercial spaces.
            </motion.p>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative flex items-center justify-center h-full"
          >
            {/* Ambient glow */}
            <div className="absolute w-[80%] h-[80%] bg-green-400/20 blur-3xl rounded-full" />

            {/* Image wrapper */}
            <div className="relative w-full max-w-[520px] flex items-center justify-center pt-18">
              <Image
                src="/images/services_hero.gif"
                alt="Architectural Design Services"
                width={400}
                height={400}
                priority
                className="object-contain max-h-[520px] rounded-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
