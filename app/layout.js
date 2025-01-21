import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

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
