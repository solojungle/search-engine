import { type AppType } from "next/app";

import { api } from "components/utils/api";

import { GoogleAnalytics } from "components/components/GoogleAnalytics";
import "components/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics />
    </>
  );
};

export default api.withTRPC(MyApp);
