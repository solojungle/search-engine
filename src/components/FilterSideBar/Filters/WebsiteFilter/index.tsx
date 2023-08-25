import { type SearchCounts } from "components/types";

import { Filter } from "./Filter";
import { Skeleton } from "./Skeleton";

type FileTypeFilterProps = {
  loading: boolean;
  counts: SearchCounts;
};

export const WebsiteFilter = (props: FileTypeFilterProps) => {
  const { loading, counts } = props;

  return (
    <>
      <h2 className="pb-2 pl-2 text-xs font-semibold text-neutral-700">
        Websites
      </h2>
      <ol className="mb-5 border-b border-borderColor pb-6">
        {loading ? <Skeleton /> : <Filter counts={counts} />}
      </ol>
    </>
  );
};
