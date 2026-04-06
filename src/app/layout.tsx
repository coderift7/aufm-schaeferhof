import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = process.env.SITE_URL || "https://aufmschaeferhof.de";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [{
      url: `${siteUrl}/images/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: "Guteschafe auf dem Schäferhof",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${lora.variable} ${dmSans.variable}`}>
      <head>
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: siteConfig.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer.replace("{homepage_author}", "Michael Höger (hoeger.dev)") },
              })),
            }),
          }}
        />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name,
              description: siteConfig.meta.description,
              url: siteUrl,
              telephone: siteConfig.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vorderthüler Straße 5a",
                addressLocality: "Friesoythe-Markhausen",
                postalCode: "26169",
                addressRegion: "Niedersachsen",
                addressCountry: "DE",
              },
              areaServed: "Niedersachsen, Deutschland",
              sameAs: [
                siteConfig.social.facebook,
                siteConfig.social.instagram,
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
