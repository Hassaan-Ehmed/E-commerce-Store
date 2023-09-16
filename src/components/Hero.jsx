import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Hero_Img from '../images/hero2.png'

export default function Hero() {
    
  return (
   <>
   
   <div className='h-[30vw] w-[100%]  mt-[73px] flex justify-center items-center '>

<div className=" h-[100%] w-[45%] bg-[#F9F9F9] flex flex-col justify-around  gap-5 pl-8 pt-12">

<div className='child1 w-[80%] h-[30%] flex flex-col justify-around items-start'>
<p className='text-2xl'>SALE UPTO 50% OFF</p>
<h1 className='text-5xl'>Grocery & Electronics</h1>
</div>


<div className="child2 h-[13vw] w-[90%] flex flex-col justify-around items-start">
<h2 className='text-xl'>We believe in quality, safety, and satisfaction, making us your go-to superstore.</h2>
<button className='btn bg-[#E52E06] py-[17px] px-[24px] rounded-full text-xl text-white'>See Products <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
</div>

<div>



</div>

</div>



<div className='image w-[55%] h-[100%] bg-[#F9F9F9]  flex justify-end items-center' >

<img src={Hero_Img} alt="" className='h-[150%] w-[85%]'/>


</div>



   </div>
   
   
   
   </>
  )
}
