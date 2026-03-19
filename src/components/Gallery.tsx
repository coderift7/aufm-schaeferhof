"use client";

import { img } from "@/lib/utils";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

const images = [
  { src: "/images/herde-weide.jpg", alt: "Guteschafe auf der Weide" },
  { src: "/images/bock-weide.jpg", alt: "Zuchtbock auf der Weide" },
  { src: "/images/hof-garten.jpg", alt: "Kräuterspirale auf dem Schäferhof" },
  { src: "/images/hof-kutsche.jpg", alt: "Kutsche auf dem Schäferhof" },
];

export default function Gallery() {
  return (
    <section id="hof" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Impressionen
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Leben auf&apos;m Schäferhof
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Ganzjährige Freilandhaltung, viel Platz und ein naturnahes Zuhause
              für unsere Guteschafe im Oldenburger Münsterland.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2" staggerDelay={0.1}>
          {images.map((image, i) => (
            <StaggerItem key={i}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(image.src)}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
