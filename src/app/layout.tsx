import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import { ToastContainer } from 'react-toastify'


export const metadata: Metadata = {
  title: {
    absolute:"",
  template:"%s |Bhendogu Technologies"
},
  description: "Bhendogu Technologies (pty) LTD",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`Inter flex flex-col min-h-screen`}>
        <Navigation/>
        <main className="overflow-x-hidden">
        {children}
        </main>
        <Footer/>
         <ToastContainer />
        </body>
    </html>
  );
}
