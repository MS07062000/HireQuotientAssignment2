const CurrentPageButton = ({ handleCurrentPage, currentPageNumber, pageNumber }) => {
  return (
    <button
      onClick={() => handleCurrentPage(pageNumber)}
      className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 dark:border-gray-700 ${
        currentPageNumber === pageNumber
          ? "bg-blue-800 dark:bg-blue-500 text-black"
          : "bg-white dark:bg-gray-800 text-black dark:text-white"
      }`}
    >
      {pageNumber}
    </button>
  );
};

export default CurrentPageButton;
