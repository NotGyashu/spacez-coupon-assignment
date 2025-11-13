import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/footer";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend-deca",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spacez Coupons",
  description: "Browse and redeem exclusive coupons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.variable} font-sans antialiased`}>
        {/* Fixed Layout Container */}
        <div className="flex flex-col h-screen">
          {/* Fixed Header */}
          <div className="flex-shrink-0">
            <Header />
          </div>

          {/* Scrollable Main Content */}
          <main className="flex-1 overflow-hidden">
            {children}
          </main>

          {/* Fixed Footer */}
          <div className="flex-shrink-0">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
