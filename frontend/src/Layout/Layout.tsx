import Home from "../components/Home";
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
    >
      {home && <SelectaMessage />}
      {message && <SingleMessage />}
      {search && <ViewSearchedPerson />}
    </Home>
  );
}
