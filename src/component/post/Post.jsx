import React from "react";
import "./Post.css";
import { NavLink } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCats">Music</span>
          ))}
        </div>
        <NavLink to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </NavLink>
        <hr />

        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
