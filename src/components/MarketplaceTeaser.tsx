"use client";

import { ArrowRight } from "lucide-react";
import { href, img } from "@/lib/utils";
import { Reveal } from "./Motion";

export default function MarketplaceTeaser() {
  return (
    <section id="marktplatz" className="relative bg-card py-28 lg:py-36">
      <div className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <figure className="relative border-y border-primary/20 py-4">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img("/fotos/marktplatz/marktplatz-hero.webp")}
                  alt="Schafe auf der Weide am Futtertrog"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "62% 52%" }}
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-primary/15 pt-4 text-sm text-muted-foreground">
                <span className="font-heading text-xl font-semibold text-primary">
                  Aktuell vom Hof
                </span>
                <span className="border border-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Sucht ein Zuhause
                </span>
              </figcaption>
            </figure>

            <div>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-warm">
                Vom Hof in gute Hände
              </span>
              <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
                Marktplatz
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-[1.8] text-muted-foreground sm:text-lg">
                Wenn eines unserer Tiere ein neues Zuhause sucht, sammeln wir
                hier die wichtigsten Informationen: Herkunft, Charakter,
                Besonderheiten und den direkten Kontakt zum Hof.
              </p>
              <a
                href={href("/marktplatz/")}
                className="mt-9 inline-flex items-center gap-2 border-b border-primary/50 pb-1 text-sm font-semibold text-primary transition-colors hover:border-primary hover:text-warm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-card"
              >
                Zum Marktplatz
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
