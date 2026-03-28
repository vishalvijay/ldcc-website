import type { Metadata } from "next";
import { Bebas_Neue, Roboto_Condensed, Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-subheading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "London Desperados Cricket Club",
  description:
    "A friendly, sociable and inclusive club fostering cricketing excellence in the heart of London. Est. 2019.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${robotoCondensed.variable} ${inter.variable} ${oswald.variable}`}
    >
      <body className={inter.className}>
        <ErrorBoundary>
          <Header />
          {children}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
