import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";
import { href, img } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Natur im Garten – ${siteConfig.name}`,
  description:
    "Auf'm Schäferhof ist seit 2024 als »Natur im Garten«-Betrieb in Niedersachsen ausgezeichnet. Wildblumenwiese, Sandarium, Käferburg, Gartenhexe und Kräuterspirale schaffen Lebensraum für Insekten, Vögel und Kleintiere.",
};

const highlights = [
  "Wildblumen- und Naturwiese für Bienen und Schmetterlinge",
  "Strauchhecken und Gehölze als Versteck und Nahrung für Vögel",
  "Nützlingsunterkünfte für fleißige Helfer",
  "Komposthaufen und Mulchflächen für gesunde Böden",
  "Obst- und Gemüsegarten für die Selbstversorgung",
  "Lebensräume wie Steinhaufen und Sandarium für Insekten",
];

const stations = [
  {
    title: "Sandarium",
    file: "sandarium.webp",
    description:
      "Offene Sandfläche als Nisthilfe für bodennistende Wildbienen. Über 75 % der heimischen Wildbienen brüten im Boden — ein Sandarium ist ihr Zuhause.",
  },
  {
    title: "Gartenhexe",
    file: "gartenhexe.webp",
    description:
      "Strukturreicher Totholz-Haufen für Insekten, Eidechsen und Igel. Die Gartenhexe wirkt unaufgeräumt — und ist gerade deshalb so wertvoll.",
  },
  {
    title: "Käferburg",
    file: "kaeferburg.webp",
    description:
      "Geschichtetes Eichenholz mit Sand und Erde. Lebensraum für Käferlarven, die mehrere Jahre im verrottenden Holz heranreifen.",
  },
  {
    title: "Kräuterspirale",
    file: "kraeuterspirale.webp",
    description:
      "Mehrzoniger Steinwall mit Kräutern aus Mittelmeer- bis Feuchtklima. Wärme, Trockenheit und Feuchtigkeit auf wenigen Quadratmetern.",
  },
];

export default function NaturImGarten() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[65vh] min-h-[26rem] w-full overflow-hidden">
        <Image
          src={img("/fotos/natur-im-garten/natur-im-garten-hero.webp")}
          alt="Natur im Garten auf'm Schäferhof"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/75" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-5xl px-6 pb-12 sm:px-8 sm:pb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
              Ausgezeichnet seit 2024
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Unser Garten — ein Stück Naturparadies
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Wo Natur und Herzblut wachsen: unser »Natur im Garten«-zertifizierter
              Garten in Niedersachsen.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <a
          href={href("/")}
          className="mb-10 inline-flex items-center gap-2 text-sm text-accent hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </a>

        <p className="text-lg leading-8 text-muted-foreground">
          Willkommen in unserem kleinen grünen Refugium mitten in Niedersachsen!
          Hier, zwischen blühenden Wildblumen, summenden Bienen und dem sanften
          Blöken unserer Schafe ist ein Ort entstanden, der nicht nur uns, sondern
          auch der heimischen Tier- und Pflanzenwelt ein Zuhause gibt.
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Seit 2024 dürfen wir uns über die »Natur im Garten«-Plakette freuen —
          eine Auszeichnung, die uns besonders stolz macht. Doch was steckt
          eigentlich hinter dieser Initiative? Und warum ist uns dieser Garten so
          wichtig? Kommt mit auf einen kleinen Rundgang durch unser
          Naturparadies!
        </p>
      </div>

      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Was »Natur im Garten« in Niedersachsen bedeutet
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            Die »Natur im Garten«-Plakette ist Teil einer großen Umweltschutz­bewegung,
            die in Niedersachsen vom Verein Gartenhorizonte e.V. getragen und vom
            Land unterstützt wird. Ziel ist es, Gärten und Grünflächen ökologisch
            zu gestalten — als Lebensräume für Menschen, Tiere und Pflanzen. Die
            Initiative versteht Gärten als Orte der Begegnung, Entspannung und
            Selbstversorgung, vor allem aber als Rückzugsorte für die Natur.
          </p>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Für uns ist die Plakette nicht nur eine Auszeichnung, sondern eine
            Bestätigung dafür, dass wir auf dem richtigen Weg sind: ohne
            chemisch-synthetische Pestizide, ohne chemische Dünger und ohne Torf.
            Stattdessen setzen wir auf natürliche Kreisläufe, heimische Pflanzen
            und ein Miteinander von Mensch und Tier.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          Unser Garten — ein Ort der Vielfalt
        </h2>
        <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
          Unser Garten ist kein perfekt getrimmter Ziergarten, sondern ein
          lebendiges Biotop. Hier wachsen Obstbäume neben Wildblumenwiese,
          Kräuterspirale und Gemüsebeeten. Bisweilen helfen uns unsere Schafe
          beim Mähen der Wiese — ganz ohne Lärm oder Abgase! Ihre Wolle ist eine
          wertvolle Ressource, die wir wieder in den Kreislauf als Dünger und
          Mulchmaterial zurückgeben. So entsteht ein funktionierendes Ökosystem,
          in dem alles seinen Platz hat.
        </p>

        <h3 className="mt-12 font-heading text-xl font-semibold text-primary">
          Was unseren Garten besonders macht
        </h3>
        <ul className="mt-6 space-y-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-base leading-7 text-muted-foreground sm:text-lg"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base leading-7 text-muted-foreground sm:text-lg">
          Jedes dieser Elemente fördert die Biodiversität und verbessert das
          Mikroklima — und macht unseren Garten zu einem Ort, an dem wir jeden
          Tag etwas Neues entdecken können.
        </p>
      </div>

      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Vier Stationen, vier Lebensräume
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
              Ein kleiner Rundgang durch die Plätze, an denen besonders viel
              Leben steckt.
            </p>
          </div>

          <div className="mt-14 grid gap-12 sm:gap-16">
            {stations.map((station, index) => (
              <article
                key={station.title}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={img(`/fotos/natur-im-garten/${station.file}`)}
                    alt={station.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </figure>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                    {station.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                    {station.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          Warum uns das wichtig ist
        </h2>
        <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
          In einer Zeit, in der immer mehr Arten bedroht sind und natürliche
          Lebensräume verschwinden, möchten wir mit unserem Garten ein Zeichen
          setzen. Wir wollen zeigen, dass Naturschutz nicht kompliziert sein
          muss — und dass er sogar Freude macht!
        </p>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          Ob beim Beobachten der Vögel und Schmetterlinge, beim Ernten des
          eigenen Gemüses oder einfach beim Entspannen im Garten: hier tanken
          wir Energie und spüren, wie wichtig es ist, die Natur zu bewahren.
        </p>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          Dank der »Natur im Garten«-Initiative sind wir Teil eines landesweiten
          Netzwerks, das sich für Artenschutz, Bodenschutz und Klimaschutz
          einsetzt. Und das Beste: jeder kann mitmachen! Unser Garten ist kein
          Museum — er lebt und verändert sich ständig.
        </p>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:p-10">
          <p className="font-heading text-xl leading-8 text-primary sm:text-2xl">
            Unser Garten ist mehr als nur ein Stück Land. Er ist ein Ort der
            Ruhe, der Inspiration und des Miteinanders.
          </p>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Er erinnert uns jeden Tag daran, dass wir alle Teil dieser
            wunderbaren Natur sind — und die Verantwortung haben, sie zu
            schützen.
          </p>
          <p className="mt-6 font-heading text-base font-semibold text-accent">
            Danke, dass ihr uns auf diesem Weg begleitet!
          </p>
        </div>
      </div>
    </div>
  );
}
