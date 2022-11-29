import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

function Login({setUserData}) {
  const navigate = useNavigate();
  const [loginData, setLoginData]= useState({
    password:'', 
    email:''
  })
  // useEffect(()=>{
  //   authorization()
  // },[])

  const [message, setMessage] =  useState('')
  let getLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  let sendLoginData = async (e) => {
    // console.log(loginData);
    e.preventDefault();
    console.log(loginData);
    let {data} = await axios.post("http://localhost:3000/api/v1/auth/signin",loginData);
    setMessage(data?.messge);
    // console.log(data.loginToken);
    if(data.message ==="login"){
      // navigate('/messages');
      navigate({
        pathname: '/messages',
        search: `?email=${loginData.email}`
      });
      localStorage.setItem('token', data.loginToken);
      // let decoded = jwtDecode(data.loginToken);
    // console.log(decoded);
      // console.log(first)
      // setUserData();
    }
  };
  // function authorization(){
  //   axios.interceptors.request.use(req => {
  //     // `req` is the Axios request config, so you can modify
  //     // the `headers`.
  //     req.headers.authorization = 'tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzEwOTcwYjg3ODBmMWZkYjAwMmNjZSIsImlzTG9nZ2luIjp0cnVlLCJpYXQiOjE2NjgzNTI0MTN9.LuwEs4Qk4WsNxWCcfuxfUCwDMzzaJEw1FH3osPCjQKE';
  //     // console.log(req);
  //     return req;
  //   });
  // }
  
  return (
    <>
    {/* console.log(object); */}
   <div className="container text-center my-5">
  <div className="user my-3">
    <i className="fas fa-user-secret user-icon" />
    <h4 className="login">Login</h4>
  </div>
  <div className="card p-5 w-50 m-auto">
    <form method="POST" action="/handleLogin" onSubmit={sendLoginData}>
      <input className="form-control" placeholder="Enter your email" type="text" name="email" onChange={getLogin} />
      
      <label className='' htmlFor="">{setMessage !==""? <small>{message}</small>:null }</label>

      <input className="form-control my-4 " placeholder="Enter your Password" type="text" name="password"  onChange={getLogin} />
      <button className="btn btn-default-outline my-4 w-100 rounded" type="submit">Login</button>
      <p><Link className="text-muted forgot btn" to='/'>I Forgot My Password</Link></p>
      <Link className="btn btn-default-outline" to="/register">Register</Link>
    </form>
  </div>
</div>

    </>
  )
}

export default Login