import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OlhoNoConcurso — Antecipe seu resultado com IA",
  description:
    "Descubra sua classificação estimada antes do gabarito oficial com análise colaborativa e IA.",
  metadataBase: new URL("https://olhonoconcurso.example"),
  openGraph: {
    title: "OlhoNoConcurso",
    description:
      "Antecipe seu resultado com IA e gabarito colaborativo inteligente.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OlhoNoConcurso",
    description:
      "Antecipe seu resultado com IA e gabarito colaborativo inteligente.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}
