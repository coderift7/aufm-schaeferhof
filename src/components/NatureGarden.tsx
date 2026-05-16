"use client";

import { CheckCircle2, Leaf, Sprout } from "lucide-react";
import { img } from "@/lib/utils";
import { Reveal } from "./Motion";

const stations = [
  {
    title: "Sandarium",
    file: "sandarium.webp",
    alt: "Sandarium mit Steinen, Sandflächen und trockenheitsliebenden Pflanzen",
    note: "Lebensräume wie Steinhaufen und Sandarium für Insekten",
    className: "lg:col-span-7",
  },
  {
    title: "Gartenhexe",
    file: "gartenhexe.webp",
    alt: "Gartenhexe aus Totholz und Reisig als Lebensraum für Kleintiere",
    note: "Nützlingsunterkünfte für fleißige Helfer",
    className: "lg:col-span-5 lg:row-span-2",
    portrait: true,
  },
  {
    title: "Käferburg",
    file: "kaeferburg.webp",
    alt: "Käferburg aus Holzstämmen, Sand und Erde",
    note: "Strauchhecken und Gehölze als Versteck und Nahrung für Vögel",
    className: "lg:col-span-4",
  },
  {
    title: "Kräuterspirale",
    file: "kraeuterspirale.webp",
    alt: "Kräuterspirale aus Natursteinen im Garten",
    note: "Obst- und Gemüsegarten für die Selbstversorgung",
    className: "lg:col-span-3",
  },
];

const principles = [
  "ohne chemisch-synthetische Pestizide",
  "ohne chemische Dünger",
  "ohne Torf",
];

export default function NatureGarden() {
  return (
    <section id="naturgarten" className="relative bg-background py-28 lg:py-36">
      <div className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-12">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-warm">
                Naturgarten · ausgezeichnet seit 2024
              </span>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Unser Garten — ein Stück Naturparadies
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.8] text-muted-foreground sm:text-lg">
                Wo Natur und Herzblut wachsen: unser „Natur im Garten“-zertifizierter
                Garten.
              </p>
              <p className="mt-5 max-w-xl text-base leading-[1.8] text-muted-foreground sm:text-lg">
                Willkommen in unserem kleinen grünen Refugium mitten in
                Niedersachsen! Hier, zwischen blühenden Wildblumen, summenden
                Bienen und dem sanften Blöken unserer Schafe ist ein Ort
                entstanden, der nicht nur uns, sondern auch der heimischen Tier-
                und Pflanzenwelt ein Zuhause gibt.
              </p>
            </div>

            <figure className="overflow-hidden border border-primary/20 bg-card shadow-[8px_8px_0_rgba(166,124,82,0.18)]">
              <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img("/fotos/natur-im-garten/natur-im-garten-hero.webp")}
                  alt="Natur im Garten Plakette am Gartenzaun auf dem Schäferhof"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent p-5 text-white sm:p-6">
                  <p className="max-w-lg font-heading text-xl font-bold leading-tight sm:text-2xl">
                    Unser Garten ist kein perfekt getrimmter Ziergarten,
                    sondern ein lebendiges Biotop.
                  </p>
                </div>
              </div>
            </figure>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle}
                className="border-y border-primary/20 py-4 text-sm font-semibold leading-6 text-primary"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-warm" aria-hidden="true" />
                {principle}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-14">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="border-l-4 border-warm bg-card px-6 py-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <Leaf className="h-8 w-8 text-warm" aria-hidden="true" />
              <h3 className="mt-5 font-heading text-2xl font-bold text-primary">
                Was unseren Garten besonders macht
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Hier wachsen Obstbäume neben Wildblumenwiese, Kräuterspirale
                und Gemüsebeeten. Bisweilen helfen uns unsere Schafe beim Mähen
                der Wiese — ganz ohne Lärm oder Abgase! Ihre Wolle ist eine
                wertvolle Ressource, die wir wieder in den Kreislauf als Dünger
                und Mulchmaterial zurückgeben.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Jedes dieser Elemente fördert die Biodiversität und verbessert
                das Mikroklima — und macht unseren Garten zu einem Ort, an dem
                wir jeden Tag etwas Neues entdecken können.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-12">
            {stations.map((station) => (
              <Reveal key={station.title} className={station.className}>
                <article className="group relative min-h-full overflow-hidden border border-primary/20 bg-muted">
                  <div
                    className={`relative ${
                      station.portrait
                        ? "aspect-[4/5] min-h-[32rem]"
                        : "aspect-[4/3] min-h-[18rem]"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img(`/fotos/natur-im-garten/${station.file}`)}
                      alt={station.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/35 to-transparent p-5 text-white sm:p-6">
                      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                        <Sprout className="h-4 w-4" aria-hidden="true" />
                        Lebensraum
                      </p>
                      <h3 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">
                        {station.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-6 text-white/85">
                        {station.note}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl border-y border-primary/20 py-8 text-center">
            <p className="font-heading text-xl font-semibold leading-8 text-primary sm:text-2xl">
              Unser Garten ist mehr als nur ein Stück Land. Er ist ein Ort der
              Ruhe, der Inspiration und des Miteinanders.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Und er erinnert uns jeden Tag daran, dass wir alle Teil dieser
              wunderbaren Natur sind — und die Verantwortung haben, sie zu
              schützen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
