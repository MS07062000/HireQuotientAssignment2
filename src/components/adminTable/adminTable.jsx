import { useState } from "react";
import PageNavigation from "../pageNavigation/pageNavigation";
import SaveMemberButton from "./saveMemberButton";
import EditMemberButton from "./editMemberButton";
import DeleteSingleMemberButton from "./deleteSingleMemberButton";
import DeleteAllMemberButton from "./deleteAllMembersButton";

const AdminTableWithNavigation = ({
  members,
  originalMembers,
  setOriginalMembers,
}) => {
  const membersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMember, setSelectedMember] = useState([]);
  const [membersToBeDisplayed, setMembersToBeDisplayed] = useState([]);
  const [editMemberID, setEditMemberID] = useState(-1);
  const [editMember, setEditMember] = useState({});
  const tableHeaders = Object.keys(members[0]).splice(1);

  const handleSelectMember = (displayedMemberID) => {
    const positionOfdisplayedMemberIDInSelectedMember =
      selectedMember.indexOf(displayedMemberID);
    const newSelectedMember = [...selectedMember];
    if (positionOfdisplayedMemberIDInSelectedMember === -1) {
      newSelectedMember.push(displayedMemberID);
    } else {
      newSelectedMember.splice(positionOfdisplayedMemberIDInSelectedMember, 1);
    }
    setSelectedMember(newSelectedMember);
  };

  const handleEditMember = (key, value) => {
    const newEditMember = { ...editMember };
    newEditMember[key] = value;
    setEditMember(newEditMember);
  };

  const handleEditClick = (index, displayedMemberID) => {
    setEditMemberID(displayedMemberID);
    setEditMember(membersToBeDisplayed[index]);
  };

  const handleSaveClick = (displayedMemberID) => {
    const modifiedMembers = originalMembers.map((member) => {
      if (member.id !== displayedMemberID) {
        return member;
      } else {
        return editMember;
      }
    });
    setOriginalMembers(modifiedMembers);
    setEditMemberID(-1);
    setEditMember({});
  };

  const handleDeleteClick = (displayedMemberID) => {
    const filteredMembers = originalMembers.filter(
      (member) => member.id !== displayedMemberID
    );
    setOriginalMembers(filteredMembers);
  };

  const deleteSelectedMember = () => {
    let newUpdatedMembers = originalMembers;
    selectedMember.map((displayedMemberID) => {
      const filteredMembers = newUpdatedMembers.filter(
        (member) => member.id !== displayedMemberID
      );
      newUpdatedMembers = filteredMembers;
    });
    setSelectedMember([]);
    setOriginalMembers(newUpdatedMembers);
  };

  return (
    <>
      <DeleteAllMemberButton
        deleteSelectedMember={deleteSelectedMember}
        selectedMember={selectedMember}
      />

      <div className="m-2 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              {tableHeaders.map((header) => {
                return (
                  <th key={header} scope="col" className="p-3">
                    {header}
                  </th>
                );
              })}
              <th scope="col" className="p-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {membersToBeDisplayed.map((_, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      checked={selectedMember.includes(
                        membersToBeDisplayed[index]["id"]
                      )}
                      onChange={() => {
                        handleSelectMember(membersToBeDisplayed[index]["id"]);
                      }}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                {tableHeaders.map((header) => (
                  <td key={header + "_" + index} className="px-3 py-4">
                    {editMemberID === membersToBeDisplayed[index]["id"] ? (
                      <input
                        value={editMember[header]}
                        onChange={(e) =>
                          handleEditMember(header, e.target.value)
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    ) : (
                      membersToBeDisplayed[index][header]
                    )}
                  </td>
                ))}
                <td className="px-3 py-4">
                  {editMemberID === membersToBeDisplayed[index]["id"] ? (
                    <SaveMemberButton
                      handleSaveClick={handleSaveClick}
                      memberID={membersToBeDisplayed[index]["id"]}
                    />
                  ) : (
                    <EditMemberButton
                      handleEditClick={handleEditClick}
                      index={index}
                      memberID={membersToBeDisplayed[index]["id"]}
                    />
                  )}
                  <DeleteSingleMemberButton
                    handleDeleteClick={handleDeleteClick}
                    memberID={membersToBeDisplayed[index]["id"]}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PageNavigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          membersPerPage={membersPerPage}
          members={members}
          selectedMemberCount={selectedMember.length}
          setMembersToBeDisplayed={setMembersToBeDisplayed}
        />
      </div>
    </>
  );
};

export default AdminTableWithNavigation;
