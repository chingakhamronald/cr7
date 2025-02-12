import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const agrandir = localFont({
  src: [
    {
      path: "../public/assets/fonts/Agrandir-GrandHeavy.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  style: "normal",
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
      <body className={`${dmSans.variable} ${agrandir.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
