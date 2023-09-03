import Head from "next/head";

import type { Common } from "myTypes";

function Helmet({ title }: Common.HelmetProps) {
  return (
    <Head>
      {/* eslint-disable-next-line @next/next/no-page-custom-font -- . */}
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <title>{title} | Under the Sea</title>
      <meta content="my portfolio" name="description" />
      <link href="/favicon.ico" rel="icon" />
    </Head>
  );
}

export default Helmet;
