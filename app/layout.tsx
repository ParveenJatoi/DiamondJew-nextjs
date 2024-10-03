
import type { Metadata } from "next"
// import Image from "next/image";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header";
import NewsStrip from "./strip";
import HeroSection from './herosec';
import FeaturedCollection from './feature';
import BridalCollection from './bridal';
import GiftForHer from './videos';
import ProductSection from "./product";
import Footer from './footer'; // Example for footer import


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NewsStrip/>
        <Header/>
        <HeroSection/>
        <FeaturedCollection/>
        <BridalCollection/>
        <ProductSection/>
        <GiftForHer/>
       {children}
        <Footer/>
      </body>
    </html>
  );
}