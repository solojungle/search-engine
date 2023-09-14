import Head from 'next/head';

type HeadingProps = {
  title: string;
};

export const Heading = (props: HeadingProps) => {
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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};
