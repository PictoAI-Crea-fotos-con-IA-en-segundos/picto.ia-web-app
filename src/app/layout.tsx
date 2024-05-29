import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import FooterBlock from "@/components/ui/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PictoIA",
  description: "PictoIA es una innovadora plataforma dedicada a transformar y mejorar tus fotos mediante el uso de tecnología avanzada de inteligencia artificial. Nos enfocamos en ofrecer resultados de alta calidad de manera rápida y sencilla, permitiendo a nuestros usuarios obtener imágenes profesionales sin esfuerzo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <FooterBlock/>
      </body>
    </html>
  );
}
