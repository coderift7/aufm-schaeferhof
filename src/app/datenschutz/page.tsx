import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";
import { href } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Datenschutz – ${siteConfig.name}`,
  description: "Datenschutzerklärung von Auf'm Schäferhof – Informationen zur Datenverarbeitung gemäß DSGVO.",
  alternates: { canonical: "/datenschutz/" },
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8">
        <a
          href={href("/")}
          className="mb-8 inline-flex items-center gap-2 text-sm text-warm transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
        </a>
        <h1 className="font-heading text-3xl font-bold text-primary">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 space-y-10 text-[15px] leading-[1.8] text-muted-foreground">
          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">
              1. Verantwortlicher
            </h2>
            <p className="mt-3">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
              und anderer nationaler Datenschutzgesetze sowie sonstiger
              datenschutzrechtlicher Bestimmungen ist:
            </p>
            <p className="mt-3">
              Familie Michael Schäfer
              <br />
              {siteConfig.address}
              <br />
              Tel: {siteConfig.phone}
              <br />
              E-Mail: info@aufmschaeferhof.de
            </p>
          </section>

          {/* 2. Überblick */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p className="mt-3">
              Wir erheben und verwenden personenbezogene Daten unserer Nutzer
              grundsätzlich nur, soweit dies zur Bereitstellung einer
              funktionsfähigen Webseite sowie unserer Inhalte und Leistungen
              erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt
              nur nach Einwilligung des Nutzers oder wenn die Verarbeitung durch
              gesetzliche Vorschriften gestattet ist.
            </p>
          </section>

          {/* 3. Hosting */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">
              3. Hosting
            </h2>
            <p className="mt-3">
              Diese Webseite wird bei <strong>BioHost</strong> (BioHost GbR,
              Deutschland) gehostet. Die Server befinden sich in Deutschland,
              sodass Ihre Daten ausschließlich innerhalb der EU verarbeitet
              werden. Beim Besuch unserer Webseite werden automatisch
              Informationen in sogenannten Server-Log-Dateien gespeichert, die
              Ihr Browser automatisch übermittelt. Dies sind insbesondere:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Übertragene Datenmenge</li>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (zuvor besuchte Seite)</li>
            </ul>
            <p className="mt-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der
              technisch fehlerfreien Darstellung und Optimierung unserer
              Webseite. Weitere Informationen finden Sie in der{" "}
              <a
                href="https://www.biohost.de/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm underline underline-offset-2"
              >
                Datenschutzerklärung von BioHost
              </a>
              .
            </p>
          </section>

          {/* 4. Kontaktformular */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">
              4. Kontaktformular
            </h2>
            <p className="mt-3">
              Wenn Sie uns über das Kontaktformular auf unserer Webseite
              kontaktieren, werden folgende Daten erhoben:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Name (Pflichtangabe)</li>
              <li>E-Mail-Adresse (Pflichtangabe)</li>
              <li>Telefonnummer (freiwillig)</li>
              <li>Ihre Nachricht (Pflichtangabe)</li>
            </ul>
            <p className="mt-3">
              Die Verarbeitung erfolgt zum Zweck der Bearbeitung Ihrer Anfrage
              auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an der Beantwortung von Anfragen). Ihre Daten werden
              nach abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern
              keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          {/* 5. Cookies */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">
              5. Cookies und Analysetools
            </h2>
            <p className="mt-3">
              Diese Webseite verwendet <strong>keine Cookies</strong> und{" "}
              <strong>keine Analysetools</strong> (wie z.B. Google Analytics).
              Es findet kein Tracking Ihres Nutzerverhaltens statt.
            </p>
          </section>

          {/* 6. Schriftarten */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">
              6. Schriftarten
            </h2>
            <p className="mt-3">
              Diese Webseite nutzt Schriftarten (Google Fonts), die bei der
              Erstellung der Webseite lokal eingebunden wurden. Es findet{" "}
              <strong>keine Verbindung zu Servern von Google</strong> statt,
              wenn Sie unsere Webseite besuchen. Die Schriftarten werden
              direkt von unserem Server (bzw. dem Hosting-Anbieter) geladen.
            </p>
          </section>

          {/* 7. Externe Links */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">
              7. Externe Links (Social Media)
            </h2>
            <p className="mt-3">
              Auf unserer Webseite finden Sie Links zu unseren Profilen auf
              Facebook und Instagram. Diese Links sind einfache Verlinkungen
              (keine Social-Media-Plugins). Erst wenn Sie auf einen Link
              klicken, werden Sie auf die jeweilige Plattform weitergeleitet.
              Erst dann gelten die Datenschutzbestimmungen des jeweiligen
              Anbieters:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                <a
                  href="https://www.facebook.com/privacy/policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm underline underline-offset-2"
                >
                  Datenschutzrichtlinie von Facebook (Meta)
                </a>
              </li>
              <li>
                <a
                  href="https://help.instagram.com/519522125107875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm underline underline-offset-2"
                >
                  Datenschutzrichtlinie von Instagram (Meta)
                </a>
              </li>
            </ul>
          </section>

          {/* 8. SSL */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">
              8. SSL-Verschlüsselung
            </h2>
            <p className="mt-3">
              Diese Webseite nutzt aus Sicherheitsgründen eine
              SSL-Verschlüsselung (HTTPS). Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile Ihres Browsers von
              &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem
              Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          {/* 9. Betroffenenrechte */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">
              9. Ihre Rechte als betroffene Person
            </h2>
            <p className="mt-3">
              Sie haben gemäß DSGVO folgende Rechte hinsichtlich Ihrer
              personenbezogenen Daten:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>
                <strong>Auskunft</strong> (Art. 15 DSGVO): Sie können Auskunft
                über Ihre von uns verarbeiteten personenbezogenen Daten
                verlangen.
              </li>
              <li>
                <strong>Berichtigung</strong> (Art. 16 DSGVO): Sie können die
                Berichtigung unrichtiger Daten verlangen.
              </li>
              <li>
                <strong>Löschung</strong> (Art. 17 DSGVO): Sie können die
                Löschung Ihrer Daten verlangen, sofern keine gesetzlichen
                Aufbewahrungspflichten bestehen.
              </li>
              <li>
                <strong>Einschränkung</strong> (Art. 18 DSGVO): Sie können die
                Einschränkung der Verarbeitung Ihrer Daten verlangen.
              </li>
              <li>
                <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie
                können verlangen, Ihre Daten in einem maschinenlesbaren Format
                zu erhalten.
              </li>
              <li>
                <strong>Widerspruch</strong> (Art. 21 DSGVO): Sie können der
                Verarbeitung Ihrer Daten jederzeit widersprechen.
              </li>
            </ul>
          </section>

          {/* 10. Beschwerderecht */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">
              10. Beschwerderecht bei einer Aufsichtsbehörde
            </h2>
            <p className="mt-3">
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
              gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde
              bei einer Aufsichtsbehörde zu, wenn Sie der Ansicht sind, dass
              die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO
              verstößt. Die zuständige Aufsichtsbehörde ist:
            </p>
            <p className="mt-3">
              Die Landesbeauftragte für den Datenschutz Niedersachsen
              <br />
              Prinzenstraße 5
              <br />
              30159 Hannover
              <br />
              Telefon: 0511 120-4500
              <br />
              E-Mail: poststelle@lfd.niedersachsen.de
              <br />
              <a
                href="https://www.lfd.niedersachsen.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm underline underline-offset-2"
              >
                www.lfd.niedersachsen.de
              </a>
            </p>
          </section>

          {/* 11. Aktualität */}
          <section>
            <h2 className="font-heading text-lg font-semibold text-primary">
              11. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p className="mt-3">
              Diese Datenschutzerklärung hat den Stand März 2026. Wir behalten
              uns vor, diese Datenschutzerklärung zu aktualisieren, um den
              Datenschutz zu verbessern oder an geänderte Rechtsprechung
              anzupassen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
