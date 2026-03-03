// app/layout.jsx
// Root layout for the Next.js App Router.
//
// With Tailwind v4, fonts are loaded directly inside globals.css
// using @import url(...), so we no longer need next/font/google here.
// The layout is now clean and minimal.

import Footer from "@/components/home/Footer";
import TopBar from "@/components/home/TopBar";
import Navbar from "@/components/home/navbar/NavBar";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Metadata for the <head> tag (title, description)
export const metadata = {
  title: "B.K.S.B High School",
  description:
    "B.K.S.B High School – Empowering future leaders in Kastashinga, Jamalpur since 2002.",
  icons: {
    icon: "/Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
