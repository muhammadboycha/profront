import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/CreateUser.module.scss";
import axios from "axios";
// This route is for fastApi
// http://127.0.0.1:8000/createUser

//This route is for node js
// http://localhost:8000/createUser

export const CreateUser = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const checkNumber = (num) => {
    return /^[0-9]+$/.test(num);
  };

  const apiCall = async () => {
   try{
    const response = await axios.post("http://localhost:8000/createUser", { name, mobile });
    const result = response.data;
    alert(result.message)
    return result;
   }catch(error){
    alert("Api call error");
   }
  };

  const createHandler = async () => {
    try {
    if (!name || !mobile) {
      alert("Please fill all fields");
      return;
    }

    if (!checkNumber(mobile)) {
      alert("Please enter a valid mobile number digits only");
      return;
    }
      apiCall();
      navigate("/login");
    } catch (error) {
      alert("Error creating user");
    }
  };

  return (
    <div className={styles.container}>
      <h2>CREATE USER</h2>
      <div className={styles.form}>
        <input onChange={(e) => setName(e.target.value)} placeholder="Enter Name"/>
        <input onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile"/>
        <button onClick={createHandler}>CREATE</button>
      </div>
    </div>
  );
};
