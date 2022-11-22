import React from 'react'
import {Link} from 'react-router-dom'

function register() {
  return (
   <>
   <div className="container text-center my-5">
  <div className="user my-3">
    <i className="fas fa-user-secret user-icon" />
    <h4 className="login">Register</h4>
  </div>
  <div className="card p-5 w-50 m-auto">
    <form method="POST" action="/handleLogin">
      <input className="form-control" placeholder="Enter your Name" type="text" name="username" />
      <input className="form-control my-4 " placeholder="Enter your eamil" type="text" name="email" />
      <input className="form-control my-4 " placeholder="Enter your Password" type="text" name="password" />
      <input className="form-control my-4 " placeholder="Enter Confirm Password" type="text" name="cpassword" />
      <Link className='btn btn-default-outline' to='/login'>Register</Link>
    </form>
  </div>
</div>
   </> 
  )
}

export default register