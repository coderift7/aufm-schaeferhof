import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { img } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img("/images/logo-aufm-schaeferhof.jpeg")}
                alt="Aufm Schäferhof Logo"
                className="h-9 w-9 rounded-full object-cover"
              />
              <span className="font-heading text-lg font-bold text-primary">{siteConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Zucht seltener Guteschafe in Friesoythe-Markhausen. Zuchttiere zu verkaufen. Besuche nach Absprache.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Kontakt</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-accent" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:text-primary">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-accent" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-primary">{siteConfig.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                <span className="text-sm text-muted-foreground">{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Links</h3>
            <ul className="space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary">{item.label}</a>
                </li>
              ))}
              <li><a href="/impressum" className="text-sm text-muted-foreground hover:text-primary">Impressum</a></li>
              <li><a href="/datenschutz" className="text-sm text-muted-foreground hover:text-primary">Datenschutz</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
