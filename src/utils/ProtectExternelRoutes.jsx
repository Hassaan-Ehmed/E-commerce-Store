import React from 'react'
import { Navigate } from 'react-router-dom';



// This is a Logic for Route-Protecting On  Login & SignUp Pages



export default function ProtectExternelRoutes({children}) {

    let checkToken = JSON.parse(localStorage.getItem("Token"));


    if(checkToken){

return <Navigate to={'/'} replace/>

    }


    return children;

}
