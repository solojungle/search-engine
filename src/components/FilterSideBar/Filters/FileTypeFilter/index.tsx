import { type SearchCounts } from "components/types";
import { Filter } from "./Filter";
import { Skeleton } from "./Skeleton";

type FileTypeFilterProps = {
  loading: boolean;
  counts: SearchCounts;
};

export const FileTypeFilter = (props: FileTypeFilterProps) => {
  const { loading, counts } = props;

  return (
    <ol className="mb-5 border-b border-borderColor pb-6">
      {loading ? <Skeleton /> : <Filter counts={counts} />}
    </ol>
  );
};
