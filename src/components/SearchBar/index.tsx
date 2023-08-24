import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type HTMLProps,
} from "react";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

export const SearchBar = ({
  searchTerm = "",
  setSearchTerm,
  ...props
}: SearchBarProps & HTMLProps<HTMLInputElement>) => {
  const inputReference = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const escFunction = useCallback(
    (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        if (searchTerm.length > 0) {
          setSearchTerm("");
        }
      }
    },
    [searchTerm.length, setSearchTerm]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  // If the search bar is not selected pressing "/" will focus the search bar
  const slashFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "/") {
        if (!isFocused) {
          event.preventDefault(); // Prevent the "/" character from being added
          setIsFocused(true);
          inputReference.current?.focus();
        }
      }
    },
    [isFocused]
  );

  useEffect(() => {
    document.addEventListener("keydown", slashFunction);
    return () => {
      document.removeEventListener("keydown", slashFunction);
    };
  }, [slashFunction]);

  return (
    <div className="flex w-full items-center justify-between">
      <MagnifyingGlassIcon className="absolute mx-2 h-5 w-5 text-textSecondary" />
      <input
        ref={inputReference}
        onBlur={() => setIsFocused(false)}
        className="text-md h-10 w-full rounded-l-lg border border-borderColor bg-transparent pl-9 placeholder:text-textSecondary focus:border-borderFocus focus:outline-none focus:ring-0"
        placeholder={`Type '/' to search...`}
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        {...props}
      ></input>
    </div>
  );
};
