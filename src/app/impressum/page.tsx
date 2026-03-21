import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: `Impressum – ${siteConfig.name}` };

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-24">
        <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" /> Zurück
        </a>
        <h1 className="font-heading text-3xl font-bold text-primary">Impressum</h1>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">Angaben gemäß § 5 TMG</h2>
            <p className="mt-2">{siteConfig.name}<br />{siteConfig.address}<br />Tel: {siteConfig.phone}</p>
          </div>
          <p className="text-sm text-muted-foreground/60">Platzhalter — wird vom Betreiber ergänzt.</p>
        </div>
      </div>
    </div>
  );
}
