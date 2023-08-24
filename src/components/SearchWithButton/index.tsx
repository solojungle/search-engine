import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SearchBar } from "../SearchBar";

type SearchWithButtonProps = {
  query?: string;
};

export const SearchWithButton = (props: SearchWithButtonProps) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(props.query ?? "");

  function handleSearch() {
    // If there isn't a search query, don't do anything
    if (searchQuery === "") {
      return;
    }

    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  }

  function submitOnEnter(event: { key: string }) {
    // If the user presses enter, submit the search query
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", submitOnEnter);
    return () => {
      document.removeEventListener("keydown", submitOnEnter);
    };
  });

  return (
    <>
      <SearchBar searchTerm={searchQuery} setSearchTerm={setSearchQuery} />
      <button
        className="focus:shadow-outline h-10 rounded-md rounded-l-none bg-primary px-4 py-2 text-xs font-semibold uppercase text-textInverse hover:bg-primaryLowlight focus:outline-none"
        onClick={handleSearch}
      >
        Search
      </button>
    </>
  );
};
