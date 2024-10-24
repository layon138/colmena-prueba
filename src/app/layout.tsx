import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "../lib/providets";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Colmena Prueba",
  description: "Prueba tecnica de julian vargas para colmena seguros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={inter.className}>
        <StoreProvider>
        {children}
        </StoreProvider>
     </body>
    </html>
  );
}
