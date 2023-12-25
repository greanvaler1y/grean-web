import "@/styles/globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/app/ui/Footer";
import { Header } from "@/app/ui/Header";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic-ext"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning={true}
      className="scroll-smooth bg-bk-white text-bk-black"
      translate="no"
    >
      <body className={`font-sans ${inter.variable} antialiased`}>
        <div className="relative mx-auto min-h-screen overflow-x-hidden">
          <Header />
          <main id="skip" className="mb-20">
            {children}
          </main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
