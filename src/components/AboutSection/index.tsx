export const AboutSection = () => {
  return (
    <div className="mb-10">
      <h2 className="mb-2 text-lg font-bold">About this project</h2>
      <p className="prose text-md leading-relaxed">
        This is a demo of a universal video search engine, that I built using
        NextJs, TailwindCSS, and TypeScript. It uses a bunch of stuff under the
        hood to provide a seamless experience. Reddis is used to cache the
        search results. A neural network is used to generate tags for the
        videos. PineconeDB is used to provide a fast and scalable vector search.
        Transcripts are generated using an open source speech-to-text neural
        net. The app is deployed on Vercel. The source code is available on
        GitHub.
      </p>
    </div>
  );
};
