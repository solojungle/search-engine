import { type SearchCounts, type SearchResults } from "components/types";
import { Item } from "./item";

type VideoResultsProps = {
  results: SearchResults[];
  counts: SearchCounts;
  responseTime: number;
};

export const VideoResults = (props: VideoResultsProps) => {
  const { results, counts, responseTime } = props;

  return (
    <>
      <div className="mt-5 flex items-center">
        <h2 className="font-semibold">{`${counts.types.all} files`}</h2>
        <span className="ml-2 text-xs text-neutral-600">{`(${responseTime}) ms`}</span>
      </div>
      <div className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {results.map((result, index) => {
          return (
            <Item
              key={`${result.title}-${index}`}
              title={result.title}
              description={result.description}
              url={result.url}
              thumbnail={result.thumbnail}
            />
          );
        })}
      </div>
    </>
  );
};
