import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Top({
  title,
  payload,
}: {
  title?: string;
  payload?: string;
}) {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <div className="back-sign">
      <BiArrowBack onClick={navigateBack} />
      <div className="account-details">
        <p>{title}</p>
        <p>{payload}</p>
      </div>
    </div>
  );
}
