import { type NextPage } from 'next';

import { FloatingBanner } from './FloatingBanner';
import { SearchWithButton } from './Search/SearchWithButton';

export const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative m-3">
        <FloatingBanner />
      </div>
      <div className="flex grow items-center justify-center">
        <main className="flex w-full max-w-3xl flex-col items-center px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-1 text-5xl font-bold text-black dark:text-white">
              <a href="https://aliawari.com">aliawari.com</a>
            </h1>
            <p className="mb-24 text-lg text-gray-700 dark:text-gray-200">
              A better video search engine.
            </p>
          </div>
          <div className="mb-10 flex w-full justify-center">
            <SearchWithButton />
          </div>
        </main>
      </div>
    </div>
  );
};
