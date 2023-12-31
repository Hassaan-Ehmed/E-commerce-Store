import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import logo from  '../images/Cart-Shop-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass ,faRightFromBracket,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useProduct } from '../context/store';


const Navbar = () => {

const store = useProduct();


const [search,setSearch] = useState(false)


// Temporay store user text's value on change Event  untill user not press Any Key  
  const[inputText,setInputText] = useState("");


  // function for Search Functionality this function invoke when user press Key 
  // and store user's text to store if Enter Key Press

const _actionForText=(e)=>{

if(e.keyCode=="13")
  store.setSearchText(inputText)

}



const _navigate = useNavigate()


// Home Page Wrapp in Route Protecting and want Token 
/* Logout Button Click this function will invoke and  remove token from Local Storage
and then redirect it to Login Page
*/
const _logout=()=>{

localStorage.removeItem("Token");

_navigate("/Login");

}


  return (
    <>
    

    
<div className='h-[5.3vw] w-[100%] bg-white  shadow-[#dddd] shadow-sm flex  justify-between  fixed top-0 '>



{/* For Title & Logo */}
<div className='w-[20%] h-[100%] flex justify-center items-center'>

<img src={logo} alt="" className='h-[5.5vw]'/>

<h1 className='font-medium text-[2vw] cursor-pointer'><Link to={'/'}>Super Store</Link></h1>

</div>



{/* For Nav Links */}
<div className='w-[40%] h-[100%] flex justify-center items-center  '>

{search ? (
 
<input type="text" name="text" id="text" className=' shadow-md  shadow-slate-300 w-[300px] text-xl text-start border-2 border-[#333333] flex justify-start items-center '  placeholder='search your item...' onChange={(e)=>setInputText(e.target.value)} onKeyDown={(e)=>_actionForText(e)} />

):(
  <ul className='flex justify-between items-center w-[100%] bg-white'>
  
  <li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>
    
    <Link to={'/'}>Home</Link>
    
    </li>
  <li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>About</li>

  <li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>
    <Link to={'/Grocery'}>
    Grocery
    </Link>
    </li>


  <li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>
    <Link to={'/Electronics'}>
    Electronics
    </Link>
    </li>

  <li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>Contact Us</li>
  
  </ul>)}
</div>



{/* For Last Icons */}
<div className='w-[20%] h-[100%] flex  justify-center items-center gap-5'>

<FontAwesomeIcon icon={faMagnifyingGlass}  className='text-[2vw] hover:text-[#E52F06] 

cursor-pointer' onClick={()=>{setSearch(!search);store.setSearchText("")}}/>


{/* 

when search btn press function will invoke  if nav links is on so ...
this function hide navlinks and show Search bar and same as search (Search = Nav Link )

*/}



<Link to={'/Cart'}>

<div className='flex flex-col justify-between items-center w-[33px]'>

<div className='rounded-full bg-[#E52F06] w-[23px] h-[22px] flex justify-center items-center text-white ml-[15px]'>{store.productItems.length  }</div>
< FontAwesomeIcon icon={faCartShopping} className='text-[2vw] hover:text-[#E52F06] cursor-pointer mb-3' />
</div>

</Link>


<FontAwesomeIcon icon={faRightFromBracket} className='text-[2vw] hover:text-[#E52F06] cursor-pointer'

onClick={_logout}
/>
</div>

    </div>
    
    
    </>
  )
}

export default Navbar
