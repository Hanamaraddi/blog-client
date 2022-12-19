import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>

      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
