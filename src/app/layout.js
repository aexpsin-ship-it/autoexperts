import Header from "./components/Header";
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header/>
        {children}
      </body>
    </html>
  );
}