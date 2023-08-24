import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FloatingBanner } from "./FloatingBanner";
import { SearchWithButton } from "./SearchWithButton";

export const Home: NextPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch() {
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  }

  function submitOnEnter(event: { key: string }) {
    // If there isn't a search query, don't do anything
    if (searchQuery === "") {
      return;
    }

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
    <div className="flex min-h-screen flex-col">
      <div className="relative m-3">
        <FloatingBanner />
      </div>
      <div className="flex grow items-center justify-center">
        <main className="flex w-full max-w-3xl flex-col items-center px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-1 text-5xl font-bold text-black">
              <a href="https://aliawari.com">aliawari.com</a>
            </h1>
            <p className="mb-24 text-lg text-gray-700">
              A better video search engine.
            </p>
          </div>
          <div className="mb-10 flex w-full justify-center">
            <SearchWithButton />
          </div>
        </main>
      </div>
    </div>
  );
};
