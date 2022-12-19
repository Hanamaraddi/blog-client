import React, { useContext } from "react";
import "./Navbar.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const PF = "http://localhost:5000/images/";

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="topLeft">
        <FacebookOutlinedIcon className="topIcon" />
        <TwitterIcon className="topIcon" />
        <PinterestIcon className="topIcon" />
        <InstagramIcon className="topIcon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink to="/" className="link">
              HOME
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/write" className="link">
              WRITE
            </NavLink>
          </li>
          <li className="topListItem" onClick={handleClick}>
            <NavLink to="/login" className="link">
              {user && "LOGOUT"}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <NavLink to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </NavLink>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <NavLink to="/login" className="link">
                Login
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/register" className="link">
                Register
              </NavLink>
            </li>
          </ul>
        )}

        <SearchOutlinedIcon className="topSearchIcon" />
      </div>
    </div>
  );
};

export default Navbar;
