import type { Metadata } from "next";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";
import Hoodie from "@/Components/hoodie"

import "./globals.css";
import hoodie from "@/Components/hoodie";

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
<html lang="en" >
      <body>
        <Navbar />
          <main className="overflow-hidden">
             {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
