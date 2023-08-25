import { type NextPage } from "next";

import { MetaHeader } from "components/components/Head";
import { Home } from "components/components/main-page";

const Entry: NextPage = () => {
  return (
    <>
      <MetaHeader title="aliawari.com | Ali Awari | Search Engine" />
      <Home />
    </>
  );
};

export default Entry;
