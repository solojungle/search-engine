import { type SearchCounts } from 'components/types';

import { Filter } from './Filter';
import { Skeleton } from './Skeleton';

type FileTypeFilterProps = {
  loading: boolean;
  selectedFileType: string;
  setSelectedFileType: React.Dispatch<React.SetStateAction<any>>;
  types?: SearchCounts['types'];
};

export const FileTypeFilter = (props: FileTypeFilterProps) => {
  const { loading, types, selectedFileType, setSelectedFileType } = props;

  return (
    <ol className="mb-5 border-b border-borderColor pb-6 dark:border-darkBorderColor">
      {loading || !types ? (
        <Skeleton />
      ) : (
        <Filter
          types={types}
          selectedFileType={selectedFileType}
          setSelectedFileType={setSelectedFileType}
        />
      )}
    </ol>
  );
};
