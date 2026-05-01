import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif"
});

export const metadata = {
  title: "CAMLIQA | Natural Products For Your Natural Beauty",
  description: "Camliqa is a premium skincare and haircare brand rooted in natural, effective formulations for radiant results."
};

import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased selection:bg-secondary/30">
        <SmoothScroll>
          <CartProvider>
            <ScrollProgressBar />
            <CustomCursor />
            {children}
          </CartProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
