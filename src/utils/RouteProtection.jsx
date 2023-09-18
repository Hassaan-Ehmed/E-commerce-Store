import React from 'react'
import { Navigate } from 'react-router-dom';



// This is a Logic for Route-Protecting in ReactJS


/*
When you Wrapp Any Element Like : Home, Cart , Profile and more... in this function 

it take that element in his parameter  as children and check token 

if you Sign in or Login so you have a Token but this function just check if you have don't token so 
i will return Navigate Component it looks similar to useNavigate() but this is a Component
and Navigate Component change Url and redirect you to Signup because you don't have access 
App without any Token first Create Account then Login 
(if User Changes URL and want to go /Home it will replace /SignUp Untill  it have an Token)
*/

export default function RouteProtection({children}) {

    let checkToken = JSON.parse(localStorage.getItem("Token"));


    if(!checkToken){

return <Navigate to={'/SignUp'} replace/>

    }


    // If You Have a Account in other words your create a account so it will return
    // that children (Home)

    return children;

}
