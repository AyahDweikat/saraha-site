import React from 'react'
import Navbar from './component/navbar';
import Login from './component/login';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import User from './component/User';
import './App.css';
import Register from './component/register';
import Notfound from './component/notfound';

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