import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import logo from  '../images/Wattpad-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass ,faRightFromBracket,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useProduct } from '../context/store';


const Navbar = () => {

const store = useProduct();


const [search,setSearch] = useState(false)

  const[inputText,setInputText] = useState("");



const _actionForText=(e)=>{

if(e.keyCode=="13")
  store.setSearchText(inputText)

}


const _navigate = useNavigate()

const _logout=()=>{

localStorage.removeItem("userName");

_navigate("/Login");

}


  return (
    <>
    

    
<div className='h-[5.3vw] w-[100%] bg-white  shadow-[#dddd] shadow-sm flex  justify-between fixed top-0 '>



{/* For Title & Logo */}
<div className='w-[20%] h-[100%] flex justify-center items-center'>

<img src={logo} alt="" className='h-[4vw]'/>

<h1 className='font-medium text-[2vw]' >Super Store</h1>

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
  <li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>Grocery</li>
  <li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>Cloths</li>
  <li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>Electronics</li>
  <li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>Contact Us</li>
  
  </ul>)}
</div>



{/* For Last Icons */}
<div className='w-[20%] h-[100%] flex  justify-center items-center gap-5'>

<FontAwesomeIcon icon={faMagnifyingGlass}  className='text-[2.1vw] hover:text-[#E52F06] cursor-pointer' onClick={()=>setSearch(!search)}/>

<Link to={'/Cart'}><FontAwesomeIcon icon={faCartShopping} className='text-[2.1vw] hover:text-[#E52F06] cursor-pointer' /></Link>
<FontAwesomeIcon icon={faRightFromBracket} className='text-[2.1vw] hover:text-[#E52F06] cursor-pointer'

onClick={_logout}
/>
</div>

    </div>
    
    
    </>
  )
}

export default Navbar
