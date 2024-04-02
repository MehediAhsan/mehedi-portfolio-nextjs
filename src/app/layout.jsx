import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mehedi Ahsan",
  description: "Mehedi Ahsan Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-r from-[#000808] via-[#000101] to-[#000808] overflow-hidden text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
