import React, { useContext, useEffect, useState } from "react";
import "./Singlepost.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

const Singlepost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const PF = "http://localhost:5000/images/";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const [post, setPost] = useState({});
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);

      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const updateHandler = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <EditOutlinedIcon
                  className="singlePostIcon"
                  onClick={() => setUpdateMode(true)}
                />
                <DeleteOutlineOutlinedIcon
                  className="singlePostIcon"
                  onClick={deleteHandler}
                />
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author :
            <NavLink to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </NavLink>
          </span>
          <span className="singlePostDate">
            {" "}
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{post.desc}</p>
        )}

        {updateMode && (
          <button className="singlePostBtn" onClick={updateHandler}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default Singlepost;
