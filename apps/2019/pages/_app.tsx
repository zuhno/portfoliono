import GlobalStyle from "../components/GlobalStyle";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps & any) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
