import { FilterByBar } from "components/components/FilterByBar";
import { SearchWithButton } from "components/components/SearchWithButton";
import { VideoGridSkeleton } from "components/components/VideoResultSkeleton/Grid";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const Search: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;

  const [loading, setLoading] = useState(true);

  return (
    <div className="p-5">
      <div className="mb-5 flex w-full items-center">
        <a className="ml-2 mr-8 font-bold" href="https://aliawari.com">
          aliawari.com
        </a>
        <SearchWithButton query={q as string} />
      </div>
      <div className="flex border-t border-neutral-200">
        <FilterByBar />
        <div className="w-full">{loading && <VideoGridSkeleton />}</div>
      </div>
    </div>
  );
};

export default Search;
