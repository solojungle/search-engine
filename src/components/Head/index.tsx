import Head from "next/head";

type MetaHeaderProps = {
  title: string;
};

export const MetaHeader = (props: MetaHeaderProps) => {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
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
  );
};
