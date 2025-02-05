import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// Menambahkan subset yang diperlukan
const outfit = Outfit({
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"], // Menambahkan subset
});

const ovo = Ovo({
  variable: "--font-geist-mono",
  weight: ["400"],
  subsets: ["latin"], // Menambahkan subset
});

export const metadata = {
  title: "SMCTax - Jasa Konsultan Pajak Jakarta | Tax Consultant Murah",
  description: "SMCTax adalah konsultan pajak profesional di Jakarta, Indonesia. Menyediakan layanan konsultasi pajak untuk pribadi, bisnis, dan UMKM dengan harga terjangkau.",
  keywords: "tax consultant, Jakarta, jasa konsultan pajak murah, tax planning, pajak Jakarta, konsultasi pajak, pajak freelance, pengurusan pajak, tax compliance",
  author: "SMCTax",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph (SEO untuk Facebook & LinkedIn) */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://yourwebsite.com/profile-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (SEO untuk Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://yourwebsite.com/profile-image.jpg" />

        {/* Canonical URL (Hindari duplicate content di SEO) */}
        <link rel="canonical" href="https://yourwebsite.com" />

        {/* Schema Markup (Structured Data untuk Google) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SMCTax",
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "description": metadata.description,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jakarta",
              "addressCountry": "Indonesia"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62 812-3456-7890",
              "contactType": "Customer Support"
            }
          })}
        </script>
      </Head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
