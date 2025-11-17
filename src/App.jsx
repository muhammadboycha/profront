import React from 'react';
import './App.css'
import { CreateUser } from './Components/CreateUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginUser } from './Components/LoginUser';
import { Logout } from './Components/Logout';
function App() {

  return (
    <div >
      <BrowserRouter basename="/">
       <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
