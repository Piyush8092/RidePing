import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/providers/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://rideping.com"),

  title: "School ERP Software in India | RidePing - Manage Attendance, Fees & Communication",

  description:
    "RidePing is an all-in-one school ERP software for Indian schools. Manage attendance, fees, results, transport, and parent communication from one platform.",

  keywords: [
    "school ERP software India",
    "school management system",
    "school app for parents",
    "fee management system school",
    "school administration software",
    "School ERP India",
    "school management software",
    "ERP for schools",
    "student management",
    "admission module",
    "fee module",
    "timetable management",
    "library management",
    "school ERP system",
    "best ERP software for schools",
    "school ERP software Rajasthan",
    "school ERP software Gujarat",
    "school ERP software Maharashtra",
    "school ERP software Uttar Pradesh",
    "school ERP software Tamil Nadu",
    "school ERP software Karnataka",
    "school ERP software West Bengal",
    "school ERP software Andhra Pradesh",
    "school ERP software Telangana",
    "school ERP software Haryana",
    "school ERP software Punjab",
  ],

  openGraph: {
    title: "RidePing - School ERP Software for Indian Schools",
    description:
      "Simplify school management with RidePing. Manage attendance, fees, communication, and more in one platform.",
    url: "https://rideping.com",
    siteName: "RidePing",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RidePing - School ERP Software for Indian Schools",
    description: "Manage attendance, fees, exams, transport, and communication in one platform.",
    images: ["/logo.png"],
    creator: "@rideping",
    site: "@rideping",
  },

  alternates: {
    canonical: "https://rideping.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${ibmPlexMono.variable}`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
