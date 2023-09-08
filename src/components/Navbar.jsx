import React from 'react'
import {Link} from 'react-router-dom';
import logo from  '../images/Wattpad-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass ,faHeart,faCartShopping} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
    
    
    
<div className='h-[5.3vw] w-[100%]  shadow-gray-400 shadow-md flex  justify-between'>



{/* For Title & Logo */}
<div className='w-[20%] h-[100%] flex justify-center items-center'>

<img src={logo} alt="" className='h-[4vw]'/>

<h1 className='font-medium text-[2vw]' >Super Store</h1>

</div>



{/* For Nav Links */}
<div className='w-[40%] h-[100%] flex justify-center items-center  '>
<ul className='flex justify-between items-center w-[100%]'>

<li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>
  
  <Link to={'/'}>Home</Link>
  
  </li>
<li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>About</li>
<li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>Grocery</li>
<li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>Cloths</li>
<li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>Electronics</li>
<li className='cursor-pointer font-medium text-[1.4vw] hover:text-[#E52F06]'>Contact Us</li>

</ul>

</div>



{/* For Last Icons */}
<div className='w-[20%] h-[100%] flex  justify-center items-center gap-5'>

<FontAwesomeIcon icon={faMagnifyingGlass}  className='text-[2.1vw] hover:text-[#E52F06] cursor-pointer'/>
<FontAwesomeIcon icon={faHeart} className='text-[2.1vw] hover:text-[#E52F06] cursor-pointer' />
<Link to={'/Cart'}><FontAwesomeIcon icon={faCartShopping} className='text-[2.1vw] hover:text-[#E52F06] cursor-pointer' /></Link>
</div>

    </div>
    
    
    </>
  )
}

export default Navbar
