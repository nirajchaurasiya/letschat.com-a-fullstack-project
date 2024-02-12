import { NavLink, useParams } from "react-router-dom";
import "../styles/card-message.css";
import { getDifferentBgColour } from "../utils/getdifferentbgcolours";
import { useContext } from "react";
import { ToggleProfile } from "../context/ToggleProfile";
type MessageCardType = {
  data: {
    id: string;
    name: string;
    lastMessage: string;
    lastMessageDate: string;
  };
};
export default function MessageCard({ data }: MessageCardType) {
  const allValues = useContext(ToggleProfile);
  if (!allValues) return null;
  const { setShowProfile } = allValues;
  const { userId } = useParams();
  const getColours = getDifferentBgColour();

  return (
    <NavLink
      to={`/messages/${data?.id}`}
      onClick={() => {
        if (userId !== data?.id) setShowProfile(false);
      }}
    >
      <div className={`card-message`}>
        <div className="card-profile">
          {/* <img src="/user1.jpg" alt="user-pic" /> */}
          <p className="text-bg" style={{ backgroundColor: getColours }}>
            {data?.name?.slice(0, 1)}
          </p>
          <div className="user-name-msg">
            <p>{data.name}</p>
            <p>{data.lastMessage}</p>
          </div>
        </div>

        <div className="last-chat-time">
          <p>{data.lastMessageDate}</p>
        </div>
      </div>
    </NavLink>
  );
}
