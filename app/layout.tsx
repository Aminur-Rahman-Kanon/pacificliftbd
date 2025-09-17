import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Topbar from "./components/layout/topbar/topbar";
import Footer from "./components/layout/footer/footer";

const saira = Saira({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Pacific Lift BD",
  description: "Next Geeration Elevator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.variable}`}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
