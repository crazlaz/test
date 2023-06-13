import "./globals.css";
import { Inter } from "next/font/google";
import Heading from "./components/Heading";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atlas Web",
  description: "Modern web solutions for modern problems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen justify-between">
          <Heading />

          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
