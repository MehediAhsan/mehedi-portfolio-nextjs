import Chatbot from "@/components/shared/Chatbot";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
          <Toaster />
          <Chatbot />
        </div>
      </body>
    </html>
  );
}
