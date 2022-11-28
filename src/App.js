import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Login from './component/Login';
import User from './component/User';
import Register from './component/Register';
import Notfound from './component/Notfound';
import { Routes , Route} from 'react-router-dom';
import Messages from './component/Messages';
import jwtDecode from 'jwt-decode';


function App() {
  let [loginData, setLoginData] = useState(null);
  let [token, setToken] =  useState()
  function setUserData(){
    let _token = localStorage.getItem('token');
    // console.log(_token)
    // let decoded = jwtDecode(token);
    // setLoginData(decoded);
    setToken(_token);
  }
  useEffect(()=>{
    if(localStorage.getItem('token')){
      setUserData();
    }
    // console.log(token);
  }, [token])
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login setUserData={setUserData} />}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/messages' element={<Messages token={token}/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
    </Routes>
    
    </>
  )
}

export default App