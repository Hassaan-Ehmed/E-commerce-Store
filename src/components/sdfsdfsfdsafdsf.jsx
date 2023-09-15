import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Xsdasdasddasdsd() {

    const navigate = useNavigate();


const removeToken=()=>{

localStorage.removeItem("userName");

navigate("/");

}

  return (
  <button onClick={removeToken}>
    Logout
  </button>
  )
}
