import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
export default function Hero() {
  return (
   <>
   
   <div className='h-[30vw] w-[100%] bg-rose-500 mt-[73px] '>

<div className=" h-[100%] w-[45%] bg-[#F9F9F9] flex flex-col justify-around  pl-8">

<div className='child1 w-[80%] h-[30%] flex flex-col justify-center items-start'>
<p className='text-2xl'>SALE UPTO 30% OFF</p>
<h1 className='text-5xl'>Grocery & Electronics</h1>
</div>



<div className="child2 h-[13vw] w-[90%]  flex flex-col justify-around items-start">
<h2 className='text-xl'>We believe in quality, safety, and satisfaction, making us your go-to superstore.</h2>
<button className='btn bg-[#E52E06] py-[17px] px-[24px] rounded-full text-xl text-white'>See Products <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
</div>

<div>



</div>

</div>

   </div>
   
   
   
   </>
  )
}
