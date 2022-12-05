import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Logout({getCheckLogin}) {
    console.log(localStorage.getItem('token'));
    const navigate =useNavigate();
    
    function logout(){
    if(localStorage.getItem('token') !==''){
        localStorage.removeItem('token');
        getCheckLogin(false);
        navigate({
            pathname: "/login"
          });
    }
}
useEffect(()=>{
    logout()
},[])
  return (
    <div>Logout</div>
  )
}

export default Logout