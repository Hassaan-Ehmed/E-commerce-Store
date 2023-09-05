import React from 'react'
import headphone_image from '../images/headphones.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  return (
    <>
    
    {/* For Main */}
    <div className='h-[100vh] w-[100%] bg-green-400 flex flex-col justify-center items-center'>


<div className='w-[100%] h-[7vw] bg-slate-600 flex flex-col justify-between items-center'>

    <h1 className='text-3xl font-semibold'>Your Cart Items</h1>
    <hr />

{/* For Product Title */}
<div className='w-[77%] h-[3vw] bg-[#E52F06] text-white flex justify-center items-center p-4'>

<ul className='w-[100%] flex justify-center gap-[105px] items-center font-medium text-lg'>
<li>Product</li>
<li>Product Name</li>
<li> Price</li>
<li>Quantity</li>
<li>Remove</li>
<li>Total</li>

</ul>

</div>

</div>


<div className='h-[89%] w-[97%] bg-orange-200 flex justify-center'>


{/* Wraapper on Cart products  */}
<div className='w-[90%] h-[100%] bg-[#EEEEEE] flex flex-col items-center pt-10'>

<div className='w-[90%] h-[11vw]  flex  bg-white  shadow-lg justify-start items-center '>

<div className='w-[19%] h-[100%]   flex justify-center items-center'>
    <img src={headphone_image} alt="" className='w-[75%] h-[80%]'/>
</div>


<div className='w-[19%] h-[100%]   flex justify-center items-center'>

<h1 className='text-lg font-semibold'>Audionic Headset</h1>
</div>

<div className='w-[15%] h-[100%]   flex justify-center items-center'>

<h1 className='text-lg font-semibold'>$75.00</h1>
</div>

<div className='w-[15%] h-[100%]   flex justify-center gap-[20px] items-center'>

<button className='bg-slate-200 text-center px-[15px] font-extrabold text-lg rounded-3xl  shadow-[0px_9px_8px_-6px_black] active:shadow-none active:delay-75'>–</button>

<h1 className='text-lg font-semibold'>1</h1>

<button className='bg-slate-200  px-[15px] font-extrabold text-lg rounded-3xl  shadow-[0px_9px_8px_-6px_black] active:shadow-none active:delay-75' >+</button>
</div>





<div className='w-[18%] h-[100%]   flex justify-center items-center'>

<span><FontAwesomeIcon icon={faTrash} className='text-[22px] cursor-pointer text-red-600' /></span>
</div>


<div className='w-[14%] h-[100%]   flex justify-center items-center'>


<h1 className='text-lg font-semibold'>Item Total: 1</h1>
</div>



</div>

</div>


</div>





    </div>
    
    
    </>
  )
}
