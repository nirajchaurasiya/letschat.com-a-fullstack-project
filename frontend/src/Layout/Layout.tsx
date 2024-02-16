import BlockedAccount from "../components/BlockedAccount";
import DeleteAccount from "../components/DeleteAccount";
import Home from "../components/Home";
import Profile from "../components/Profile";
import SelectaMessage from "../components/SelectaMessage";
import SingleMessage from "../components/SingleMessage";
import UserInformation from "../components/UserInformation";
import ViewSearchedPerson from "../components/ViewSearchedPerson";
import { LayoutParamsType } from "../types/Types";

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
    >
      {home && <SelectaMessage />}
      {message && <SingleMessage />}
      {search && <ViewSearchedPerson />}
      {groupMessages && isGroup && (
        <Profile groupMessages={groupMessages} isGroup={isGroup} />
      )}
      {deleteAccount && <DeleteAccount />}
      {userInformation && <UserInformation />}
      {blockedAccounts && <BlockedAccount />}
    </Home>
  );
}
