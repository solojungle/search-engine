import { type NextPage } from "next";

import { Heading } from "components/components/Heading";
import { Home } from "components/components/main-page";

const Entry: NextPage = () => {
  return (
    <>
      <Heading title="aliawari.com | Ali Awari | Search Engine" />
      <Home />
    </>
  );
};

export default Entry;
