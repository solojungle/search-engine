import { GoogleAnalytics } from "components/components/GoogleAnalytics";
import "components/styles/globals.css";
import { type AppType } from "next/app";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
