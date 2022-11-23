import React from 'react'
import Navbar from './component/Navbar';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import User from './component/User';
import Register from './component/Register';
import Notfound from './component/Notfound';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>

    </Routes>
    
    </>
  )
}

export default App