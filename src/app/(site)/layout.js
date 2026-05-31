import CallToAction from "./components/CallToAction";
import EuropeanCarSpecialist from "./components/EuropeanCarSpecialist";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AOSProvider from "./components/AOSProvider";

export default function SiteLayout({ children }) {
  return (
    <>
      <AOSProvider />
      <Header />
      {/* <EuropeanCarSpecialist /> */}
      <main className="w-full min-h-screen overflow-hidden bg-black">
        {children}
      </main>
      <CallToAction />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}