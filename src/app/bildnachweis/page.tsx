import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";
import { href, img } from "@/lib/utils";

export const metadata: Metadata = { title: `Bildnachweis – ${siteConfig.name}` };

const photos = [
  { id: 1, file: "geschichte-kriemhild.webp", description: "Kriemhild mit Lamm", photographer: "Michael Schäfer" },
  { id: 2, file: "geschichte-lilo.webp", description: "Lilo mit Lämmern auf Löwenzahnwiese", photographer: "Michael Schäfer" },
  { id: 3, file: "geschichte-merlin.webp", description: "Bock Merlin im Fellwechsel", photographer: "Michael Schäfer" },
  { id: 4, file: "geschichte-napoleon.webp", description: "Bock Napoleon im Schnee", photographer: "Michael Schäfer" },
  { id: 5, file: "Foto_Hero.webp", description: "Startbild (Hero)", photographer: "Michael Schäfer" },
  { id: 6, file: "bock-weide.jpg", description: "Bock auf der Weide", photographer: "Michael Schäfer" },
  { id: 7, file: "herde-weide.jpg", description: "Herde auf der Weide", photographer: "Michael Schäfer" },
  { id: 8, file: "hero-lamm.jpg", description: "Lamm (Nahaufnahme)", photographer: "Michael Schäfer" },
  { id: 9, file: "hof-garten.jpg", description: "Hofansicht mit Garten", photographer: "Michael Schäfer" },
  { id: 10, file: "hof-kutsche.jpg", description: "Hof mit Kutsche", photographer: "Michael Schäfer" },
  { id: 11, file: "wollhose-ausstellung.jpeg", description: "Wollhose aus Guteschaflocken, Ausstellung New York 2018", photographer: "—" },
  { id: 12, file: "wollhose-nahaufnahme.jpeg", description: "Nahaufnahme der Wollhose aus Guteschaflocken", photographer: "—" },
];

export default function Bildnachweis() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8">
        <a href={href("/")} className="mb-8 inline-flex items-center gap-2 text-sm text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
        </a>
        <h1 className="font-heading text-3xl font-bold text-primary">Bildnachweis</h1>
        <p className="mt-4 text-muted-foreground">
          Übersicht aller auf dieser Website verwendeten Fotografien mit Angabe der Urheber.
        </p>

        <div className="mt-10 space-y-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="flex items-center gap-5 rounded-2xl border border-border bg-card p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(`/images/${photo.file}`)}
                  alt={photo.description}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="shrink-0 text-xs font-medium text-warm">#{photo.id}</span>
                  <span className="text-sm font-semibold text-primary">{photo.description}</span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Foto: {photo.photographer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
