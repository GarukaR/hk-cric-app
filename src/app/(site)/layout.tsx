import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hong Kong University Cricket",
  description: "Hong Kong Cricket App - Live scores, news, and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
