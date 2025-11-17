import React from 'react';
import './App.css'
import { CreateUser } from './Components/CreateUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginUser } from './Components/LoginUser';
import { HomePage } from './Components/HomePage';
function App() {

  return (
    <div >
      <BrowserRouter basename="/">
       <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
