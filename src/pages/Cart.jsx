import React from 'react';
import { useProduct } from '../context/store';
import CartItem from '../components/CartItem';


export default function Cart() {

  const store = useProduct()
  return (
    <>
    
    {/* For Main */}
    <div className='h-[100vh] w-[100%] bg-slate-400 flex flex-col justify-center items-center'>


<div className='w-[100%] h-[7vw]  flex flex-col justify-between items-center'>

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


<div className='h-[89%] w-[97%]  flex justify-center'>


{/* Wraapper on Cart products  */}
<div className='w-[90%] h-[100%] bg-[#EEEEEE] flex flex-col items-center pt-10  overflow-x-hidden overflow-y-auto'>

{store.productItems.map((item,index)=>(

<CartItem indexNo={index} image={item.productImg} name={item.productName} price={item.productPrice}/>

))}
</div>


</div>





    </div>
    
    
    </>
  )
}
