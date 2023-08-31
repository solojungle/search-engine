import { type SearchCounts } from "components/types";
import { Filter } from "./Filter";
import { Skeleton } from "./Skeleton";

type FileTypeFilterProps = {
  loading: boolean;
  types?: SearchCounts["types"];
};

export const FileTypeFilter = (props: FileTypeFilterProps) => {
  const { loading, types } = props;

  return (
    <ol className="mb-5 border-b border-borderColor pb-6">
      {loading || !types ? <Skeleton /> : <Filter types={types} />}
    </ol>
  );
};
