import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "BINANCE — Trade Crypto with Confidence",
  description: "The world's leading cryptocurrency exchange. Trade Bitcoin, Ethereum, BNB and hundreds of other cryptocurrencies.",
  keywords: "crypto exchange, bitcoin trading, ethereum, cryptocurrency, BTC, ETH, futures, P2P",
  openGraph: {
    title: "BINANCE — Trade Crypto with Confidence",
    description: "The world's leading cryptocurrency exchange.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main className="page-wrapper">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
