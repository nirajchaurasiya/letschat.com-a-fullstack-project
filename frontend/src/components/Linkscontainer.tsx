import "../styles/linkscontainer.css";
import {
  BiGroup,
  BiHistory,
  BiHome,
  BiSearch,
  BiSolidGroup,
  BiSolidHome,
  BiSolidSearch,
  BiSolidUserCircle,
  BiUserCircle,
} from "react-icons/bi";
import { LiaHistorySolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import { getLocation } from "../utils/getLocation";
import { IoLogOut } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
export default function Linkscontainer() {
  let newPathName = getLocation();
  return (
    <>
      <Link to="/">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
      </Link>
      <div className="tab-icons">
        <NavLink to="/">
          <div
            className={`icon ${
              newPathName?.split("/")[0] === "messages" && " active"
            }`}
          >
            {newPathName === "" || newPathName?.split("/")[0] === "messages" ? (
              <BiSolidHome />
            ) : (
              <BiHome />
            )}
          </div>
        </NavLink>
        <NavLink to="/search">
          <div className="icon">
            {newPathName === "search" ? <BiSolidSearch /> : <BiSearch />}
          </div>
        </NavLink>
        <NavLink to="/group-messages">
          <div className="icon">
            {newPathName === "group-messages" ? <BiSolidGroup /> : <BiGroup />}
          </div>
        </NavLink>
        <NavLink to="/user-history">
          <div className="icon">
            {newPathName === "user-history" ? (
              <LiaHistorySolid />
            ) : (
              <BiHistory />
            )}
          </div>
        </NavLink>
        <NavLink to="/profile">
          <div className="icon">
            {newPathName === "profile" ? (
              <BiSolidUserCircle />
            ) : (
              <BiUserCircle />
            )}
          </div>
        </NavLink>
        <NavLink to="/logout">
          <div className="icon">
            {newPathName === "logout" ? <IoLogOut /> : <MdOutlineLogout />}
          </div>
        </NavLink>
      </div>
    </>
  );
}
