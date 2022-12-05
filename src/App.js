import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Login from './component/Login';
import User from './component/User';
import Register from './component/Register';
import Notfound from './component/Notfound';
import { Routes , Route} from 'react-router-dom';
import Messages from './component/Messages';
import axios from 'axios';


function App() {
  let [loginData, setLoginData] = useState(null);
  let [userData, setUserData] = useState([{}]);// email& name& id
  const [allUsers, setAllUsers] = useState([]);// alllll
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
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/user' element={<User
      allUser={allUsers}/>}></Route>
      <Route path='/messages' element={<Messages userData={userData} />}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
    </Routes>
    </>
  )
}

export default App