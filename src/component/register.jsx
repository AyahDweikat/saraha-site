import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Register() {
  const navigate = useNavigate();
  let [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let getUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  let sendData = async (e) => {
    e.preventDefault();
    let { data } = await axios.post(
      "http://localhost:3000/api/v1/auth/signup",
      user
    );
    if (data.message === "done") {
      navigate("/login");
    }
  };

  return (
    <>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="container text-center my-5"
      >
        <motion.div className="user my-3">
          <motion.i
            style={{ y: -50 }}
            animate={{ y: 0 }}
            className="fas fa-user-secret user-icon"
          />
          <motion.h4 style={{ y: -100 }} animate={{ y: 0 }} className="login">
            Register
          </motion.h4>
        </motion.div>
        <motion.div
          transition={{ layout: { duration: 5 } }}
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="card p-5 w-50 m-auto"
        >
          <form onSubmit={sendData}>
            <AnimatePresence>
              <motion.input
                style={{ y: -150 }}
                animate={{ y: 0 }}
                onChange={getUser}
                className="form-control"
                placeholder="Enter your Name"
                type="text"
                name="userName"
              />
              <motion.input
                style={{ y: -300 }}
                animate={{ y: 0 }}
                onChange={getUser}
                className="form-control my-4 "
                placeholder="Enter your eamil"
                type="text"
                name="email"
              />
              <motion.input
                style={{ y: -450 }}
                animate={{ y: 0 }}
                onChange={getUser}
                className="form-control my-4 "
                placeholder="Enter your Password"
                type="text"
                name="password"
              />
              <motion.input
                style={{ y: -600 }}
                animate={{ y: 0 }}
                onChange={getUser}
                className="form-control my-4 "
                placeholder="Enter Confirm Password"
                type="text"
                name="cpassword"
              />
              <button
                className="btn btn-default-outline btnLogin"
                type="submit"
              />
            </AnimatePresence>
            <motion.button
              style={{ x: -750 }}
              animate={{ x: 0 }}
              className="btn btn-default-outline"
              type="submit"
            >
              Register
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Register;
