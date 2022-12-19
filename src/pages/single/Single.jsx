import React from "react";
import "./Single.css";
import Sidebar from "../../component/sidebar/Sidebar";
import Singlepost from "../../component/singlePost/Singlepost";

const Single = () => {
  return (
    <div className="single">
      <Singlepost />

      <Sidebar />
    </div>
  );
};

export default Single;
