import type { Metadata } from "next";
import { Footer, ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import BottomNavigation from "@/components/bottomNavigation/BottomNavigation";


export const metadata: Metadata = {
  title: "Create Flowbite React",
  description: "Generated by create flowbite react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <ThemeModeScript />
        
      </head>

 
      <body dir="rtl" className="bg-[#f9f9f9]" >
        <Navbar/>
        {children}
        <BottomNavigation />
        <Footer />
      </body>
      
    </html>
  );
}
