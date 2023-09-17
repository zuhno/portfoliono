import "@common/styles/globals.scss";

import { Roboto } from "next/font/google";
import Script from "next/script";

import NavBar from "@common/components/NavBar.client";
import { GTM_ID } from "@common/constants";
import GTMProvider from "@common/contexts/GTMProvider";
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
      {/* <!-- Google Tag Manager --> */}
      <Script id="google-tag-manager">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}'); 
      `}</Script>
      <body className="dark">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            height="0"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            style={{ display: "none", visibility: "hidden" }}
            title="google-tag-manager"
            width="0"
          />
        </noscript>
        <GTMProvider>
          <ThemeProvider>
            <NavBar />
            <main>
              {props.section01}
              {props.section02}
              {props.section03}
              {props.section04}
            </main>
          </ThemeProvider>
        </GTMProvider>
      </body>
    </html>
  );
}
