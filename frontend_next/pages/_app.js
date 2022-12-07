import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "../components/auth/AuthProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
