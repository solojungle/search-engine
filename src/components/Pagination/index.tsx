import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

type PaginationProps = {
  loading: boolean;
  currentPage: number;
  perPage: number;
  totalResults: number;
  onPageChange: (page: number) => void;
};

export const Pagination = (props: PaginationProps) => {
  const { loading, currentPage, perPage, totalResults, onPageChange } = props;
  const totalPages = Math.ceil(totalResults / perPage);

  if (loading || totalResults === 0) {
    return null;
  }

  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(start + perPage - 1, totalResults);

  function renderPageNumbers() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          onClick={() => handlePageChange(i)}
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md ${
            i === currentPage ? "bg-primary font-bold text-textInverse" : ""
          }`}
        >
          {i}
        </li>
      );
    }
    return pages;
  }

  function handlePageChange(page: number) {
    if (page < 1 || page > totalPages) {
      return;
    }

    onPageChange(page);
  }

  return (
    <div className="flex items-center justify-between border-t border-borderColor pt-4">
      <p className="text-sm text-textSecondary">
        Showing <span className="font-medium">{start}</span> to{" "}
        <span className="font-medium">{end}</span> of{" "}
        <span className="font-medium">{totalResults}</span>
      </p>
      <div className="flex items-center justify-center">
        <button
          className="flex h-10 w-16 cursor-pointer items-center justify-center rounded-md"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <ul className="flex">{renderPageNumbers()}</ul>
        <button
          className="flex h-10 w-16 cursor-pointer items-center justify-center rounded-md"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
