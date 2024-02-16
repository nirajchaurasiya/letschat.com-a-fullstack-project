import Home from "../components/Home";
import Profile from "../components/Profile";
import SelectaMessage from "../components/SelectaMessage";
import SingleMessage from "../components/SingleMessage";
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
    >
      {home && <SelectaMessage />}
      {message && <SingleMessage />}
      {search && <ViewSearchedPerson />}
      {groupMessages && isGroup && (
        <Profile groupMessages={groupMessages} isGroup={isGroup} />
      )}
    </Home>
  );
}
