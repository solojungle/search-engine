export const FloatingBanner = () => {
  return (
    <div className="absolute flex w-full items-center justify-between rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-4 text-white md:py-3 md:pl-4 md:pr-2">
      <p className="flex items-center justify-center text-sm">
        <a href="https://aliawari.com">
          <strong className="text-base">aliawari.com</strong>
          <svg
            viewBox="0 0 2 2"
            fill="currentColor"
            className="mx-2 inline h-1 w-1 "
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          Read my blog. Then check out my awesome projects!
          <span aria-hidden="true" className="mx-1">
            →
          </span>
        </a>
      </p>
      <button type="button" className="mx-2 rounded hover:bg-primaryHighlight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
  );
};
