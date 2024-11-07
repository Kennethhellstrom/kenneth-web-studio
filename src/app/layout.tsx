import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "@/providers/nextui";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/wppButton";

export const metadata: Metadata = {
  title: 'Desenvolvimento de Sites Profissionais | Kenneth Hellstrom',
  description: 'Kenneth Hellstrom oferece serviços de desenvolvimento de sites personalizados, otimizados para SEO e com design responsivo.',
  keywords: 'Kenneth Hellstrom, desenvolvimento de sites, criação de sites, web design, SEO, sites responsivos',
  authors: [{ name: 'Kenneth Hellstrom', url: 'https://www.kennethwebstudio.com.br' }],
  openGraph: {
      title: 'Desenvolvimento de Sites Profissionais | Kenneth Hellstrom',
      description: 'Kenneth Hellstrom oferece serviços de desenvolvimento de sites personalizados, otimizados para SEO e com design responsivo.',
      url: 'https://www.kennethwebstudio.com.br',
      siteName: 'Kenneth Web Studio',
      images: [
          {
              url: '/images/logo.webp',
              width: 800,
              height: 600,
              alt: 'Logo do Kenneth Web Studio',
          },
      ],
      locale: 'pt_BR',
      type: 'website',
  },
  twitter: {
      card: 'summary_large_image',
      title: 'Desenvolvimento de Sites Profissionais | Kenneth Hellstrom',
      description: 'Kenneth Hellstrom oferece serviços de desenvolvimento de sites personalizados, otimizados para SEO e com design responsivo.',
      images: ['/images/logo.webp'],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header/>
          <main>
          {children}
          </main>
          <WhatsAppButton/>
          <Footer/>
        </Providers>       
      </body>
    </html>
  );
}
