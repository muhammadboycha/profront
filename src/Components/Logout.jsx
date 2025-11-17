import React from "react";
import styles from "../styles/CreateUser.module.scss"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Logout = ()=>{
    const navigate = useNavigate()
    const logoutHandler = async()=>{
       try{
        localStorage.removeItem("token")
        const response = await axios.post("http://localhost:8000/logout");  
        alert(response.data.message)
        navigate("/")
       }catch(error){
       console.log("error",error.message)
       }
    }
    return(
        <div className={styles.container}>
           <h2> Click the button to logout</h2>
           <button className={styles.button} onClick={()=>{logoutHandler()}}>LOGOUT</button>
        </div>
    )
}