import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import ParticlesBackground from "@/components/shared/ParticlesBackground";

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
        <div className="overflow-hidden text-white">
          {children}
          <Toaster />
          <ParticlesBackground />
        </div>
      </body>
    </html>
  );
}
