const deleteAllMembersButton = ({ deleteSelectedMember, selectedMember }) => {
  return (
    <button
      type="button"
      onClick={() => {
        deleteSelectedMember(selectedMember);
      }}
      className={`${
        selectedMember.length > 0 ? "" : "hidden"
      } text-black bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm p-3 text-center mt-2 ml-2`}
    >
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
        />
      </svg>
    </button>
  );
};
export default deleteAllMembersButton;