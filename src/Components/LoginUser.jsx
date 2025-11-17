import React, { useState} from "react";
import styles from "../styles/CreateUser.module.scss"
import {useNavigate} from "react-router-dom"
import axios from "axios";

// This route is for fastApi
// http://127.0.0.1:8000/loginUser

//This route is for node js
// http://localhost:8000/loginUser

export const LoginUser = ()=>{
    const [mobile,setMobile] = useState()
    const [otp,setOtp] = useState()
    const navigate = useNavigate()
    const checkNumber = (num) => {
        return /^[0-9]+$/.test(num);
      };
    const apiCall = async () => {
        return await axios.post("http://127.0.0.1:8000/loginUser", {mobile,otp });
      };
    
      const loginHandler = async () => {
        try {
        if (!mobile || !otp) {
          alert("Please fill all fields");
          return;
        }
    
        if (!checkNumber(mobile)) {
          alert("Please enter a valid mobile number (digits only)");
          return;
        }
    
        
          await apiCall();
          alert("User Login successfully");
          navigate("/home");
        } catch (error) {
          console.error(error);
          alert("Error login user");
        }
      };

    return (
        <div className={styles.container}>
            <h2>LOGIN USER</h2>
            <div className={styles.form}>
                <input onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile"/>
                <input onChange={(e) => setOtp(e.target.value)} placeholder="Enter Otp"/>
                <button onClick={()=>{loginHandler()}}>LOGIN</button>
            </div>
        </div>
    )
}