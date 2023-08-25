import { type SearchCounts, type SearchResults } from "components/types";
import { Skeleton } from "./Skeleton";
import { VideoResults } from "./Video";

type ResultsProps = {
  loading: boolean;
  responseTime: number;
  counts: SearchCounts;
  results: SearchResults[];
};

export const Results = (props: ResultsProps) => {
  const { results, counts, responseTime, loading } = props;

  return (
    <div className="w-full">
      {loading ? (
        <Skeleton />
      ) : (
        <VideoResults
          results={results}
          counts={counts}
          responseTime={responseTime}
        />
      )}
    </div>
  );
};
