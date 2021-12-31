import Head from "next/head";
import Script from "next/script";
import Game from "../apps/whac-a-mole/components/Game";

const WhacAMole = () => {
  return (
    <>
      <Head>
        <title>Whac-A-Mole</title>
        <meta name="description" content="Whac-A-Mole" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://webgazer.cs.brown.edu/webgazer.js"
        strategy="beforeInteractive"
      ></Script>
      <Game />
    </>
  );
};

export default WhacAMole;
