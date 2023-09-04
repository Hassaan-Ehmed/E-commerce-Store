import React from 'react'
import led_image from '../images/led.jpg';
export default function Product() {
  return (
    <>
    
    

{/* Box */}
<div className='h-[350px] w-[240px] bg-white shadow-md flex flex-col justify-center items-center '>


<div className=' w-[100%] bg-slate-200'>
    <img src={led_image} alt="" />
</div>


<div className='h-[25%] w-[100%] flex flex-col justify-center items-center  text-center'>
<h2 className='text-xl text-gray-700'>Ecostar 32 Inch Led TV</h2>
<p className='text-[18px] font-bold text-[#E52F06]'>$750.00</p>
</div>


{/* For Buttons */}
<div className=' h-[50px] w-[100%] mt-[30px] flex justify-around'>
<button className='bg-[#333333] px-[16px] rounded-3xl text-white shadow-[0px_9px_8px_-6px_#333333] active:shadow-none active:delay-75'>Add To Cart</button>
<button className='bg-[#E52F06] px-[16px] rounded-3xl text-white shadow-[0px_9px_8px_-6px_#E52F06] active:shadow-none active:delay-75'>Buy Now</button>
</div>

</div>


  

    
    </>
  )
}
