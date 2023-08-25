import { type SearchCounts, type SearchResults } from "components/types";
import { VideoGrid } from "../VideoResult/Grid";
import { VideoGridSkeleton } from "../VideoResultSkeleton/Grid";

type ResultsProps = {
  responseTime: number;
  counts: SearchCounts;
  results: SearchResults[];
  loading: boolean;
};

export const Results = (props: ResultsProps) => {
  const { results, counts, responseTime, loading } = props;

  if (loading)
    return (
      <div className="w-full">
        <VideoGridSkeleton />
      </div>
    );

  return (
    <div className="w-full">
      <div className="mt-5 flex items-center">
        <h2 className="font-semibold">{`${counts.types.all} files`}</h2>
        <span className="ml-2 text-xs text-neutral-600">{`(${responseTime}) ms`}</span>
      </div>
      <VideoGrid results={results} />
    </div>
  );
};
