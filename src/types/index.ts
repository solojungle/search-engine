export type SearchData = {
  responseTime: string;
  results: SearchResults[];
  counts: SearchCounts;
};

export type SearchResults = {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  uploaded: string;
  relatedTags: string[];
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
