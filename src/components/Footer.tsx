import { siteConfig } from "@/config/site";
import { img, href } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          {/* Brand + Social */}
          <div className="flex items-center gap-5">
            <a href="#" className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img("/images/logo-aufm-schaeferhof.png")}
                alt="Auf'm Schäferhof Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="font-heading text-sm font-semibold text-primary">
                {siteConfig.name}
              </span>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6">
            <a href={href("/impressum")} className="text-xs text-muted-foreground/50 transition-colors hover:text-primary">
              Impressum
            </a>
            <a href={href("/datenschutz")} className="text-xs text-muted-foreground/50 transition-colors hover:text-primary">
              Datenschutz
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-5 text-center text-xs text-muted-foreground/40">
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
      </div>
    </footer>
  );
}
