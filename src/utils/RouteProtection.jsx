import React from 'react'
import { Navigate } from 'react-router-dom';

export default function RouteProtection({children}) {

    let checkToken = JSON.parse(localStorage.getItem("userName"));


    if(!checkToken){

return <Navigate to={'/Login'} replace/>

    }

    return children;

}
