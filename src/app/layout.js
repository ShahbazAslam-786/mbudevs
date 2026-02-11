import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

export const metadata = {
  title: "MBUDevs",
  description: "/assets/favicon.png",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
