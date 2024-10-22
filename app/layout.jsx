import { JetBrains_Mono } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";
import PageTransition from "./components/PageTransition";
import StairTransition from "./components/StairTransition";
import Footer from "./components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});
export const metadata = {
  title: "Manuel Prieto's Portfolio",
  description: "Portfolio de Manuel Prieto de Antón. Github: @manurubik",
  author: "Manuel Prieto de Antón",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`min-h-screen flex flex-col ${jetbrainsMono.variable}`}>
        <Header />
        <StairTransition />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
