import { FilterByBar } from "components/components/FilterSideBar";
import { Heading } from "components/components/Heading";
import { Pagination } from "components/components/Pagination";
import { Results } from "components/components/Results";
import { SearchWithButton } from "components/components/Search/SearchWithButton";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState, type SetStateAction } from "react";

const mockData = {
  responseTime: 392,
  counts: {
    types: {
      all: 100,
      video: 50,
      gifs: 20,
      transcripts: 10,
      images: 20,
    },
    sites: {
      all: 100,
      youtube: 50,
      vimeo: 0,
      tiktok: 10,
      instagram: 20,
    },
  },
  results: [
    {
      url: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
      title: "The Best of Bach",
      description:
        'Subscribe for more classical music: http://bit.ly/YouTubeHalidonMusic Listen to our playlist "Baroque Music" on Spotify: http://spoti.fi/2hzrJXo Like us on ...',
      thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      duration: "1:51:21",
      views: "12M",
      uploaded: "2 years ago",
      relatedTags: [
        "classical music",
        "classical",
        "bach",
        "baroque",
        "baroque music",
      ],
    },
    {
      url: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
      title: "The Best of Bach",
      description:
        'Subscribe for more classical music: http://bit.ly/YouTubeHalidonMusic Listen to our playlist "Baroque Music" on Spotify: http://spoti.fi/2hzrJXo Like us on ...',
      thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      duration: "1:51:21",
      views: "12M",
      uploaded: "2 years ago",
      relatedTags: [
        "classical music",
        "classical",
        "bach",
        "baroque",
        "baroque music",
      ],
    },
    {
      url: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
      title: "The Best of Bach",
      description:
        'Subscribe for more classical music: http://bit.ly/YouTubeHalidonMusic Listen to our playlist "Baroque Music" on Spotify: http://spoti.fi/2hzrJXo Like us on ...',
      thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      duration: "1:51:21",
      views: "12M",
      uploaded: "2 years ago",
      relatedTags: [
        "classical music",
        "classical",
        "bach",
        "baroque",
        "baroque music",
      ],
    },
    {
      url: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
      title: "The Best of Bach",
      description:
        'Subscribe for more classical music: http://bit.ly/YouTubeHalidonMusic Listen to our playlist "Baroque Music" on Spotify: http://spoti.fi/2hzrJXo Like us on ...',
      thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      duration: "1:51:21",
      views: "12M",
      uploaded: "2 years ago",
      relatedTags: [
        "classical music",
        "classical",
        "bach",
        "baroque",
        "baroque music",
      ],
    },
    {
      url: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
      title: "The Best of Bach",
      description:
        'Subscribe for more classical music: http://bit.ly/YouTubeHalidonMusic Listen to our playlist "Baroque Music" on Spotify: http://spoti.fi/2hzrJXo Like us on ...',
      thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      duration: "1:51:21",
      views: "12M",
      uploaded: "2 years ago",
      relatedTags: [
        "classical music",
        "classical",
        "bach",
        "baroque",
        "baroque music",
      ],
    },
    {
      url: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
      title: "The Best of Bach",
      description:
        'Subscribe for more classical music: http://bit.ly/YouTubeHalidonMusic Listen to our playlist "Baroque Music" on Spotify: http://spoti.fi/2hzrJXo Like us on ...',
      thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      duration: "1:51:21",
      views: "12M",
      uploaded: "2 years ago",
      relatedTags: [
        "classical music",
        "classical",
        "bach",
        "baroque",
        "baroque music",
      ],
    },
    {
      url: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
      title: "The Best of Bach",
      description:
        'Subscribe for more classical music: http://bit.ly/YouTubeHalidonMusic Listen to our playlist "Baroque Music" on Spotify: http://spoti.fi/2hzrJXo Like us on ...',
      thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      duration: "1:51:21",
      views: "12M",
      uploaded: "2 years ago",
      relatedTags: [
        "classical music",
        "classical",
        "bach",
        "baroque",
        "baroque music",
      ],
    },
    {
      url: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
      title: "The Best of Bach",
      description:
        'Subscribe for more classical music: http://bit.ly/YouTubeHalidonMusic Listen to our playlist "Baroque Music" on Spotify: http://spoti.fi/2hzrJXo Like us on ...',
      thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      duration: "1:51:21",
      views: "12M",
      uploaded: "2 years ago",
      relatedTags: [
        "classical music",
        "classical",
        "bach",
        "baroque",
        "baroque music",
      ],
    },
    {
      url: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
      title: "The Best of Bach",
      description:
        'Subscribe for more classical music: http://bit.ly/YouTubeHalidonMusic Listen to our playlist "Baroque Music" on Spotify: http://spoti.fi/2hzrJXo Like us on ...',
      thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      duration: "1:51:21",
      views: "12M",
      uploaded: "2 years ago",
      relatedTags: [
        "classical music",
        "classical",
        "bach",
        "baroque",
        "baroque music",
      ],
    },
  ],
};

const Search: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10; // You can adjust this according to your needs
  const totalResults = mockData.counts.types.all; // Your total result count

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
    // You can implement fetching data for the new page here
  };

  const qString = Array.isArray(q) ? q[0] : q;
  const truncatedQ =
    qString && qString.toString().length > 20
      ? qString.toString().substring(0, 20) + "..."
      : qString;

  const headTitleWithSiteName = truncatedQ
    ? `${truncatedQ} | aliawari.com`
    : "aliawari.com";

  return (
    <>
      <Heading title={headTitleWithSiteName} />
      <div className="p-5">
        <div className="mb-5 flex w-full items-center">
          <a className="ml-2 mr-8 font-bold" href="https://aliawari.com">
            aliawari.com
          </a>
          <SearchWithButton query={q as string} />
        </div>
        <div className="flex border-t border-neutral-200">
          <FilterByBar counts={mockData.counts} loading={loading} />
          <div className="flex w-full flex-col">
            <Results
              loading={loading}
              responseTime={mockData.responseTime}
              counts={mockData.counts}
              results={mockData.results}
            />
            <Pagination
              loading={loading}
              currentPage={currentPage}
              perPage={perPage}
              totalResults={totalResults}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
