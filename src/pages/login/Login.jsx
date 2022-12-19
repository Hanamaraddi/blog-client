import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching, error } = useContext(Context);

  const [failed, setFailed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setFailed(true);
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          className="loginInput"
          type="text"
          placeholder="Username"
          ref={userRef}
        />
        <input
          className="loginInput"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button className="loginBtn" type="submit">
          Login
        </button>
        {failed && (
          <span
            style={{ color: "red", marginTop: "10px", textAlign: "center" }}
          >
            Something Went Wrong
          </span>
        )}
      </form>
      <button className="loginRegisterBtn">
        <NavLink to="/register" className="link">
          Register
        </NavLink>
      </button>
    </div>
  );
};

export default Login;
