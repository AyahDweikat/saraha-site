import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar';
import Home from './component/Home';
import User from './component/User';
import Notfound from './component/Notfound';
import { Routes , Route} from 'react-router-dom';
import Messages from './component/Messages';
import Forgetpassword from './component/Forgetpassword';
//import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Changepassword from './component/Changepassword';
import Login from './component/Login';
import Register from './component/Register';
import { Navigate } from 'react-router-dom';
import Logout from './component/Logout';
import ConfirmEmail from './component/ConfirmEmail';


function App() {
  let [loginData, setLoginData] = useState(null);
  let [userData, setUserData] = useState([{}]);// email& name& id
  const [allUsers, setAllUsers] = useState([]);// alllll
  const [checkLogin, setCheckLogin] =  useState(false);
  async function getAllUsers() {
    let { data } = await axios.get(
      "http://localhost:3000/api/v1/auth/allusers"
    );
    if (data.message === "success") {
      let obj=data.users.map((item)=>{
        return {userName:item.userName, email: item.email, id:item._id};
      })
      getUserNames(obj);
      setAllUsers(data.users);
    }
  }
  useEffect(() => {
    getAllUsers();
  }, []);

  function getUserNames(obj){
    if(obj !== []){
    setUserData(obj);
    }
  }
  function getCheckLogin(value){
    setCheckLogin(value)
  }
  return (
    <>
    <Navbar checkLogin={checkLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login getCheckLogin={getCheckLogin} />}></Route>
      <Route path='/logout' element={<Logout getCheckLogin={getCheckLogin}/>}></Route>
      <Route path='/user' element={<User
      allUser={allUsers}/>}></Route>
      <Route path='/messages' element={<Messages userData={userData} />}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/confirmEmail' element={<ConfirmEmail/>}></Route>
      <Route path='/forgetpassword' element={<Forgetpassword/>}></Route>
      <Route path='/changepassword' element={<Changepassword/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
    </Routes>
    </>
  )
}

export default App