import "../styles/home.css";
import Linkscontainer from "./Linkscontainer";
import MessageCard from "./MessageCard";
import { BiSolidDislike, BiSolidLock } from "react-icons/bi";
import { GroupedMemberType, HomeParams } from "../types/Types";
import { useContext } from "react";
import { ToggleProfile } from "../context/ToggleProfile";
import { messageCard } from "../data/fakedata";
import { ImCross } from "react-icons/im";
import { MdBlock, MdDelete } from "react-icons/md";
import SearchComponent from "./SearchComponent";
import { groupdata } from "../data/groupdata";
import { SearchUserContext } from "../context/searchedContext";

export default function Home({
  children,
  home,
  groupMessages,
  history,
  profile,
  search,
  logout,
  message,
  isGroup,
}: HomeParams) {
  const showProfileOptions = useContext(ToggleProfile);

  const searchUserOptions = useContext(SearchUserContext);
  if (!searchUserOptions) return null;
  const { searchUser } = searchUserOptions;

  if (!showProfileOptions) {
    return null;
  }

  const { showProfile, setShowProfile } = showProfileOptions;

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
              message && showProfile
                ? "all-users-container"
                : "no-home-all-users-container"
            }`}
          >
            <div className="top-header pt-pl-6">
              <p>Group Messages</p>
            </div>
            <div className="card-messages">
              {groupdata.map((card) => (
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
            <SearchComponent
              users={searchUser as unknown as GroupedMemberType}
            />
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
          style={isGroup ? { width: "60%" } : {}}
          className={`${
            isGroup || (message && showProfile)
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
            <div className="contact-info-header pt-pl-6">
              <p onClick={() => setShowProfile(!showProfile)}>
                <ImCross />
              </p>
              <p>Contact Info</p>
            </div>
            <div className="profile_details">
              <div className="profile_image">
                <img src="/user1.jpg" alt="" />
              </div>
              <div className="profile_name_contacts">
                <p>Niraj Chaurasiya</p>
                <span>nirajchaurasiya@gmail.com</span>
              </div>
            </div>
            <div className="profile_about">
              <p>About</p>
              <p>
                Fullstack developer committed to be the world's best Robotics
                Engineer • Tweets around web development | AI | ML
              </p>
            </div>
            <div className="msg_credentials">
              <p>
                <BiSolidLock />
              </p>
              <div className="msg_credentails_message">
                <p>Credentials</p>
                <p>Messages are end-to-end encrypted.</p>
              </div>
            </div>
            <div className="user_block_option">
              <p className="danger-zone">Danger Zone</p>
              <div className="delete_chat">
                <p>
                  <MdBlock />
                </p>
                <span>Block Niraj Chaurasiya</span>
              </div>
              <div className="delete_chat">
                <p>
                  <BiSolidDislike />
                </p>
                <span>Report Niraj Chaurasiya</span>
              </div>

              <div className="delete_chat">
                <p>
                  <MdDelete />
                </p>
                <span>Delete chat</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
