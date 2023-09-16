import "@common/styles/globals.scss";

import { Roboto } from "next/font/google";
import Script from "next/script";

import NavBar from "@common/components/NavBar.client";
import ThemeProvider from "@common/contexts/ThemeProvider";

import type { Metadata } from "next";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | 2023",
  description: "2023 Portfolio by cuttleman",
};

export default function RootLayout(props) {
  return (
    <html className={roboto.className} lang="ko">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KDVK7LYPSC" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KDVK7LYPSC');
        `}
      </Script>
      <body className="dark">
        <ThemeProvider>
          <NavBar />
          <main>
            {props.section01}
            {props.section02}
            {props.section03}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
