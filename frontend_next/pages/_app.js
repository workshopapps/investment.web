import "../styles/globals.css";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import reportWebVitals from "../reportWebVitals.js";

Sentry.init({
  dsn: "https://2eca6f62796644d4aa995a7fd5c073bd@o4504281377996800.ingest.sentry.io/4504281381601280",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.5,
});

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <UserStatusContext.Provider
        value={{ logged, loggedInHandler, loggedOffHandler }}
      >
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <AuthProvider>
            <WatchListProvider>
              <Component {...pageProps} />
            </WatchListProvider>
          </AuthProvider>
        </GoogleOAuthProvider>
      </UserStatusContext.Provider>
    </React.Fragment>
  );
}

export default MyApp;
