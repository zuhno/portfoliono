import "@common/styles/globals.scss";

import SideNavBar from "./_components/SideNavBar.client";
import homeStyles from "./_styles/home.module.scss";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | 2023",
  description: "2023 Portfolio by cuttleman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <SideNavBar />
        <main className={homeStyles.main}>{children}</main>
      </body>
    </html>
  );
}
