export type SearchData = {
  results: SearchResults[];
  counts: SearchCounts;
};

export type SearchResults = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  duration: string;
  views: string;
  type: string;
  isNSFW: boolean;
  url: string;
  source: string;
  transcript: string;
  tags: string[];
  uploaded: string;
  createdAt: string;
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
