import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/container/Header";
import { Footer } from "./components/container/Footer";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Hng Stage 2",
  description: "Collaboration task with a designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
