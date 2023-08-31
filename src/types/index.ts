export type SearchData = {
  results: SearchResults[];
  counts: SearchCounts;
};

export type SearchResults = {
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  duration: string;
  type: string;
  url: string;
  source: string;
  transcript: string;
  tags: string[];
  uploaded: string;
};

export type SearchCounts = {
  types: {
    all: number;
    video: number;
    gifs: number;
    transcripts: number;
    images: number;
  };
  sites: {
    all: number;
    youtube: number;
    vimeo: number;
    tiktok: number;
    instagram: number;
  };
};
