import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { motion } from "framer-motion";

function Login({getCheckLogin}) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loginData, setLoginData] = useState({
    password: "",
    email: "",
  });
  let getLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  let sendLoginData = async (e) => {
    e.preventDefault();
    let { data } = await axios.post(
      "http://localhost:3000/api/v1/auth/signin",
      loginData
    );
    setMessage(data.messge);
    if (data.message === "login") {
      navigate({
        pathname: "/messages",
        search: `?email=${loginData.email}`,
      });
      localStorage.setItem("token", data.loginToken);
      getCheckLogin(true);
    }
  };
  function pass() {
    navigate({
      pathname:'/forgetpassword'
    });
  }

    return (
      <>
        <div className="container text-center my-5">
          <motion.div transition={{ delay: 15 }} className="user my-3">
            <motion.i
              style={{ y: -150 }}
              animate={{ y: 0 }}
              className="fas fa-user-secret user-icon"
            />
            <motion.h4 style={{ y: -150 }} animate={{ y: 0 }} className="login">
              Login
            </motion.h4>
          </motion.div>
          <motion.div
            transition={{ delay: 15 }}
            className="card p-5 w-50 m-auto"
          >
            <form method="POST" action="/handleLogin" onSubmit={sendLoginData}>
              <motion.input
                style={{ y: -150 }}
                animate={{ y: 0 }}
                className="form-control"
                placeholder="Enter your email"
                type="text"
                name="email"
                onChange={getLogin}
              />
              <label className="" htmlFor="">
                {message !== "" ? <small>{message}</small> : null}
              </label>
              <motion.input
                style={{ y: -300 }}
                animate={{ y: 0 }}
                className="form-control my-4 "
                placeholder="Enter your Password"
                type="text"
                name="password"
                onChange={getLogin}
              />
              <motion.button
                style={{ y: -450 }}
                animate={{ y: 0 }}
                className="btn btn-default-outline my-4 w-100 rounded btnLogin"
                type="submit"
              >
                Login
              </motion.button>
              <motion.p style={{ x: -150 }} animate={{ x: 0 }}>
                <motion.Link
                  className="text-muted forgot btn "
                  onClick={pass}
                  to="/forgetpassword"
                >
                  I Forgot My Password
                </motion.Link>
              </motion.p>
              <motion.Link
                style={{ x: -500 }}
                animate={{ x: 0 }}
                className="btn btn-default-outline"
                to="/register"
              >
                Register
              </motion.Link>
            </form>
          </motion.div>
        </div>
      </>
    );
}
export default Login;

