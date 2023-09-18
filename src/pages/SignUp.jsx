import React, { useState } from 'react'
import {Link, json, redirectDocument, useNavigate} from 'react-router-dom';
export default function SignUp() {



  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  let Users = []
  let bool; 
  

// First Get Users Array from Local Storage 

  let item = localStorage.getItem("Users");
  

  // If Available so convert it to normal 
  if(item){
    Users = JSON.parse(item);
    
  }
  
  const _navigate = useNavigate();




  // Function will invoke when user want to Sign up
  const addUser=(e)=>{
    
    e.preventDefault()

  //  to Enter This Condition you must be filled all fields

    if((!name=="") && (!email=="") && (!password=="")){ 


// localStorage se Users array pe run Loop and check every index's email if email alreday exsist
// so redirect it to Login Page and return 


    for(let i=0; i<Users.length; i++){

      
      if(Users[i].userEmail == email){
    
        _navigate("/Login");

      return

      }
      else {
// If Email is new so check password 
// (if password is matched with exsisting password so it will alert ) 
              if( Users[i].userPassword == password){

                    alert("Choose Different Password");
                  
                    return
                  
                  }
          }
        }
        
// Otherwise : The Email & Password is new so now it will proceed

// Note : This Array comes from localStorage and we normalize them 


// Create Object With User values and push to array The LocalStorage's User array will updated

        let userInfo = {userName:name, userEmail : email, userPassword : password, }

        Users.push(userInfo)
    
// and then we set to in Local Storage    
          localStorage.setItem("Users",JSON.stringify(Users));




// when user's account create succcessfully we also assign him random number becuase of Route=Protecting
// Home Componet want's Token it will helpful for Acccess
          // Generate Random Number for Token 
          let TokenX = Math.floor(Math.random()*100) 

          localStorage.setItem("Token",JSON.stringify(TokenX));
    
       _navigate("/");

// And after successfully set Token we Redirect  to Home


  }


  }


  return (
   <>
   <form>


    
<div className="wrapper w-[100%] h-[100vh] bg-[white] flex justify-center items-center">

<div className='signup-box h-[90vh] w-[60%] bg-[#EEEEEE] flex flex-col justify-between shadow-lg shadow-[#333333]' >

<div className='form-title flex justify-center items-center h-[10%] w-[100%]'>
<h1 className='text-4xl font-sans'>Create Account</h1>
</div>


<div className="form-control bg-[#EEEEEE]  h-[90%] w-[100%] flex justify-center items-center">

<form>
<table className='flex flex-col justify-between w-[100%]'>



{bool ?  (<tr className='mt-5 flex  justify-center gap-[58px]'><label className='text-xl text-[#ff2020]'>* Please fill out this Form </label></tr>
)
:""

}


<tr className='mt-5 flex  justify-center gap-[58px]'><label className='text-xl'>Name</label><input type="text" name="name" id="name" className=' py-[5px] w-[20vw] text-xl ' onChange={(e)=>setName(e.target.value)} required/></tr>

<tr className='mt-5 flex  justify-center gap-[58px]'><label className='text-xl'>Email</label><input type="email" name="email" id="email" className=' py-[5px] w-[20vw] text-xl ' onChange={(e)=>setEmail(e.target.value)} required/></tr>

<tr className='mt-5 flex  justify-center gap-[24px]'><label className='text-xl'>Password</label><input type="password" name="password" id="password" className=' py-[5px] w-[20vw] text-xl ' onChange={(e)=>setPassword(e.target.value)} required/></tr>
<tr className='mt-5  flex justify-between items-center '><label className='font-medium text-[#333333]'>Already have an account? <span className='text-[#E52F06] font-bold cursor-pointer'><Link to={'/Login'}>Log In</Link></span> </label><button className='bg-[#E52F06] py-[10px] px-[20px] rounded-3xl text-white text-md shadow-[0px_9px_8px_-6px_#333333] active:shadow-none active:delay-75' onClick={addUser} >Sign Up</button></tr>


</table>

</form>


</div>



</div>
</div>


</form>

   </>
  )
}
