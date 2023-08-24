import {
  DocumentTextIcon,
  FilmIcon,
  GifIcon,
  PhotoIcon,
  PlusCircleIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { FilterItem } from "./FilterItem";
import { FilterItemSkeleton } from "./FilterItemSkeleton";

const filterItems = [
  {
    Icon: Squares2X2Icon,
    title: "Everything",
    results: "123M",
    link: "",
  },
  {
    Icon: FilmIcon,
    title: "Videos",
    results: "123M",
    link: "",
  },
  {
    Icon: GifIcon,
    title: "GIFs",
    results: "1K",
    link: "",
  },
  {
    Icon: DocumentTextIcon,
    title: "Transcripts",
    results: "120K",
    link: "",
  },
  {
    Icon: PhotoIcon,
    title: "Images",
    results: "4M",
    link: "",
  },
];

const filterBySiteItems = [
  {
    Icon: Squares2X2Icon,
    title: "YouTube",
  },
  {
    Icon: Squares2X2Icon,
    title: "Vimeo",
  },
  {
    Icon: Squares2X2Icon,
    title: "TikTok",
  },
  {
    Icon: Squares2X2Icon,
    title: "Instagram",
  },
];

const advancedFilterOptions = [
  {
    Icon: PlusCircleIcon,
    title: "Date published",
  },
  {
    Icon: PlusCircleIcon,
    title: "Views",
  },
  {
    Icon: PlusCircleIcon,
    title: "Duration",
  },
];

export const FilterByBar = () => {
  const filterBarRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(true);

  return (
    <div
      ref={filterBarRef}
      className="mb-4 mr-5 hidden w-72 flex-shrink-0 border-r border-borderColor pr-2 pt-5 lg:block"
    >
      <h2 className="mb-3 px-2 font-medium">Filter By</h2>
      {/* <span className="text-xs">THIS WILL EVENTUALLY SCROLL WITH USER!!</span> */}
      <ol className="mb-5 border-b border-borderColor pb-6">
        {loading
          ? // Render skeleton items while loading
            filterItems.map((item) => (
              <FilterItemSkeleton
                Icon={item.Icon}
                title={item.title}
                key={item.title}
              />
            ))
          : // Render actual items when loading is done
            filterItems.map((item) => (
              <FilterItem
                Icon={item.Icon}
                title={item.title}
                key={item.title}
                results={item.results}
                link={item.link}
              />
            ))}
      </ol>
      <ol className="mb-5 border-b border-borderColor pb-6">
        <h2 className="pb-2 pl-2 text-xs font-semibold text-neutral-700">
          Websites
        </h2>
        {loading
          ? // Render skeleton items while loading
            filterBySiteItems.map((item) => (
              <FilterItemSkeleton
                Icon={item.Icon}
                title={item.title}
                key={item.title}
              />
            ))
          : // Render actual items when loading is done
            filterBySiteItems.map((item) => (
              <FilterItem
                Icon={item.Icon}
                title={item.title}
                key={item.title}
                results={""}
                link={""}
              />
            ))}
      </ol>
      <ol className="border-b border-borderColor pb-6">
        <h2 className="pb-2 pl-2 text-xs font-semibold text-neutral-700">
          Advanced
        </h2>
        {loading
          ? // Render skeleton items while loading
            advancedFilterOptions.map((item) => (
              <FilterItemSkeleton
                Icon={item.Icon}
                title={item.title}
                key={item.title}
              />
            ))
          : // Render actual items when loading is done
            advancedFilterOptions.map((item) => (
              <FilterItem
                Icon={item.Icon}
                title={item.title}
                key={item.title}
                results={""}
                link={""}
              />
            ))}
      </ol>
    </div>
  );
};
