import React, { useState } from "react";
import axios from "axios";

function Register() {
  let [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let getUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };


  let sendData = async (e) => {
    // console.log(user);
    e.preventDefault();
    let {data} = await axios.post("http://localhost:3000/api/v1/auth/signup",user);
    console.log(data.message);
    console.log(data);
  };
  return (
    <>
      <div className="container text-center my-5">
        <div className="user my-3">
          <i className="fas fa-user-secret user-icon" />
          <h4 className="login">Register</h4>
        </div>
        <div className="card p-5 w-50 m-auto">
          <form onSubmit={sendData}>
            <input
              onChange={getUser}
              className="form-control"
              placeholder="Enter your Name"
              type="text"
              name="userName"
            />
            <input
              onChange={getUser}
              className="form-control my-4 "
              placeholder="Enter your eamil"
              type="text"
              name="email"
            />
            <input
              onChange={getUser}
              className="form-control my-4 "
              placeholder="Enter your Password"
              type="text"
              name="password"
            />
            <input
              onChange={getUser}
              className="form-control my-4 "
              placeholder="Enter Confirm Password"
              type="text"
              name="cpassword"
            />
            <button className="btn btn-default-outline" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
