import { useLocation } from "react-router-dom";
import "../styles/view-searced-person.css";
import { BiBlock } from "react-icons/bi";
import { useEffect, useState } from "react";
import { messageCard } from "../data/fakedata";
import { ViewSearchedPersonType } from "../types/Types";

export default function ViewSearchedPerson() {
  const [searchedObject, setSearchedObject] = useState<
    ViewSearchedPersonType | {}
  >({});
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    setSearchedObject({});
    const getSearchedObject = messageCard.find(
      (data): data is ViewSearchedPersonType => data.id === searchQuery
    );
    if (getSearchedObject) {
      setSearchedObject(getSearchedObject);
    }
  }, [searchQuery]);

  return (
    <div className="view-searced-person">
      {searchQuery ? (
        (searchedObject as ViewSearchedPersonType).name ? (
          <div className="searched-profile">
            <div className="searched-profile-header">
              <p>{(searchedObject as ViewSearchedPersonType).name}</p>
              <button>
                Block
                <BiBlock />
              </button>
            </div>
            <div className="searched-cover">
              <img src="/bg.jpg" alt="" />
            </div>
            <div className="searched-profile_details">
              <div className="searched-profile-details-pp">
                <img src="/user1.jpg" alt="" />
                <div className="profile_name">
                  <div>
                    <p>{(searchedObject as ViewSearchedPersonType).name}</p>
                    <span>Joined: July 12 2024</span>
                  </div>
                  <button>Message</button>
                </div>
              </div>
              <div className="profile_desc">
                <p>About</p>
                <span>{(searchedObject as ViewSearchedPersonType).bio}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="enter-query-to-search-alert">
            <p>No user found😢</p>
          </div>
        )
      ) : (
        <div className="enter-query-to-search-alert">
          <p>Please enter a name to search</p>
        </div>
      )}
    </div>
  );
}
