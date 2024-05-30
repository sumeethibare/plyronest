import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./universal/Navbar";
import { Base } from "./universal/Base";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plyronest",
  description: "helping people to grow the company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrolly">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Base />
      </body>
    </html>
  );
}
