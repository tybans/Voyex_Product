const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex gap-2 justify-center mt-6">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 rounded disabled:opacity-50 bg-white text-black dark:bg-gray-700 dark:text-white"
      >
        Prev
      </button>
      <span className="text-sm ">Page {currentPage} of {totalPages}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
         className="px-3 py-1 rounded disabled:opacity-50 bg-white text-black dark:bg-gray-700 dark:text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
