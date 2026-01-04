import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import FAQs from "@/components/FAQs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "RidePing",
  description: "Your reliable ride tracking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body
        className={`${inter.variable} font-sans antialiased 
        h-full overflow-hidden overscroll-none touch-none`}
      >
        {/* Locked scroll container */}
        <div className="h-full overflow-y-scroll overflow-x-hidden overscroll-none">
          <Navbar />
          {children}
          <FAQs />
          <Footer />
        </div>
      </body>
    </html>
  );
}
