import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import Navbar from "./components/Navbar";
import Container from "./components/Container";


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});


export const metadata: Metadata = {
  title: "Éconutri",
  description: "Collaborative argument encyclopedia",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Container>
          <Navbar/> 
          {children}
        </Container>
        
      </body>
    </html>
  );
}
