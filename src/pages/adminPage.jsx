import AdminTableWithNavigation from "../components/adminTable/adminTable";
import SearchBox from "../components/searchBox";
import { useState, useEffect } from "react";
import { fetchMembers } from "../components/adminTable/requests/getMembers";

const AdminPage = () => {
  const [originalMembers, setOriginalMembers] = useState([]);
  const [error, setError] = useState(null);
  const [searchMembers, setSearchMembers] = useState([]);
  useEffect(() => {
    fetchMembers().then((data) => {
      setOriginalMembers(data);
    });
  }, []);
  return (
    <>
      {originalMembers.length > 0 && (
        <>
          <SearchBox
            members={originalMembers}
            setSearchMembers={setSearchMembers}
            setError={setError}
          />
        </>
      )}
      {error !== null && (
        <div
          className="p-4 m-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 font-medium"
          role="alert"
        >
          {error}
        </div>
      )}
      {searchMembers.length === 0 && originalMembers.length > 0 && (
        <AdminTableWithNavigation
          members={originalMembers}
          originalMembers={originalMembers}
          setOriginalMembers={setOriginalMembers}
        />
      )}
      {searchMembers.length > 0 && originalMembers.length > 0 && (
        <AdminTableWithNavigation
          members={searchMembers}
          originalMembers={originalMembers}
          setOriginalMembers={setOriginalMembers}
        />
      )}
    </>
  );
};

export default AdminPage;
