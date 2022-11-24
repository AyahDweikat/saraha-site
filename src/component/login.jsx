import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";

function Login() {
  const [loginData, setLoginData]= useState({
    password:'', 
    email:''
  })
  const [message, setMessage] =  useState('')
  let getLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  let sendLoginData = async (e) => {
    // console.log(loginData);
    e.preventDefault();
    let {data} = await axios.post("http://localhost:3000/api/v1/auth/signin",loginData);
    setMessage(data.messge);
    console.log(data);
  };
  return (
    <>
   <div className="container text-center my-5">
  <motion.div  transition={{delay:15}} className="user my-3">
    <motion.i style={{ y: -150 }} animate={{ y: 0 }} className="fas fa-user-secret user-icon" />
    <motion.h4  style={{ y: -150 }} animate={{ y: 0 }} className="login">Login</motion.h4>
  </motion.div>
  <motion.div transition={{delay:15}} className="card p-5 w-50 m-auto">
    <form method="POST" action="/handleLogin" onSubmit={sendLoginData}>
      <motion.input  style={{ y: -150 }} animate={{ y: 0 }} className="form-control" placeholder="Enter your email" type="text" name="email" onChange={getLogin} />
      <label className='' htmlFor="">{setMessage !==""? <small>{message}</small>:null }</label>
      <motion.input style={{ y: -300 }} animate={{ y: 0 }} className="form-control my-4 " placeholder="Enter your Password" type="text" name="password"  onChange={getLogin} />
      <motion.button style={{ y: -450 }} animate={{ y: 0 }} className="btn btn-default-outline my-4 w-100 rounded" type="submit">Login</motion.button>
      <motion.p style={{ x: -150 }} animate={{ x: 0 }}><Link className="text-muted forgot btn" to='/'>I Forgot My Password</Link></motion.p>
      <motion.Link style={{ x: -500 }} animate={{ x: 0 }} className="btn btn-default-outline" to="/register">Register</motion.Link>
    </form>
  </motion.div>
</div>

    </>
  )
}

export default Login