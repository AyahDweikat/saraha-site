import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ConfirmEmail.css';
function ConfirmEmail() {
  const navigate = useNavigate();

    function goToLogin(){
        navigate("/login");
    }
  return (
    <div className='confirmMsg'>
        <p>Please See Your Email</p>
        <button className='btn btn-default-outline btnLogin w-25' onClick={goToLogin}>If you confirm you email, got to Login </button>
    </div>
  )
}

export default ConfirmEmail