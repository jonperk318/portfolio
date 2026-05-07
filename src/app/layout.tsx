import TransitionProvider from "@/components/transitionProvider";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Perkins Portfolio",
  description: "Created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-[-1] gradient-background fixed overflow-auto h-screen w-screen"></div>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
