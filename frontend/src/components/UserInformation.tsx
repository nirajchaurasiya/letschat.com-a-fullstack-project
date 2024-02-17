import "../styles/user-info.css";
import Top from "../sub-components/Top";
export default function UserInformation({
  widthOfWindow,
}: {
  widthOfWindow: number;
}) {
  const handleSaveChanges = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className="user-info-container">
      <div className="top-header user-info-header">
        <Top widthOfWindow={widthOfWindow} title="User Information" isProfile />
      </div>
      <div className="user-profile-mid-container">
        <div className="user-cover-image">
          <img src="/bg.jpg" alt="" />
        </div>
        <div className="user-credentials">
          <div className="user-avatar-img">
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img src="/user1.jpg" alt="" />
              <p style={{ fontWeight: "600", fontSize: "20px" }}>
                Niraj Chaurasiya
              </p>
            </div>
          </div>
          <form onClick={handleSaveChanges} className="user-name-and-bio">
            <div className="user-input">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Current Name: Niraj Chaurasiya"
              />
            </div>
            <div className="user-input">
              <label htmlFor="bio">About</label>
              <textarea
                id="bio"
                placeholder="Current bio: Frontend developer passionate about building user-friendly applications."
              />
            </div>
            <div className="action-buttons">
              {/* <div className="action-button">
                <button type="reset">Reset</button>
              </div> */}
              <div className="action-button">
                <button type="submit">Save Changes</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
