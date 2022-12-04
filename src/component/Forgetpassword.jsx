import  axios  from 'axios';
import React from 'react'
import { useState } from 'react';
import './Forgetpassword.css';
import { useNavigate } from 'react-router-dom';


function Forgetpassword() {
    const navigate = useNavigate();
    const [forgetpass, setForgetpass]= useState({ 
        email:" "
      })

    let getLogin = (e) => {
        setForgetpass({ ...forgetpass, [e.target.name]: e.target.value });
      };
      let sendData = async (e) => {
        e.preventDefault();
        let data = await axios.patch("http://localhost:3000/api/v1/auth/sendCode",forgetpass);
        console.log(data);
        if(data.message === "Done , plz check your Email To Change Password"){
            navigate('/changepassord');
        }
      }

  return (
   <>
   <div className='container pt-5 text-center'>
        <h2 className='mb-4 text-center'>please enter your eamil</h2>
        <form onSubmit={sendData}>
        <input  className="labeemail form-control w-50 text-center " placeholder="Enter your email" type="text" name="email" onChange={getLogin} />
        <button  className="btn btn-default-outline my-4 w-50 rounded" type="submit"  >send email</button>
        </form>
   </div>

   </>
  )
}

export default Forgetpassword