import { type NextPage } from "next";
import Head from "next/head";

import { Home } from "components/components/main-page";

const Entry: NextPage = () => {
  return (
    <>
      <Head>
        <title>aliawari.com | Ali Awari | Search Engine</title>
        <meta
          name="description"
          content="Experience fast and accurate video search results. Discover relevant videos on the web with Artificial Intelligence Technology."
        />
        <meta
          name="keywords"
          content="aliawari, ali awari, search engine, video search engine, video search, video search results, video search engine with ai, video search engine with artificial intelligence, video search engine with artificial intelligence technology, video search engine with ai technology, video search engine with ai tech, video search engine with ai tech, video search engine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default Entry;
