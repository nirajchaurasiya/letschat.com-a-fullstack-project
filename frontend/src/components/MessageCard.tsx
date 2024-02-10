import { NavLink } from "react-router-dom";
import "../styles/card-message.css";
import { getDifferentBgColour } from "../utils/getdifferentbgcolours";
type MessageCardType = {
  active?: boolean;
  index?: number;
};
export default function MessageCard({ active, index }: MessageCardType) {
  const getColours = getDifferentBgColour();
  return (
    <NavLink to={`/${index}`}>
      <div className={`card-message ${active ? " active" : ""} `}>
        <div className="card-profile">
          {/* <img src="/user1.jpg" alt="user-pic" /> */}
          <p className="text-bg" style={{ backgroundColor: getColours }}>
            N
          </p>
          <div className="user-name-msg">
            <p>Niraj Chaurasiya</p>
            <p>Hey, how are you?</p>
          </div>
        </div>

        <div className="last-chat-time">
          <p>1 hr ago</p>
        </div>
      </div>
    </NavLink>
  );
}
