const LastPageButton = ({ handleLastPage }) => {
  return (
    <button
      onClick={() => handleLastPage()}
      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        className="w-4 h-4 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 12 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m7 9 4-4-4-4M1 9l4-4-4-4"
        />
      </svg>
    </button>
  );
};

export default LastPageButton;
