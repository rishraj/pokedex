import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar/navbar";
import Providers from "./providers/providers";

export const metadata: Metadata = {
  title: "Pokedex App",
  description: "Getting details about Pokemon",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
