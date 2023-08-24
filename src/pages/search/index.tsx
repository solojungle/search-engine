import { FilterByBar } from "components/components/FilterByBar";
import { SearchWithButton } from "components/components/SearchWithButton";
import { VideoGridSkeleton } from "components/components/VideoResultSkeleton/Grid";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const Search: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;

  const [loading, setLoading] = useState(true);

  const qString = Array.isArray(q) ? q[0] : q;
  const truncatedQ =
    qString && qString.toString().length > 20
      ? qString.toString().substring(0, 20) + "..."
      : qString;

  const headTitleWithSiteName = truncatedQ
    ? `${truncatedQ} | aliawari.com`
    : "aliawari.com";

  return (
    <>
      <Head>
        <title>{headTitleWithSiteName}</title>
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
      <div className="p-5">
        <div className="mb-5 flex w-full items-center">
          <a className="ml-2 mr-8 font-bold" href="https://aliawari.com">
            aliawari.com
          </a>
          <SearchWithButton query={q as string} />
        </div>
        <div className="flex border-t border-neutral-200">
          <FilterByBar />
          <div className="w-full">{loading && <VideoGridSkeleton />}</div>
        </div>
      </div>
    </>
  );
};

export default Search;
