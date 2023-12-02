import { useState, useEffect } from "react";

const SearchBox = ({ members, setSearchMembers, setError }) => {
  const [searchText, setSearchText] = useState("");
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };
  const handleSearchClick = () => {
    if (searchText.length > 0) {
      const searchMembers = members.filter((member) => {
        const isSearchTextFounded =
          member.name.toLowerCase().includes(searchText.toLowerCase()) ||
          member.email.toLowerCase().includes(searchText.toLowerCase()) ||
          member.role.toLowerCase().includes(searchText.toLowerCase());
        return isSearchTextFounded;
      });
      console.log(searchMembers);
      if (searchMembers.length === 0) {
        setError("No user found from your search text.");
      } else {
        setError(null);
      }
      setSearchMembers(searchMembers);
    } else {
      setError(null);
      setSearchMembers([]);
    }
  };

  useEffect(() => {
    if (searchText.length > 0) {
      handleSearchClick();
    }
  }, [members]);

  return (
    <div className="flex relative ml-2">
      <input
        type="search"
        id="search-dropdown"
        value={searchText}
        autoComplete="off"
        onChange={(e) => {
          handleSearchText(e);
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Name, Email, Role"
      />
      <button
        type="submit"
        onClick={() => {
          handleSearchClick();
        }}
        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};

export default SearchBox;
