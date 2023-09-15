import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import logo from  '../images/Wattpad-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass ,faRightFromBracket,faCartShopping} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {




  let search = false;

  const _searchingOn=()=>{

search = true

  }



const _navigate = useNavigate()

const _logout=()=>{

localStorage.removeItem("userName");

_navigate("/Login");

}


  return (
    <>
    

    
<div className='h-[5.3vw] w-[100%] bg-white  shadow-gray-400 shadow-md flex  justify-between fixed top-0 '>



{/* For Title & Logo */}
<div className='w-[20%] h-[100%] flex justify-center items-center'>

<img src={logo} alt="" className='h-[4vw]'/>

<h1 className='font-medium text-[2vw]' >Super Store</h1>

</div>



{/* For Nav Links */}
<div className='w-[40%] h-[100%] flex justify-center items-center  '>

{search ? (

// <input type="text" name="text" id="text" />

<h1>dsd</h1>
):("d")}
</div>



{/* For Last Icons */}
<div className='w-[20%] h-[100%] flex  justify-center items-center gap-5'>

<FontAwesomeIcon icon={faMagnifyingGlass}  className='text-[2.1vw] hover:text-[#E52F06] cursor-pointer' onClick={_searchingOn}/>
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
