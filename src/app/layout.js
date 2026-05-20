import CallToAction from "./components/CallToAction";
import EuropeanCarSpecialist from "./components/EuropeanCarSpecialist";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AOSProvider from "./components/AOSProvider";

import "./globals.css";

export const metadata = {
  title: "AutoExperts - Premium Automotive Solutions",
  description:
    "Delivering trusted automotive expertise with innovation and quality services. BMW, Mercedes, Audi solutions and infrastructure support.",

  keywords: [
    "automotive",
    "BMW",
    "Mercedes",
    "Audi",
    "car parts",
    "luxury cars",
    "auto dealership",
    "vehicle sourcing",
  ],

  authors: [{ name: "AutoExperts" }],

  openGraph: {
    title: "AutoExperts - Premium Automotive Solutions",
    description:
      "Premium automotive solutions with trusted expertise and luxury vehicle services.",
    url: "https://autoexperts.com",
    siteName: "AutoExperts",
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased overflow-x-hidden">

        <AOSProvider />

        <Header />

        <EuropeanCarSpecialist />

        <main className="w-full min-h-screen overflow-hidden">
          {children}
        </main>

        <CallToAction />

        <ScrollToTopButton />

        <Footer />
      </body>
    </html>
  );
}