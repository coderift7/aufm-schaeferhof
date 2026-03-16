"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-primary">
      {/* Warm green gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_60%,rgba(161,98,7,0.12),transparent)]" />

      {/* Subtle organic texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-32 sm:px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-white/80">
              Seltene Rasse seit Jahrhunderten — aus Gotland nach Niedersachsen
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="font-heading text-[2.75rem] font-bold leading-[1.1] text-white whitespace-pre-line sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/65"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#kontakt"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-warm px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(161,98,7,0.3)] transition-all duration-150 hover:bg-warm/90 hover:-translate-y-0.5"
            >
              {hero.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#guteschafe"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/85 transition-all duration-150 hover:bg-white/[0.06] hover:text-white"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#guteschafe"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
        aria-label="Weiter scrollen"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
