import { type SearchCounts } from 'components/types';

import { Filter } from './Filter';
import { Skeleton } from './Skeleton';

type WebsiteFilterProps = {
  loading: boolean;
  selectedWebsite: string;
  setSelectedWebsite: React.Dispatch<React.SetStateAction<any>>;
  sites?: SearchCounts['sites'];
};

export const WebsiteFilter = (props: WebsiteFilterProps) => {
  const { loading, sites, selectedWebsite, setSelectedWebsite } = props;

  return (
    <>
      <h2 className="pb-2 pl-2 text-xs font-semibold text-neutral-700">
        Websites
      </h2>
      <ol className="mb-5 border-b border-borderColor pb-6">
        {loading || !sites ? (
          <Skeleton />
        ) : (
          <Filter
            sites={sites}
            selectedWebsite={selectedWebsite}
            setSelectedWebsite={setSelectedWebsite}
          />
        )}
      </ol>
    </>
  );
};
