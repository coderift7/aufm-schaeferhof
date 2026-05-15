"use client";

import { img } from "@/lib/utils";
import { Reveal } from "./Motion";

type Listing = {
  slug: string;
  name: string;
  tagline: string;
  status: "verfuegbar" | "reserviert" | "vermittelt";
  image: string;
  imagePosition?: string;
  intro: string;
  qualifications: string[];
  lebenslauf: { label: string; value: string | string[] }[];
  preis: string;
};

const listings: Listing[] = [
  {
    slug: "bambi",
    name: "Bambi",
    tagline: "Die Landschaftspflege-Expertin mit Charme sucht neues Zuhause",
    status: "verfuegbar",
    image: "bambi.webp",
    imagePosition: "50% 65%",
    intro:
      "Hallo liebe Schafsfreunde und Hobby-Landschaftsgärtner! Ich bin Bambi, ein Herdbuch-A-Guteschaf (auch bekannt als »Gehörntes Gotlandschaf«) — und ich bin auf Jobsuche. Nach meiner erfolgreichen Ausbildung in der Landschaftspflege bei meinen aktuellen Menschen suche ich nun neue Weidegründe und ein tolles Zuhause, wo ich meine Fähigkeiten einbringen kann.",
    qualifications: [
      "Professionelle Brennnessel-, Ampfer- und Distel-Vernichterin — ich mache jedem Unkraut den Garaus.",
      "Zauntreu — ich bleibe, wo ich hingehöre.",
      "Handzahm und freundlich — ich bin ein echter Schmusebär (oder besser: Schmuseschaf).",
      "Erfolgreiche Mutter — ich habe immer schönen Nachwuchs gebracht.",
      "Gepflegte Klauen und entwurmt — ich komme topfit und einsatzbereit.",
    ],
    lebenslauf: [
      { label: "Geboren am", value: "4. April 2021" },
      { label: "Rasse", value: ["Herdbuch-A-Guteschaf", "(Gehörntes Gotlandschaf)"] },
      { label: "Mutter", value: "Aus der Müritz" },
      { label: "Vater", value: "Ikarus — Sohn des schwedischen Bockes Ragnar" },
    ],
    preis: "Preis auf Anfrage",
  },
];

const statusLabel: Record<Listing["status"], string> = {
  verfuegbar: "Sucht ein Zuhause",
  reserviert: "Reserviert",
  vermittelt: "Vermittelt",
};

export default function Marketplace() {
  return (
    <section id="marktplatz" className="relative bg-card py-28 lg:py-36">
      <div className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-warm">
              Vom Hof in gute Hände
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Marktplatz
            </h2>
            <p className="mt-6 text-base leading-[1.8] text-muted-foreground sm:text-lg">
              Manchmal kommt der Punkt, an dem ein Tier weiterziehen darf — in
              einen neuen Garten, eine andere Herde, zu Menschen, die genau
              dieses eine Schaf gesucht haben. Wir möchten unsere Tiere nicht
              einfach »abgeben«, sondern weitergeben: mit Herkunft, Charakter,
              Eigenheiten und allem, was dazugehört.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-20 sm:mt-20">
          {listings.map((listing) => (
            <Reveal key={listing.slug}>
              <article
                id={listing.slug}
                className="relative border-y border-primary/20 py-10 sm:py-14"
              >
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-primary/15 pb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                      Aktuelles Inserat
                    </p>
                    <h3 className="mt-2 font-heading text-3xl font-bold leading-tight text-primary sm:text-4xl">
                      {listing.name} — bewirbt sich um Weide, Menschen und Herde
                    </h3>
                  </div>
                  <p className="inline-flex items-center border-2 border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {statusLabel[listing.status]}
                  </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
                  <div className="lg:sticky lg:top-24 lg:self-start">
                    <figure className="relative border border-primary/20 bg-background p-3 shadow-[8px_8px_0_rgba(166,124,82,0.22)]">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img(`/fotos/marktplatz/${listing.image}`)}
                          alt={`${listing.name} – ${listing.tagline}`}
                          className="h-full w-full object-cover"
                          style={
                            listing.imagePosition
                              ? { objectPosition: listing.imagePosition }
                              : undefined
                          }
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="mt-3 grid grid-cols-[auto_1fr] gap-3 border-t border-primary/15 pt-3 text-sm leading-6 text-muted-foreground">
                        <span className="font-heading text-2xl leading-none text-primary">
                          01
                        </span>
                        <span>{listing.tagline}</span>
                      </figcaption>
                    </figure>

                    <div className="mt-7 border-l-4 border-primary bg-muted px-5 py-4">
                      <p className="font-heading text-xl font-semibold text-primary">
                        Kurzprofil
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground">
                        Herdbuch-A-Guteschaf, erfahren in Landschaftspflege,
                        handzahm, muttererprobt und bereit für die nächste gute
                        Aufgabe.
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-heading text-2xl italic leading-10 text-primary sm:text-3xl">
                      {listing.tagline}
                    </p>

                    <p className="mt-7 text-base leading-7 text-muted-foreground sm:text-lg">
                      {listing.intro}
                    </p>

                    <div className="mt-12">
                      <h4 className="font-heading text-xl font-semibold text-primary">
                        Meine Qualifikationen
                      </h4>
                      <ul className="mt-5 flex flex-wrap gap-3">
                        {listing.qualifications.map((qualification) => (
                          <li
                            key={qualification}
                            className="max-w-full border border-primary/25 bg-background px-4 py-3 text-sm font-semibold leading-6 text-primary shadow-[3px_3px_0_rgba(59,38,24,0.10)] sm:max-w-[calc(50%-0.375rem)]"
                          >
                            {qualification}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-12">
                      <h4 className="font-heading text-xl font-semibold text-primary">
                        Lebenslauf
                      </h4>
                      <dl className="mt-5 border-y border-primary/20">
                        {listing.lebenslauf.map((row) => (
                          <div
                            key={row.label}
                            className="grid grid-cols-1 gap-1 border-b border-primary/10 py-4 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
                          >
                            <dt className="text-xs font-bold uppercase tracking-[0.18em] text-primary/70">
                              {row.label}
                            </dt>
                            <dd className="text-base leading-7 text-foreground sm:text-lg">
                              {Array.isArray(row.value)
                                ? row.value.map((line) => (
                                    <span key={line} className="block">
                                      {line}
                                    </span>
                                  ))
                                : row.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="mt-12 border-2 border-primary bg-muted px-5 py-5 sm:px-7 sm:py-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                        Konditionen
                      </p>
                      <p className="mt-1 font-heading text-2xl font-bold text-primary">
                        {listing.preis}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground">
                        Bei Interesse gerne mit zwei, drei Sätzen melden: wer
                        ihr seid, wo das Tier hin soll und welche Erfahrung mit
                        Schafen schon vorhanden ist.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-16 max-w-4xl border-t border-primary/15 pt-12 sm:mt-20">
            <h3 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Wie eine Vermittlung bei uns abläuft
            </h3>
            <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
              Wir geben unsere Tiere nicht an die Erstbeste oder den Erstbesten
              ab. Ein kurzes Kennenlernen gehört dazu — gerne bei uns auf dem
              Hof, gerne in eurem Garten. Wir wollen wissen, wo unsere Tiere
              landen, und ihr sollt wissen, was ihr bekommt. So ein Schaf
              bleibt schließlich viele Jahre.
            </p>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              Alles Weitere klären wir persönlich und in Ruhe. Wichtig ist vor
              allem, dass Tier, Platz und Menschen gut zusammenpassen.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
