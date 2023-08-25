import { type SearchResults } from "components/types";
import { Result } from "./Result";

type VideoGridProps = {
  results: SearchResults[];
};

export const VideoGrid = (props: VideoGridProps) => {
  const { results } = props;

  return (
    <div className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {results.map((result, index) => {
        return (
          <Result
            key={`${result.title}-${index}`}
            title={result.title}
            description={result.description}
            url={result.url}
            thumbnail={result.thumbnail}
          />
        );
      })}
    </div>
  );
};
