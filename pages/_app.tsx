import "../styles/globals.css";
import "../styles/hiscore.css";
import "../styles/index.css";
import "../styles/mallet.css";
import "../styles/mole.css";
import "../styles/start-screen.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
