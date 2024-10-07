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
  description: "Une plateforme de commercialisation des produits alimentaires proches de leurs dates d'expiration",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <Container>
          <Navbar/> 
          {children}
          <div className='mt-16'></div>
        </Container>
        
      </body>
    </html>
  );
}
