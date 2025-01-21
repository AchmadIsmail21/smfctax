import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",weight:["400", "500", "600", "700"]
});

const ovo = Ovo({
  variable: "--font-geist-mono", weight:["400"]
});

export const metadata = {
  title: "SMCTax",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
