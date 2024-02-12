import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/search-component.css";
import { messageCard } from "../data/fakedata";

export default function SearchComponent() {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("query");
  const [searchQuery, setSearchQuery] = useState(search || "");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(searchQuery);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-component">
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
      {/* Search User Card */}
      <div className="search-users">
        {messageCard.map((e) => (
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
        ))}
      </div>
    </div>
  );
}
