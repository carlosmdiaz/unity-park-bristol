import "../styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head></Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
