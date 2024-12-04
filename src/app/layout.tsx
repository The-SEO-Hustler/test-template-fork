import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarSelector from '@/components/navbar/navbar-selector'
import FooterSelector from '@/components/footer/footerSelector'
import { GoogleAnalytics } from '@next/third-parties/google'
import { pageData } from "@/lib/data";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...pageData.website.metadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {
        pageData.gtm &&
        <GoogleAnalytics gaId={pageData.gtm} />
      }
      <body className={inter.className}>
        <NavbarSelector />
        {children}
        <FooterSelector />
      </body>
    </html>
  );
}
