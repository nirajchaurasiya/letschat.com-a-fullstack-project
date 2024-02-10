import "../styles/home.css";
import Linkscontainer from "./Linkscontainer";
import MessageCard from "./MessageCard";
import { BiSolidLock } from "react-icons/bi";
import { HomeParams } from "../types/Types";
import { useContext } from "react";
import { ToggleProfile } from "../context/ToggleProfile";
import { messageCard } from "../data/fakedata";

export default function Home({
  children,
  home,
  groupMessages,
  history,
  profile,
  search,
  logout,
  message,
}: HomeParams) {
  const showProfileOptions = useContext(ToggleProfile);

  if (!showProfileOptions) {
    return null;
  }

  const { showProfile } = showProfileOptions;

  return (
    <section className="home-container">
      <div className="home-mid-container">
        {/* All the links container or tab simply */}
        <div
          className={`${
            message ? "links-container" : "no-home-links-container"
          }`}
        >
          <Linkscontainer />
        </div>

        {/* All the user who previously connected user */}
        {home && (
          <div
            className={`${
              message && showProfile
                ? "all-users-container"
                : "no-home-all-users-container"
            }`}
          >
            <div className="top-header pt-pl-6">
              <p>All Messages</p>
            </div>
            <div className="card-messages">
              {messageCard.map((card) => (
                <MessageCard key={card.id} data={card} />
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
        {message && (
          <div
            className={`${
              message && showProfile
                ? "all-users-container"
                : "no-home-all-users-container"
            }`}
          >
            <div className="top-header pt-pl-6">
              <p>All Messages</p>
            </div>
            <div className="card-messages">
              {messageCard.map((card) => (
                <MessageCard key={card.id} data={card} />
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
              message ? "all-users-container" : "no-home-all-users-container"
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
              message ? "all-users-container" : "no-home-all-users-container"
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
              message ? "all-users-container" : "no-home-all-users-container"
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
              message ? "all-users-container" : "no-home-all-users-container"
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
            message && showProfile
              ? "show-message-container"
              : "no-home-show-message-container"
          }`}
        >
          {children}
        </div>

        {/* profile-container */}

        {message && showProfile && (
          <div
            className={`${
              message && showProfile
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
