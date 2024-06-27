import type { Metadata } from "next";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";

import "./globals.css";

export const metadata: Metadata = {
  title: "Various Plug",
  description: "All your needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <Head>
        <script
          src="https://kit.fontawesome.com/fbadad80a0.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
