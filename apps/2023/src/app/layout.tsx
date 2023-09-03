import "@common/styles/globals.scss";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | 2023",
  description: "2023 Portfolio by cuttleman",
};

interface IProps {}

export default function RootLayout({ children }: React.PropsWithChildren<IProps>) {
  console.log(process.env.ENV);
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
