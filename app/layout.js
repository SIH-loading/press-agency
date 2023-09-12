"use client";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" text-black">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
