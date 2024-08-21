import Navbar from "@/components/navbar.jsx";
import { Inter } from "next/font/google";
import "./globals.css";
import Starfield from 'react-starfield';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan Perkins Portfolio",
  description: "Created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<div className="w-screen h-screen animated-background bg-black bg-gradient-to-r from-black from-30% via-fusha/[0.3] to-black text-silver">*/}
        <div className="w-screen h-screen text-silver animated-background bg-black bg-gradient-to-r from-black from-30% via-fusha/[0.15] to-black">
          <Starfield 
            starCount={10000}
            starColor={[255, 255, 255]}
            speedFactor={0.05}
            backgroundColor="black" />
          <div className="h-24">
            <Navbar/>
          </div>
          <div className="h-[calc(100vh - 6rem)]">
            {children}
          </div>
        </div>
        {/*<div className="w-screen animated-background h-screen bg-black bg-gradient-to-r from-black from-80% via-purple/[0.3] to-black opacity-50"></div>*/}
      </body>
    </html>
  );
}
