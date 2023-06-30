import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Kasa",
  description: "Chez vous, partout et ailleurs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`inter.className  `}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
