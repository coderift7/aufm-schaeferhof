import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: `Datenschutz – ${siteConfig.name}` };

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-24">
        <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" /> Zurück
        </a>
        <h1 className="font-heading text-3xl font-bold text-primary">Datenschutzerklärung</h1>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">1. Verantwortlicher</h2>
            <p className="mt-2">{siteConfig.name}<br />{siteConfig.address}<br />{siteConfig.email}</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">2. Kontaktformular</h2>
            <p className="mt-2">Bei Nutzung des Kontaktformulars werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert.</p>
          </div>
          <p className="text-sm text-muted-foreground/60">Platzhalter — wird vom Betreiber mit vollständiger Datenschutzerklärung ergänzt.</p>
        </div>
      </div>
    </div>
  );
}
