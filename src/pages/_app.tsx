import { GoogleAnalytics } from "components/components/GoogleAnalytics";
import "components/styles/globals.css";
import { api } from "components/utils/api";
import { type AppType } from "next/app";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
