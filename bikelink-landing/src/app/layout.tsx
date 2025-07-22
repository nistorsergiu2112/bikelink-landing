import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BikeLink - Powering Local Bike Repair. Seamlessly.",
  description: "Find trusted motorcycle garages, book repairs instantly, and track your bike's service in real-time. Coming soon to revolutionize bike maintenance.",
  keywords: "motorcycle repair, bike maintenance, garage booking, UK motorcycles, bike service",
  authors: [{ name: "BikeLink" }],
  creator: "BikeLink",
  publisher: "BikeLink",
  openGraph: {
    title: "BikeLink - Powering Local Bike Repair. Seamlessly.",
    description: "Find trusted motorcycle garages, book repairs instantly, and track your bike's service in real-time. Coming soon to revolutionize bike maintenance.",
    url: "https://bikelink.co",
    siteName: "BikeLink",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BikeLink - Motorcycle Repair Made Simple",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BikeLink - Powering Local Bike Repair. Seamlessly.",
    description: "Find trusted motorcycle garages, book repairs instantly, and track your bike's service in real-time. Coming soon!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-primary`}>
        {children}
      </body>
    </html>
  );
}
