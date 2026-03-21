"use client";

import { siteConfig } from "@/config/site";
import { Reveal } from "./Motion";

export default function About() {
  return (
    <section id="ueber-uns" className="relative bg-background py-28 lg:py-36">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-warm">
              Über uns
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              {siteConfig.about.headline}
            </h2>
            <p className="mt-8 text-base leading-[1.8] text-muted-foreground sm:text-lg">
              {siteConfig.about.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
