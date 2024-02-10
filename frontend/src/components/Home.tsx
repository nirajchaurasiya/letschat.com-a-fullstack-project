import "../styles/home.css";
import Linkscontainer from "./Linkscontainer";
import MessageCard from "./MessageCard";
import { BiSolidLock } from "react-icons/bi";
import { HomeParams } from "../types/Types";

export default function Home({
  children,
  home,
  groupMessages,
  history,
  profile,
  search,
  logout,
}: HomeParams) {
  return (
    <section className="home-container">
      <div className="home-mid-container">
        {/* All the links container or tab simply */}
        <div
          className={`${home ? "links-container" : "no-home-links-container"}`}
        >
          <Linkscontainer />
        </div>

        {/* All the user who previously connected user */}

        {home && (
          <div
            className={`${
              home ? "all-users-container" : "no-home-all-users-container"
            }`}
          >
            <div className="top-header pt-pl-6">
              <p>All Messages</p>
            </div>
            <div className="card-messages">
              {[1, 2, 3, 4, 5, 6, 7].map((e) => (
                <MessageCard key={e} index={e} active={e === 1 && true} />
              ))}
              <div className="encryption-msg">
                <p>
                  <BiSolidLock />
                </p>
                <p>
                  Your personal messages are <span>end-to-end encrypted</span>
                </p>
              </div>
            </div>
          </div>
        )}
        {groupMessages && (
          <div
            className={`${
              home ? "all-users-container" : "no-home-all-users-container"
            }`}
          >
            <div className="top-header pt-pl-6">
              <p>Group Messages</p>
            </div>
          </div>
        )}
        {history && (
          <div
            className={`${
              home ? "all-users-container" : "no-home-all-users-container"
            }`}
          >
            <div className="top-header pt-pl-6">
              <p>History</p>
            </div>
          </div>
        )}
        {profile && (
          <div
            className={`${
              home ? "all-users-container" : "no-home-all-users-container"
            }`}
          >
            <div className="top-header pt-pl-6">
              <p>Profile</p>
            </div>
          </div>
        )}
        {search && (
          <div
            className={`${
              home ? "all-users-container" : "no-home-all-users-container"
            }`}
          >
            <div className="top-header pt-pl-6">
              <p>Search</p>
            </div>
          </div>
        )}
        {logout && (
          <div
            className={`${
              home ? "all-users-container" : "no-home-all-users-container"
            }`}
          >
            <div className="top-header pt-pl-6">
              <p>Logout</p>
            </div>
          </div>
        )}

        {/* Show Message container */}
        <div
          className={`${
            home ? "show-message-container" : "no-home-show-message-container"
          }`}
        >
          {children}
        </div>

        {/* profile-container */}

        {home && (
          <div
            className={`${
              home
                ? "rightbar-profile-container"
                : "no-home-rightbar-profile-container"
            }`}
          >
            <p>profile container</p>
          </div>
        )}
      </div>
    </section>
  );
}
