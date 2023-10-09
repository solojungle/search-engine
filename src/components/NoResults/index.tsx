export const NoResults = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
        No search results found
      </h1>
      <p className="text-2xl font-bold text-gray-800 dark:text-white">
        /ᐠ｡ꞈ｡ᐟ\
      </p>
      <p className="mt-2 text-gray-500 dark:text-white">
        Try searching for something else
      </p>
    </div>
  );
};
