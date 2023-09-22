import { SearchData } from 'components/types';

import { NoResults } from '../NoResults';
import { Skeleton } from './Skeleton';
import { VideoResults } from './Video';

type ResultsProps = {
  loading: boolean;
  responseTime: string;
  data?: SearchData;
  currentPage: number;
  perPage: number;
  selectedFileType: string;
  selectedWebsite: string;
};

export const Results = (props: ResultsProps) => {
  const {
    data,
    responseTime,
    loading,
    currentPage,
    perPage,
    selectedFileType,
    selectedWebsite,
  } = props;

  if (data?.results && data.results.length === 0) {
    return (
      <div className="mb-4 flex h-full w-full max-w-7xl items-center justify-center p-16">
        <NoResults />
      </div>
    );
  }

  return (
    <div className="mb-4 h-full w-full max-w-7xl pb-8">
      {loading || !data || !data.results || !data.counts ? (
        <Skeleton />
      ) : (
        <VideoResults
          results={data.results}
          counts={data.counts}
          responseTime={responseTime}
          currentPage={currentPage}
          perPage={perPage}
          selectedFileType={selectedFileType}
          selectedWebsite={selectedWebsite}
        />
      )}
    </div>
  );
};
