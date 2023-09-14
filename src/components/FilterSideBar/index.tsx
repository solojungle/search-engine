import { type SearchCounts } from 'components/types';
import { useRef } from 'react';

import { AdvancedOptionsFilter } from './Filters/AdvancedOptionsFilter';
import { FileTypeFilter } from './Filters/FileTypeFilter';
import { WebsiteFilter } from './Filters/WebsiteFilter';

type FilterByBarProps = {
  loading: boolean;
  counts?: SearchCounts;
};

export const FilterByBar = (props: FilterByBarProps) => {
  const filterBarRef = useRef<HTMLInputElement>(null);

  const { counts, loading } = props;

  return (
    <div
      ref={filterBarRef}
      className="mb-4 mr-5 hidden w-72 shrink-0 border-r border-borderColor pr-2 pt-5 lg:block"
    >
      <h2 className="mb-3 px-2 font-medium">Filter By</h2>
      <FileTypeFilter loading={loading} types={counts?.types} />
      <WebsiteFilter loading={loading} sites={counts?.sites} />
      <AdvancedOptionsFilter />
    </div>
  );
};
