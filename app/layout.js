import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import FAQs from "@/components/FAQs";
import TestimonialsSection from "@/components/Testinomials";
import PricingSection from "@/components/PricingSection";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

export const metadata = {
  title: "RidePing",
  description: "Your reliable ride tracking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body
        className={`
          ${inter.variable}
          ${ibmPlexMono.variable}
          font-sans antialiased
          h-full overflow-hidden overscroll-none touch-none
        `}
      >
        {/* Locked scroll container */}
        <div className="h-full overflow-y-scroll overflow-x-hidden overscroll-none">
          <Navbar />
          {children}
          <TestimonialsSection />
          <PricingSection/>
          <FAQs />
          <Footer />
        </div>
      </body>
    </html>
  );
}
