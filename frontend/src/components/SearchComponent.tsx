import { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import "../styles/search-component.css";
import { GroupedMemberType } from "../types/Types";
import { SearchUserContext } from "../context/searchedContext";
import { getSearchedUser } from "../utils/getSearchedUser";

export default function SearchComponent({
  noSearch,
  users,
}: {
  noSearch?: boolean;
  users?: GroupedMemberType;
}) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("query");
  const [initialMsg, setInitialMsg] = useState(
    users && users.length < 1 && "Search a user"
  );
  const [searchQuery, setSearchQuery] = useState(search || "");
  const searchUserOptions = useContext(SearchUserContext);
  if (!searchUserOptions) return null;
  const { setSearchUser } = searchUserOptions;

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const getUserFromSearch = getSearchedUser(searchQuery);
    getUserFromSearch.length < 1 && setInitialMsg("No user found");
    setSearchUser(getUserFromSearch);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-component">
      {!noSearch && (
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search a user"
              value={searchQuery}
              onChange={handleChange}
            />
          </div>
          <div className="search-send-btn">
            <button type="submit">
              <BiSearch />
            </button>
          </div>
        </form>
      )}
      {/* Search User Card */}
      <div className="search-users">
        {users && users.length > 0 ? (
          users?.map((e) => (
            <Link
              to={`/search?query=${e.id}`}
              key={e.id}
              className={`${
                e.id === search ? "search-user-card active" : "search-user-card"
              }`}
              style={{ color: "white" }}
            >
              <div className="search-profile">
                {/* <img src="/user1.jpg" alt="" /> */}
                <p>{e.name.slice(0, 1)}</p>
              </div>
              <div className="card-user-desc">
                <p>{e.name}</p>
                <p>{e.bio.length > 60 ? `${e.bio.slice(0, 40)}...` : e.bio}</p>
              </div>
            </Link>
          ))
        ) : (
          <p style={{ padding: "20px", fontSize: "17px", fontWeight: "600" }}>
            {initialMsg}
          </p>
        )}
      </div>
      <br />
    </div>
  );
}
