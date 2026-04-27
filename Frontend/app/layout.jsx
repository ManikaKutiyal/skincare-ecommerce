import "./globals.css";
import CartDrawer from "../components/CartDrawer";

export const metadata = {
  title: "CAMLIQA | Natural Products For Your Natural Beauty",
  description: "Camliqa is a premium skincare and haircare brand rooted in natural, effective formulations for radiant results."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CartDrawer />
      </body>
    </html>
  );
}
