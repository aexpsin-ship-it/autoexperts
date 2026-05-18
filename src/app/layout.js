import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white pt-16 sm:pt-20 md:pt-24">
        <Header/>
        {children}
        <CallToAction/> 
        <ScrollToTopButton/>
        <Footer/>
      </body>
    </html>
  );
}