import { useEffect, useState } from "react";
import BlockedAccount from "../components/BlockedAccount";
import DeleteAccount from "../components/DeleteAccount";
import Home from "../components/Home";
import Profile from "../components/Profile";
import SelectaMessage from "../components/SelectaMessage";
import SingleMessage from "../components/SingleMessage";
import UserInformation from "../components/UserInformation";
import ViewSearchedPerson from "../components/ViewSearchedPerson";
import { LayoutParamsType } from "../types/Types";
import { useLocation } from "react-router-dom";

export default function Layout({
  home,
  groupMessages,
  history,
  profile,
  search,
  logout,
  message,
  isGroup,
  blockedAccounts,
  userInformation,
  deleteAccount,
}: LayoutParamsType) {
  const [widthOfWindow, setWidthOfWindow] = useState(0);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query");
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.outerWidth;
      setWidthOfWindow(windowWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Home
      home={home}
      groupMessages={groupMessages}
      history={history}
      profile={profile}
      search={search}
      logout={logout}
      message={message}
      isGroup={isGroup}
      deleteAccount={deleteAccount}
      userInformation={userInformation}
      blockedAccounts={blockedAccounts}
      widthOfWindow={widthOfWindow}
    >
      {home && <SelectaMessage widthOfWindow={widthOfWindow} />}
      {message && <SingleMessage />}
      {search && searchQuery && (
        <ViewSearchedPerson widthOfWindow={widthOfWindow} />
      )}
      {search && widthOfWindow > 575 && !searchQuery && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "30vh",
            fontSize: "17px",
            fontWeight: "700",
          }}
        >
          <p>Search an user to view</p>
        </div>
      )}
      {groupMessages && isGroup && (
        <Profile widthOfWindow={widthOfWindow} isGroup={isGroup} />
      )}
      {groupMessages && widthOfWindow > 575 && !isGroup && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "30vh",
            fontSize: "17px",
            fontWeight: "700",
          }}
        >
          <p>Select a group to view</p>
        </div>
      )}
      {profile &&
        widthOfWindow > 575 &&
        !userInformation &&
        !blockedAccounts &&
        !deleteAccount && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginTop: "30vh",
              fontSize: "17px",
              fontWeight: "700",
            }}
          >
            <p>Tab on left options to view</p>
          </div>
        )}
      {deleteAccount && <DeleteAccount />}
      {userInformation && <UserInformation widthOfWindow={widthOfWindow} />}
      {blockedAccounts && <BlockedAccount />}
    </Home>
  );
}
