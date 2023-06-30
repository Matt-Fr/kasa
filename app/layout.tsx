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
      <body className={`inter.className  p-5 md:p-7 lg:px-10 flex flex-col`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
