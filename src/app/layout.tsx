import "@/styles/globals.css";
import "@/styles/app.css";
import "@/styles/prose.css";
import "@/styles/vendors.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/app/components/sections/Footer";
import { NavBar } from "@/app/components/sections/NavBar";

import { Montserrat } from "next/font/google";
import { Spacer } from "@/app/components/Spacer";
import { cookies } from "next/headers";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
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
  const cookieStore = cookies();
  const isThemeCookieSet = cookieStore.has("theme");
  const defaultTheme = isThemeCookieSet ? cookieStore.get("theme")?.value : "";
  return (
    <html
      lang="ru"
      suppressHydrationWarning={true}
      className={`scroll-smooth ${defaultTheme}`}
      translate="no"
    >
      <body
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        className={`font-sans ${montserrat.variable}  antialiased`}
      >
        <div className="bg-white transition duration-500 dark:bg-gray-900">
          <NavBar />
          <main id="skip">{children}</main>
          <Spacer size="base" />
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
