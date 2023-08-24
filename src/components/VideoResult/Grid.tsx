import { Result } from "./Result";

type VideoGridProps = {
  results: any[];
};

const mockResults = [
  {
    url: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
    title: "The Best of Bach",
    description:
      'Subscribe for more classical music: http://bit.ly/YouTubeHalidonMusic Listen to our playlist "Baroque Music" on Spotify: http://spoti.fi/2hzrJXo Like us on ...',
    thumbnail: "https://i.ytimg.com/vi/9XaS93WMRQQ/maxresdefault.jpg",
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
];

export const VideoGrid = (props: VideoGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {props.results.map((result, index) => {
        return <Result key={index} />;
      })}
    </div>
  );
};
