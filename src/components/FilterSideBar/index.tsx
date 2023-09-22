import { type SearchCounts } from 'components/types';
import { useRef } from 'react';

import { AdvancedOptionsFilter } from './Filters/AdvancedOptionsFilter';
import { FileTypeFilter } from './Filters/FileTypeFilter';
import { WebsiteFilter } from './Filters/WebsiteFilter';

type FilterByBarProps = {
  loading: boolean;
  selectedFileType: string;
  selectedWebsite: string;
  setSelectedFileType: React.Dispatch<React.SetStateAction<any>>;
  setSelectedWebsite: React.Dispatch<React.SetStateAction<any>>;
  counts?: SearchCounts;
};

export const FilterByBar = (props: FilterByBarProps) => {
  const filterBarRef = useRef<HTMLInputElement>(null);

  const {
    counts,
    loading,
    selectedFileType,
    selectedWebsite,
    setSelectedFileType,
    setSelectedWebsite,
  } = props;

  return (
    <div
      ref={filterBarRef}
      className=" mr-5 hidden h-full w-72 shrink-0 border-r border-borderColor pr-2 pt-5 lg:block"
    >
      <h2 className="mb-3 px-2 font-medium">Filter By</h2>
      <FileTypeFilter
        loading={loading}
        types={counts?.types}
        selectedFileType={selectedFileType}
        setSelectedFileType={setSelectedFileType}
      />
      <WebsiteFilter
        loading={loading}
        sites={counts?.sites}
        selectedWebsite={selectedWebsite}
        setSelectedWebsite={setSelectedWebsite}
      />
      <AdvancedOptionsFilter />
    </div>
  );
};
