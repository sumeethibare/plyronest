import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plyronest",
  description: "helping people to grow the company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrolly scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
