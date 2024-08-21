import Navbar from "@/components/Navbar.jsx";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan Perkins Portfolio",
  description: "Created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen animated-background h-screen bg-black bg-gradient-to-r from-black from-30% via-fusha/[0.3] to-black text-silver">
          <div className="h-24">
            <Navbar/>
          </div>
          <div className="h-[calc(100vh - 6rem)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
