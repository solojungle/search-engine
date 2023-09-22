import { searchVideos } from 'components/api/search';
import { FilterByBar } from 'components/components/FilterSideBar';
import { Heading } from 'components/components/Heading';
import { Pagination } from 'components/components/Pagination';
import { Results } from 'components/components/Results';
import { SearchWithButton } from 'components/components/Search/SearchWithButton';
import { SiteTitleWithSearchQuery } from 'components/components/Search/SiteTitleWithQuery';
import { SearchData } from 'components/types';
import { type NextPage } from 'next';
import { useRouter } from 'next/router';
import { type SetStateAction, useEffect, useState } from 'react';

const Search: NextPage = () => {
  const router = useRouter();
  const { q, page } = router.query;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<SearchData>();
  const [responseTime, setResponseTime] = useState<string>('');

  // Filter control
  const [selectedFileType, setSelectedFileType] =
    useState<string>('everything');
  const [selectedWebsite, setSelectedWebsite] = useState<string>('');

  const perPage = 15;
  const totalResults = data?.counts?.types.all ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalResults / perPage));

  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(page as string, 10),
  );

  const handlePageChange = (p: SetStateAction<number>) => {
    setCurrentPage(p);

    // Replace history with new page
    router.replace({
      pathname: router.pathname,
      query: {
        q,
        page: p.toString(),
      },
    });
  };

  // Prevent 'page' from being too large
  useEffect(() => {
    if (!data) {
      return;
    }

    if (currentPage > totalPages) {
      setCurrentPage(totalPages);

      router.replace({
        pathname: router.pathname,
        query: {
          q,
          page: totalPages.toString(),
        },
      });
    }
  }, [data, currentPage, totalPages, router, q]);

  // Get search results, and returns response time
  useEffect(() => {
    if (q) {
      const startTime = performance.now();
      setLoading(true);
      searchVideos(q as string).then((res) => {
        setData(res);
        setLoading(false);
      });

      const endTime = performance.now();
      const timeTaken = endTime - startTime;

      setResponseTime(Number(timeTaken.toFixed(2)).toString());
    }
  }, [q]);

  const headTitleWithSiteName = SiteTitleWithSearchQuery(q);

  return (
    <>
      <Heading title={headTitleWithSiteName} />
      <div className="flex min-h-screen flex-col p-5">
        <div className="mb-5 flex w-full items-center">
          <a className="ml-2 mr-8 font-bold" href="https://aliawari.com">
            aliawari.com
          </a>
          <SearchWithButton query={q as string} />
        </div>
        <div className="flex grow border-t border-neutral-200">
          <FilterByBar
            counts={data?.counts}
            loading={loading}
            selectedFileType={selectedFileType}
            selectedWebsite={selectedWebsite}
            setSelectedFileType={setSelectedFileType}
            setSelectedWebsite={setSelectedWebsite}
          />
          <div className="flex w-full flex-col">
            <Results
              selectedFileType={selectedFileType}
              selectedWebsite={selectedWebsite}
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

/**
 * Before rendering page, check if the search query exists, redirect to the search page if not
 */
export const getServerSideProps = async (ctx: any) => {
  // Destructure query parameter
  const { q, page } = ctx.query;

  // If 'q' parameter is missing, redirect to the root page
  if (!q) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Check if 'page' query parameter exists, or is not valid, if not, set it to 1
  if (!page || Number.isNaN(page) || parseInt(page as string, 10) < 1) {
    return {
      redirect: {
        destination: `/search?q=${q}&page=1`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Search;
