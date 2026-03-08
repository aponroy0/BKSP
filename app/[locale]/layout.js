// app/[locale]/layout.js
import Footer from "@/components/home/Footer";
import TopBar from "@/components/home/TopBar";
import Navbar from "@/components/home/navbar/NavBar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Hind_Siliguri, Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata = {
  title: "B.K.S.B High School",
  description:
    "B.K.S.B High School – Empowering future leaders in Kastashinga, Jamalpur since 2002.",
  icons: {
    icon: "/Logo.png",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${hindSiliguri.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <TopBar />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
