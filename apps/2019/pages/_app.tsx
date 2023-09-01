import type { AppProps } from "next/app";
import GlobalStyle from "../components/GlobalStyle";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
