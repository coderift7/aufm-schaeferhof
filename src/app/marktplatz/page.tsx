import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import { siteConfig } from "@/config/site";
import { href, img } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Marktplatz – ${siteConfig.name}`,
  description:
    "Tiere vom Schäferhof suchen ein neues Zuhause: Schafe aus unserer Herdbuch-A-Linie, mit Stammbaum, gepflegten Klauen und ehrlicher Geschichte.",
};

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
      {
        label: "Vater",
        value: "Ikarus — Sohn des schwedischen Bockes Ragnar",
      },
    ],
    preis: "Preis auf Anfrage",
  },
];

const statusLabel: Record<Listing["status"], string> = {
  verfuegbar: "Sucht ein Zuhause",
  reserviert: "Reserviert",
  vermittelt: "Vermittelt",
};

export default function Marktplatz() {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <Header solid />
      <section className="relative isolate min-h-[72svh] overflow-hidden border-b border-primary/15">
        <Image
          src={img("/fotos/marktplatz/marktplatz-hero.webp")}
          alt="Schafe auf der Weide am Futtertrog"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% 52%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/86 via-background/56 to-background/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 260 260' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative mx-auto flex min-h-[72svh] max-w-6xl items-end px-6 pb-14 pt-24 sm:px-8 sm:pb-20">
          <div className="max-w-4xl">
            <a
              href={href("/")}
              className="mb-12 inline-flex w-fit items-center gap-2 border-b border-primary/50 pb-1 text-sm font-semibold text-primary hover:border-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Startseite
            </a>

            <h1 className="border-y border-primary/20 py-7 font-heading text-[3.4rem] font-bold leading-[0.92] text-primary sm:text-8xl lg:text-[9.5rem]">
              Marktplatz
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <p className="text-lg leading-8 text-muted-foreground">
          Manchmal kommt der Punkt, an dem ein Tier weiterziehen darf — in
          einen neuen Garten, eine andere Herde, zu Menschen, die genau dieses
          eine Schaf gesucht haben. Wir möchten unsere Tiere nicht einfach
          »abgeben«, sondern weitergeben — mit allem, was ihre Geschichte
          ausmacht. Stammbaum, Charakter, Eigenheiten. Damit niemand bei Null
          anfängt.
        </p>
      </div>

      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-20 px-6 sm:space-y-24 sm:px-8">
          {listings.map((listing) => (
            <article
              key={listing.slug}
              id={listing.slug}
              className="relative border-y border-primary/20 py-10 sm:py-14"
            >
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-primary/15 pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Stellenanzeige
                  </p>
                  <h2 className="mt-2 font-heading text-3xl font-bold leading-tight text-primary sm:text-4xl">
                    {listing.name} — bewirbt sich um Weide, Menschen und Herde
                  </h2>
                </div>
                <p className="inline-flex items-center border-2 border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {statusLabel[listing.status]}
                </p>
              </div>

              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <figure className="relative border border-primary/20 bg-background p-3 shadow-[8px_8px_0_rgba(166,124,82,0.22)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img(`/fotos/marktplatz/${listing.image}`)}
                        alt={`${listing.name} – ${listing.tagline}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                        style={
                          listing.imagePosition
                            ? { objectPosition: listing.imagePosition }
                            : undefined
                        }
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
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      Meine Qualifikationen
                    </h3>
                    <ul className="mt-5 flex flex-wrap gap-3">
                      {listing.qualifications.map((q) => (
                        <li
                          key={q}
                          className="max-w-full border border-primary/25 bg-background px-4 py-3 text-sm font-semibold leading-6 text-primary shadow-[3px_3px_0_rgba(59,38,24,0.10)] sm:max-w-[calc(50%-0.375rem)]"
                        >
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-12">
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      Lebenslauf
                    </h3>
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
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                          Konditionen
                        </p>
                        <p className="mt-1 font-heading text-2xl font-bold text-primary">
                          {listing.preis}
                        </p>
                        <p className="mt-1 text-sm text-foreground">
                          Fragen? Immer gerne — ich bin kommunikativ.
                        </p>
                      </div>
                      <a
                        href={href(`/#kontakt`)}
                        className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-background transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-muted"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Anfrage zu {listing.name}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          Wie eine Vermittlung bei uns abläuft
        </h2>
        <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
          Wir geben unsere Tiere nicht an die Erstbeste oder den Erstbesten ab.
          Ein kurzes Kennenlernen gehört dazu — gerne bei uns auf dem Hof,
          gerne in eurem Garten. Wir wollen wissen, wo unsere Tiere landen,
          und ihr sollt wissen, was ihr bekommt. So ein Schaf bleibt schließlich
          viele Jahre.
        </p>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          Bei Interesse einfach kurz schreiben — am liebsten mit zwei, drei
          Sätzen, wer ihr seid, wo das Tier hin soll und was ihr schon an
          Erfahrung mit Schafen mitbringt. Alles weitere klären wir dann
          persönlich.
        </p>
      </div>
    </div>
  );
}
