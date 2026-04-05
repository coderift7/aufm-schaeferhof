"use client";

import { siteConfig } from "@/config/site";
import { img } from "@/lib/utils";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";

export default function History() {
  const { history } = siteConfig;

  return (
    <section id="das-guteschaf" className="relative bg-background py-28 lg:py-36">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-warm">
              {history.tagline}
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              {history.headline}
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              {history.intro}
            </p>
          </div>
        </Reveal>

        {/* Content rows */}
        <div className="mt-16 space-y-20 lg:space-y-28">
          {history.sections.map((section, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-10 lg:gap-14 ${
                section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Text */}
              <Reveal
                variants={section.reverse ? slideFromRight : slideFromLeft}
                className="flex-1"
              >
                <h3 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
                  {section.title}
                </h3>
                <div className="mt-4 space-y-4 text-base leading-[1.8] text-muted-foreground sm:text-lg">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </Reveal>

              {/* Image */}
              <Reveal
                variants={section.reverse ? slideFromLeft : slideFromRight}
                delay={0.15}
                className="flex-1"
              >
                <div className="overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img(section.image.src)}
                    alt={section.image.alt}
                    className={`w-full transition-transform duration-500 hover:scale-105 ${
                      section.image.portrait
                        ? "h-auto max-h-[500px] object-contain"
                        : "aspect-[4/3] object-cover"
                    }`}
                    loading="lazy"
                  />
                </div>
                {section.image.credit && (
                  <p className="mt-2 text-right text-xs text-muted-foreground/60">
                    <a href="/bildnachweis" className="hover:text-warm transition-colors">
                      Foto #{section.image.credit}
                    </a>
                  </p>
                )}
              </Reveal>
            </div>
          ))}
        </div>

        {/* Linné Quote */}
        <Reveal>
          <blockquote className="mx-auto mt-20 max-w-3xl rounded-r-2xl border-l-4 border-warm bg-card p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:p-10">
            <p className="font-heading text-base leading-[1.8] italic text-primary sm:text-lg">
              {history.quote.text}
            </p>
            <cite className="mt-4 block text-sm not-italic text-warm">
              — {history.quote.attribution}
            </cite>
          </blockquote>
        </Reveal>

        {/* Author credit */}
        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl border-t border-border pt-6 text-center text-sm text-muted-foreground/70">
            {history.author}
          </p>
        </Reveal>

        {/* Downloads */}
        {history.downloads.length > 0 && (
          <Reveal>
            <div className="mx-auto mt-16 max-w-2xl">
              <h3 className="text-center font-heading text-lg font-semibold text-primary sm:text-xl">
                Dokumente zum Herunterladen
              </h3>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                {history.downloads.map((dl, i) => (
                  <a
                    key={i}
                    href={img(dl.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted/60 text-xl">
                      📋
                    </span>
                    <div>
                      <span className="block text-sm font-semibold text-primary">
                        {dl.title}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {dl.meta}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
