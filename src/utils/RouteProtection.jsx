import React from 'react'
import { Navigate } from 'react-router-dom';

export default function RouteProtection({children}) {

    let checkToken = JSON.parse(localStorage.getItem("Token"));


    if(!checkToken){

return <Navigate to={'/SignUp'} replace/>

    }

    return children;

}
