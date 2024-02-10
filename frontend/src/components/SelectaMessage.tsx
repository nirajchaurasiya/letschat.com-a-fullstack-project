import { BiSolidLock } from "react-icons/bi";
import "../styles/selectamsg.css";
export default function SelectaMessage() {
  return (
    <div className="select-container">
      <p>Send and receive messages with your email only</p>
      <div className="encryption-msg-select">
        <p>
          <BiSolidLock />
        </p>
        <span>End-to-end encrypted</span>
      </div>
    </div>
  );
}
