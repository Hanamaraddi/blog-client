import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://cdn.pixabay.com/photo/2022/01/29/08/25/flowers-6976667_960_720.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c, index) => (
            <NavLink to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem" key={index}>
                {c.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <FacebookOutlinedIcon className="sidebarIcon" />
          <TwitterIcon className="sidebarIcon" />
          <PinterestIcon className="sidebarIcon" />
          <InstagramIcon className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
