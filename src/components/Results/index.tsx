import { SearchData } from 'components/types';

import { Skeleton } from './Skeleton';
import { VideoResults } from './Video';

type ResultsProps = {
  loading: boolean;
  responseTime: string;
  data?: SearchData;
  currentPage: number;
  perPage: number;
};

export const Results = (props: ResultsProps) => {
  const { data, responseTime, loading, currentPage, perPage } = props;

  if (data?.results && data.results.length === 0) {
    return (
      <div className="mb-4 flex h-full w-full max-w-7xl items-center justify-center p-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            No search results found
          </h1>
          <p className="text-2xl font-bold text-gray-800">/ᐠ｡ꞈ｡ᐟ\</p>
          <p className="mt-2 text-gray-500">Try searching for something else</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4 w-full max-w-7xl pb-8">
      {loading || !data || !data.results || !data.counts ? (
        <Skeleton />
      ) : (
        <VideoResults
          results={data.results}
          counts={data.counts}
          responseTime={responseTime}
          currentPage={currentPage}
          perPage={perPage}
        />
      )}
    </div>
  );
};
