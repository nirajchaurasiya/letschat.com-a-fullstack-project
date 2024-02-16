import "../styles/user-info.css";
import Top from "../sub-components/Top";
export default function UserInformation() {
  return (
    <div className="user-info-container">
      <div className="top-header user-info-header">
        <Top title="User Information" />
      </div>
    </div>
  );
}
