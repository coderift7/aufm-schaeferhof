"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { img } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden">
      {/* Full-bleed background — the sheep are the star */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img("/images/Foto_Hero.jpg")}
        alt="Guteschafe auf dem Schäferhof"
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Cinematic bottom gradient — keeps sheep faces clear */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

      {/* Content pinned to bottom with generous spacing */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-28 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="font-heading text-4xl font-bold leading-[1.05] text-white whitespace-pre-line sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-white/50 sm:text-base"
        >
          {hero.tagline}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#ueber-uns"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 transition-colors hover:text-white/50"
        aria-label="Weiter scrollen"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
