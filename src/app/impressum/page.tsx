import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";
import { href } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Impressum – ${siteConfig.name}`,
  description: "Impressum und Kontaktdaten der Familie Schäfer – Auf'm Schäferhof in Friesoythe-Markhausen.",
  alternates: { canonical: "/impressum/" },
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8">
        <a href={href("/")} className="mb-8 inline-flex items-center gap-2 text-sm text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
        </a>
        <h1 className="font-heading text-3xl font-bold text-primary">Impressum</h1>

        <div className="mt-8 space-y-8 text-foreground/80 leading-relaxed">
          {/* Angaben gemäß § 5 TMG */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">Angaben gemäß § 5 TMG</h2>
            <p className="mt-3">
              Familie Michael Schäfer<br />
              Vorderthüler Straße 5a<br />
              26169 Friesoythe - Markhausen
            </p>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">Kontakt</h2>
            <p className="mt-3">
              Telefon: {siteConfig.phone}<br />
              E-Mail: info@aufmschaeferhof.de
            </p>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="mt-3">
              Michael Schäfer<br />
              Vorderthüler Straße 5a<br />
              26169 Friesoythe - Markhausen
            </p>
          </section>

          {/* Streitschlichtung */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">Streitschlichtung</h2>
            <p className="mt-3">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:text-accent/80"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-3">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Haftung für Inhalte */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">Haftung für Inhalte</h2>
            <p className="mt-3">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Haftung für Links */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">Haftung für Links</h2>
            <p className="mt-3">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
              zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mt-3">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">Urheberrecht</h2>
            <p className="mt-3">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-3">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
