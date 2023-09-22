import { NoResults } from 'components/components/NoResults';
import { type SearchCounts, type SearchResult } from 'components/types';

import { Item } from './item';

type VideoResultsProps = {
  results: SearchResult[];
  counts: SearchCounts;
  responseTime: string;
  currentPage: number;
  perPage: number;
  selectedFileType: string;
  selectedWebsite: string;
};

export const VideoResults = (props: VideoResultsProps) => {
  const {
    results,
    counts,
    responseTime,
    perPage,
    currentPage,
    selectedFileType,
    selectedWebsite,
  } = props;

  // Filter results by file type and website
  const filteredResults = results.filter((e) => {
    return (
      (selectedFileType === 'everything' || e.type === selectedFileType) &&
      (selectedWebsite === '' || e.source.name === selectedWebsite)
    );
  });

  const paginatedResults = filteredResults.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  if (paginatedResults.length === 0) {
    return (
      <div className="mt-5 flex h-full items-center justify-center">
        <NoResults />
      </div>
    );
  }

  return (
    <>
      <div className="mt-5 flex items-center">
        <h2 className="font-semibold">{`${counts.types.all} files`}</h2>
        <span className="ml-2 text-xs text-neutral-600">{`(${responseTime}) ms`}</span>
      </div>
      <div className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {paginatedResults.map((result) => {
          return (
            <Item
              key={result.id}
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
