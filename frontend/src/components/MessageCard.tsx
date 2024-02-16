import { NavLink, useParams } from "react-router-dom";
import "../styles/card-message.css";
import { getDifferentBgColour } from "../utils/getdifferentbgcolours";
import { useContext } from "react";
import { ToggleProfile } from "../context/ToggleProfile";
import { MessageCardType } from "../types/Types";

export default function MessageCard({ data }: MessageCardType) {
  const allValues = useContext(ToggleProfile);
  if (!allValues) return null;
  const { setShowProfile } = allValues;
  const { userId } = useParams();
  const getColours = getDifferentBgColour();

  return (
    <NavLink
      to={
        data?.isGroup ? `/group-messages/${data?.id}` : `/messages/${data?.id}`
      }
      onClick={() => {
        if (userId !== data?.id) setShowProfile(false);
      }}
    >
      <div className={`card-message`}>
        <div className="card-profile">
          {data.isGroup ? (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLj_8pzpibGhDNjYNR_GccHZZ5ITc656d5g&usqp=CAU"
              alt="user-pic"
            />
          ) : (
            <p className="text-bg" style={{ backgroundColor: getColours }}>
              {data?.name?.slice(0, 1)}
            </p>
          )}
          <div className="user-name-msg">
            <p>{data.name}</p>
            <p>
              {data.isGroup
                ? data?.from + " : " + data.lastMessage
                : data.lastMessage}
            </p>
          </div>
        </div>

        <div className="last-chat-time">
          <p>{data.lastMessageDate}</p>
        </div>
      </div>
    </NavLink>
  );
}
