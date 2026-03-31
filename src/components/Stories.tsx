"use client";

import { siteConfig } from "@/config/site";
import { img } from "@/lib/utils";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

export default function Stories() {
  const { stories } = siteConfig;

  return (
    <section id="hofgeschichten" className="relative bg-muted/40 py-28 lg:py-36">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-warm">
              {stories.tagline}
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              {stories.headline}
            </h2>
          </div>
        </Reveal>

        <StaggerContainer className="mt-14 space-y-6" staggerDelay={0.1}>
          {stories.items.map((story, i) => (
            <StaggerItem key={i}>
              <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                {story.images && story.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-px bg-border">
                    {story.images.map((image, j) => (
                      <div key={j} className="aspect-[4/3] overflow-hidden bg-muted">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img(image.src)}
                          alt={image.alt}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div className="p-8 sm:p-10">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-warm/10 px-3 py-1 text-xs font-medium text-warm">
                      {story.year}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-primary sm:text-xl">
                      {story.title}
                    </h3>
                  </div>
                  <p className="text-base leading-[1.8] text-muted-foreground sm:text-lg">
                    {story.text}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
