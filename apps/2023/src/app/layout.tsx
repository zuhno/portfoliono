import "@common/styles/globals.scss";

import SideNavBar from "@common/components/SideNavBar.client";
import ThemeProvider from "@common/contexts/ThemeProvider";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | 2023",
  description: "2023 Portfolio by cuttleman",
};

export default function RootLayout(props) {
  return (
    <html lang="ko">
      <body className="dark">
        <ThemeProvider>
          <SideNavBar />
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
