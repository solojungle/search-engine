import { searchVideos } from "components/api/search";
import { FilterByBar } from "components/components/FilterSideBar";
import { Heading } from "components/components/Heading";
import { Pagination } from "components/components/Pagination";
import { Results } from "components/components/Results";
import { SearchWithButton } from "components/components/Search/SearchWithButton";
import { SearchData } from "components/types";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState, type SetStateAction } from "react";

const Search: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<SearchData>();
  const [currentPage, setCurrentPage] = useState(1);
  const [responseTime, setResponseTime] = useState<string>("");

  const perPage = 15;
  const totalResults = data?.counts?.types.all || 0;

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
    // You can implement fetching data for the new page here
  };

  useEffect(() => {
    if (q) {
      const startTime = performance.now();
      // setLoading(true);
      searchVideos(q as string).then((res) => {
        setData(res);
        // setLoading(false);
      });

      const endTime = performance.now();
      const timeTaken = endTime - startTime;

      setResponseTime(Number(timeTaken.toFixed(2)).toString());
    }
  }, [q]);

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
      <Heading title={headTitleWithSiteName} />
      <div className="p-5">
        <div className="mb-5 flex w-full items-center">
          <a className="ml-2 mr-8 font-bold" href="https://aliawari.com">
            aliawari.com
          </a>
          <SearchWithButton query={q as string} />
        </div>
        <div className="flex border-t border-neutral-200">
          <FilterByBar counts={data?.counts} loading={loading} />
          <div className="flex w-full flex-col">
            <Results
              loading={loading}
              responseTime={responseTime}
              data={data}
              currentPage={currentPage}
              perPage={perPage}
            />
            <Pagination
              loading={loading}
              currentPage={currentPage}
              perPage={perPage}
              totalResults={totalResults}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
