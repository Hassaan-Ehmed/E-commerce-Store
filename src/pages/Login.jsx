import React, { useState } from 'react'
import {Link, json, redirectDocument, useNavigate} from 'react-router-dom';
export default function SignUp() {

  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  let Users = []
  let bool; 
  

  // Users array only contain emails and passwords of users
  let item = localStorage.getItem("Users");
  
  if(item){
    Users = JSON.parse(item);
    
  }
  
  const _navigate = useNavigate();

  const addUser=(e)=>{
    


    e.preventDefault()


   
    if((!email=="") && (!password=="")){ 

    for(let i=0; i<Users.length; i++){

      
      if((Users[i].userEmail == email) && (Users[i].userPassword == password) ){
    

   // Generate Random Number for Token 
   let TokenX = Math.floor(Math.random()*100) 

   localStorage.setItem("Token",JSON.stringify(TokenX));

_navigate("/")

      return

      }
      else {

            alert("Incorrect Credential");
          return
      }

        }



  }


  }


  return (
   <>
   <form>


    
<div className="wrapper w-[100%] h-[100vh] bg-[white] flex justify-center items-center">

<div className='signup-box h-[90vh] w-[60%] bg-[#EEEEEE] flex flex-col justify-between shadow-lg shadow-[#333333]' >

<div className='form-title flex justify-center items-center h-[10%] w-[100%]'>
<h1 className='text-4xl font-sans'>Log In</h1>
</div>


<div className="form-control bg-[#EEEEEE]  h-[90%] w-[100%] flex justify-center items-center">

<form>
<table className='flex flex-col justify-between w-[100%]'>



{bool ?  (<tr className='mt-5 flex  justify-center gap-[58px]'><label className='text-xl text-[#ff2020]'>* Please fill out this Form </label></tr>
)
:""

}




<tr className='mt-5 flex  justify-center gap-[58px]'><label className='text-xl'>Email</label><input type="email" name="email" id="email" className=' py-[5px] w-[20vw] text-xl ' onChange={(e)=>setEmail(e.target.value)} required/></tr>

<tr className='mt-5 flex  justify-center gap-[24px]'><label className='text-xl'>Password</label><input type="password" name="password" id="password" className=' py-[5px] w-[20vw] text-xl ' onChange={(e)=>setPassword(e.target.value)} required/></tr>
<tr className='mt-5  flex justify-between items-center '><label className='font-medium text-[#333333]'>you don't have an account? <span className='text-[#E52F06] font-bold cursor-pointer'><Link to={'/SignUp'}>Sign Up</Link></span> </label><button className='bg-[#E52F06] py-[10px] px-[20px] rounded-3xl text-white text-md shadow-[0px_9px_8px_-6px_#333333] active:shadow-none active:delay-75' onClick={addUser} >Log In</button></tr>


</table>

</form>


</div>



</div>
</div>


</form>

   </>
  )
}
