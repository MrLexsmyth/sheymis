import type { Metadata } from "next";
import Script from 'next/script';
import { Geist, Geist_Mono, Abel } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abel",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sheymi Art Gallery",
  description: "A collection of artworks by Sheymi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
            <Script src="https://cdn.lordicon.com/lordicon.js" strategy="beforeInteractive" />
      </head>
      <body
  className={`${geistSans.variable} ${geistMono.variable} ${abel.variable} antialiased`}
>

        <Navbar />
         <main>
              {children}
         </main>
      </body>
    </html>
  );
}
