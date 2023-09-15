import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  
const _navigate= useNavigate(); 

const removeToken=()=>{

localStorage.removeItem("userName");

_navigate("/Login")

    }
    return (
   <button onClick={removeToken}>Logout</button>
  )
}
