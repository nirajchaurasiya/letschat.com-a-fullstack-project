import { BiArrowBack } from "react-icons/bi";

export default function Top() {
  return (
    <div className="back-sign">
      <BiArrowBack />
      <div className="account-details">
        <p>Niraj Chaurasiya</p>
        <p>Active: 1 hr ago</p>
      </div>
    </div>
  );
}
