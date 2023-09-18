import React from 'react';
import { useProduct } from '../context/store';
import CartItem from '../components/CartItem';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';



export default function Cart() {

  const store = useProduct()




if(store.productItems=="") {
  
store.setTotal(0);
}

  return (
    <>
    
    {/* For Main */}
    <Navbar/>
    <div className='h-[100vh] w-[100%] bg-[#ffffff] flex flex-col justify-center items-center mt-10'>


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


<div className='h-[89%] w-[97%]  flex  justify-center '>


{/* Wraapper on Cart products  */}
<div className='w-[90%] h-[100%] bg-[#EEEEEE] flex flex-col items-center pt-10  overflow-x-hidden overflow-y-auto border-b-[#333333] '>

{store.productItems==""?"":(

<div className='totalBox h-8 w-[86%] bg-[white] text-center' >

{/* Logic Written in CartItem Page */}
  <h1 className='text-xl font-semibold'>Total Amount: ${store.total}.0</h1>
</div>
)}

{store.productItems == "" ? (
<div className='h-[70vh] w-[90%]  flex flex-col justify-center items-between gap-3'>

<div className="title w-[100%] h-[30%]  flex justify-center items-center" ><h1 className='text-[45px] text-[#333333]'>Your Cart is Empty</h1></div>


<div className="Icon  w-[100%] h-[30%] flex justify-center items-center"><h1><FontAwesomeIcon icon={faCartShopping} className='text-[8.1vw] text-[#E52F06]  ' /></h1></div>


</div>
) :   store.productItems.map((item,index)=>(

<CartItem indexNo={index} image={item.productImg} name={item.productName} price={item.productPrice} quantity={item.quantity}/>

))}





</div>


</div>





    </div>
    <Footer/>
    
    </>
  )
}
