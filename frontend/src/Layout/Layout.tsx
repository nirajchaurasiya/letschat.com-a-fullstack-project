import Home from "../components/Home";
import { LayoutParamsType } from "../types/Types";
import { getLocation } from "../utils/getLocation";

export default function Layout({
  home,
  groupMessages,
  history,
  profile,
  search,
  logout,
}: LayoutParamsType) {
  const location = getLocation();
  return (
    <Home
      home={home}
      groupMessages={groupMessages}
      history={history}
      profile={profile}
      search={search}
      logout={logout}
    >
      <p>hello {location}</p>
    </Home>
  );
}
