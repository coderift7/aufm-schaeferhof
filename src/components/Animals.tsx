"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { siteConfig } from "@/config/site";
import { img } from "@/lib/utils";
import { Reveal, motion } from "./Motion";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Animal = { name: string; src: string; alt: string };
type Slide = Animal & { status: "aktuell" | "ehemalig" };

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function Animals() {
  const { animals } = siteConfig;
  const [catIndex, setCatIndex] = useState(0);
  const [[slideIndex, direction], setSlideIndex] = useState([0, 0]);

  const category = animals.categories[catIndex];

  // Build flat slide list: sheep → current first, others → former first
  const slides: Slide[] = useMemo(
    () =>
      catIndex === 0
        ? [
            ...category.current.map((a) => ({ ...a, status: "aktuell" as const })),
            ...category.former.map((a) => ({ ...a, status: "ehemalig" as const })),
          ]
        : [
            ...category.former.map((a) => ({ ...a, status: "ehemalig" as const })),
            ...category.current.map((a) => ({ ...a, status: "aktuell" as const })),
          ],
    [category, catIndex]
  );

  const paginate = useCallback(
    (dir: number) => {
      setSlideIndex(([prev]) => {
        const next = (prev + dir + slides.length) % slides.length;
        return [next, dir];
      });
    },
    [slides.length]
  );

  // Reset slide when switching category
  const switchCategory = useCallback((i: number) => {
    setCatIndex(i);
    setSlideIndex([0, 0]);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [paginate]);

  const current = slides[slideIndex];

  return (
    <section id="unsere-tiere" className="relative py-28 lg:py-36">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-warm">
              {animals.tagline}
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              {animals.headline}
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14">
            {/* Category tabs */}
            <div className="mb-8 flex justify-center gap-2">
              {animals.categories.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => switchCategory(i)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    i === catIndex
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-border"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Image container */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`${catIndex}-${slideIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-[400px] items-center justify-center sm:h-[500px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img(current.src)}
                    alt={current.alt}
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                onClick={() => paginate(-1)}
                className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-colors hover:bg-white"
                aria-label="Vorheriges Tier"
              >
                <ChevronLeft className="h-5 w-5 text-primary" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-colors hover:bg-white"
                aria-label="Nächstes Tier"
              >
                <ChevronRight className="h-5 w-5 text-primary" />
              </button>
            </div>

            {/* Name + Status */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${catIndex}-${slideIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-5 flex items-center justify-center gap-3"
              >
                <span className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                  {current.name}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                    current.status === "aktuell"
                      ? "bg-warm/10 text-warm"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {current.status === "aktuell"
                    ? "Aktuelle Herde"
                    : "Ehemalig"}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="mt-5 flex justify-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.name}
                  onClick={() => setSlideIndex([i, i > slideIndex ? 1 : -1])}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === slideIndex
                      ? "w-6 bg-warm"
                      : "w-2 bg-border hover:bg-warm/40"
                  }`}
                  aria-label={`${slide.name} anzeigen`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
