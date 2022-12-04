import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Changepassword() {
    let nav =useNavigate();
    let [user, setUser] = useState({
        email: "",
        code: "",
        password: "",
      });

    let change = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
      };
    let sendData = async (e) => {
        e.preventDefault();
        let {data} = await axios.patch("http://localhost:3000/api/v1/auth/forgetpassword",user);
        console.log(data);
        if(data.message==="Done"){
            nav("/login");
        }
    }
    return (
    <>
    <div className='container text-center pt-5'>
        <h2>Enter the Following </h2>
        <form onSubmit={sendData}>
        <input  className="labeemail form-control w-50 text-center mt-5  " placeholder="Enter your email" type="text" name="email"onChange={change}  />
        <input  className="labeemail form-control w-50 text-center mt-3 " placeholder="Enter the code from email" type="text" name="code"onChange={change}  />
        <input  className="labeemail form-control w-50 text-center mt-3" placeholder="Enter new password" type="text" name="password"onChange={change}  /> 
        <button  className="btn btn-default-outline my-4 w-50 rounded" type="submit" >That's It</button>   
        </form>
    </div>
    </>
  )
}

export default Changepassword