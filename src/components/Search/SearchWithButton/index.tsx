import { useRouter } from 'next/router';
import { useState } from 'react';

import { SearchBar } from '../SearchBar';

type SearchWithButtonProps = {
  query?: string;
};

export const SearchWithButton = (props: SearchWithButtonProps) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(props.query ?? '');

  async function handleSearch() {
    // If there isn't a search query, don't do anything
    if (searchQuery === '') {
      return;
    }

    try {
      await router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    } catch (error) {
      // Handle the error here if needed
      console.error('An error occurred:', error);
    }
  }

  return (
    <>
      <SearchBar
        searchTerm={searchQuery}
        setSearchTerm={setSearchQuery}
        onKeyDown={async (event) => {
          if (event.key === 'Enter') {
            await handleSearch();
          }
        }}
      />
      <button
        type="submit"
        className="focus:shadow-outline h-10 rounded-md rounded-l-none bg-primary px-4 py-2 text-xs font-semibold uppercase text-textInverse hover:bg-primaryLowlight focus:outline-none"
        onClick={handleSearch}
      >
        Search
      </button>
    </>
  );
};
