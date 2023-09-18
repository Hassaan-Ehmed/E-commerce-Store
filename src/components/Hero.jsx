import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


export default function Hero({saleText,title,img,h,w}) {
    
  return (
   <>
   
   <div className='h-[30vw] w-[100%]  mt-[73px] flex justify-center items-center '>

<div className=" h-[100%] w-[45%] bg-[#F9F9F9] flex flex-col justify-around  gap-5 pl-8 pt-12">

<div className='child1 w-[83%] h-[30%] flex flex-col justify-around items-start'>
<p className='text-2xl text-[#E52E06]'>{saleText}</p>
<h1 className='text-5xl text-[#333333] font-medium'>{title}</h1>
</div>


<div className="child2 h-[13vw] w-[90%] flex flex-col justify-around items-start">
<h2 className='text-xl  text-[#333333]'>We believe in quality, safety, and satisfaction, making us your go-to superstore.</h2>
<button className='btn bg-[#E52E06] py-[17px] px-[24px] rounded-full shadow-[0px_9px_8px_-6px_#E52F06] transition-all active:translate-y-[2px]  text-xl text-white hover:bg-[#333333] hover:shadow-[0px_9px_8px_-6px_#333333] active:shadow-none active:delay-75'>See Products <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
</div>

<div>



</div>

</div>



<div className='image w-[55%] h-[100%] bg-[#F9F9F9]  flex justify-end items-center' >

<img src={img} alt="" className={`h-[${h}] w-[${w}]`}/>


</div>



   </div>
   
   
   
   </>
  )
}
