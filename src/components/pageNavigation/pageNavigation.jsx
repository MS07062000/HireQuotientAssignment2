import { useEffect } from "react";
import FirstPageButton from "./firstPageButton";
import PreviousPageButton from "./previousPageButton";
import CurrentPageButton from "./currentPageButton";
import NextPageButton from "./nextPageButton";
import LastPageButton from "./lastPageButton";

const PageNavigation = ({
  currentPage,
  setCurrentPage,
  membersPerPage,
  members,
  selectedMemberCount,
  setMembersToBeDisplayed,
}) => {
  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * membersPerPage;
  const endIndex = Math.min(startIndex + membersPerPage, members.length);
  const totalPages = Math.ceil(members.length / membersPerPage);

  useEffect(() => {
    const displayedMembers = members.slice(startIndex, endIndex);
    setMembersToBeDisplayed(displayedMembers);
  }, [startIndex, endIndex, members]);

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  // Handle previous page click
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page click
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCurrentPage = (currentPage) => {
    setCurrentPage(currentPage);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between p-2 dark:bg-gray-800"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-900 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        <span className="font-semibold text-gray-900 dark:text-white">
          {selectedMemberCount}
        </span>
        {" of "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {members.length}
        </span>
        {" selected "}
      </span>
      <ul className="inline-flex space-x-2 rtl:space-x-reverse text-sm h-8">
        <li>
          <FirstPageButton handleFirstPage={handleFirstPage} />
        </li>
        <li>
          <PreviousPageButton handlePrevPage={handlePrevPage} />
        </li>
        {[...Array(totalPages).keys()].map((page) => (
          <li key={page}>
            <CurrentPageButton
              handleCurrentPage={handleCurrentPage}
              currentPageNumber={currentPage}
              pageNumber={page + 1}
            />{" "}
          </li>
        ))}
        <li>
          <NextPageButton handleNextPage={handleNextPage} />
        </li>
        <li>
          <LastPageButton handleLastPage={handleLastPage} />
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
