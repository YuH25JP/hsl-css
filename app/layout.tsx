import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBar from "./components/appBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSS in HSL",
  description: "Visualize each css color for Tailwind CSS theme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <AppBar />
        <div className={`${inter.className} h-screen`}>
          {children}
        </div>
      </body>
    </html>
  );
}
