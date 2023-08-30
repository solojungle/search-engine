type PaginationProps = {
    loading: boolean;
    currentPage: number;
    perPage: number;
    totalResults: number;
    onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { loading, currentPage, perPage, totalResults, onPageChange } = props;
  const totalPages = Math.ceil(totalResults / perPage);

    if (loading) {
      return null;
    }

  const renderPaginationInfo = () => {
    const start = (currentPage - 1) * perPage + 1;
    const end = Math.min(start + perPage - 1, totalResults);

    return `Showing ${start} to ${end} of ${totalResults} results`;
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          onClick={() => onPageChange(i)}
          className={`cursor-pointer ${
            i === currentPage ? 'font-bold' : ''
          }`}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-between mt-8">
      <p className="text-gray-600">{renderPaginationInfo()}</p>
      <ul className="flex space-x-2">
        {renderPageNumbers()}
      </ul>
    </div>
  );
};