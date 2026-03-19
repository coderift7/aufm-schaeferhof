"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { img } from "@/lib/utils";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";

export default function Zucht() {
  const { zucht } = siteConfig;

  return (
    <section id="zucht" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Zucht & Verkauf
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {zucht.headline}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {zucht.text}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          {/* Selling info */}
          <Reveal variants={slideFromLeft} delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-7 sm:p-8">
              <h3 className="font-heading text-xl font-bold text-primary">
                {zucht.selling.headline}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {zucht.selling.text}
              </p>
              <ul className="mt-6 space-y-3">
                {zucht.selling.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 mt-0.5">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-warm px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-warm/90"
              >
                Jetzt anfragen
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          {/* Zuchtbock auf der Weide */}
          <Reveal variants={slideFromRight} delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img("/images/bock-weide.jpg")}
                alt="Guteschaf-Zuchtbock auf der Weide"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
