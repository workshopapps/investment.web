import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "../components/auth/AuthProvider";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;