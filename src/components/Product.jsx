import React, { useEffect, useState } from 'react'

export default function Product({productImg,productName,productPrice}) {

const [productItems,setProductItems] = useState([]);


console.log(productItems);


    return (
    <>
    
    

{/* Box */}
<div className='h-[350px] w-[240px] bg-white shadow-md flex flex-col justify-center items-center '>


<div className=' w-[100%]  flex justify-center'>
    <img src={productImg} alt="" className='h-[150px] w-[80%]'/>
</div>


<div className='h-[25%] w-[100%] flex flex-col justify-center items-center  text-center'>
<h2 className='text-xl text-gray-700'>{productName}</h2>
<p className='text-[18px] font-bold text-[#E52F06]'>${productPrice}.00</p>
</div>


{/* For Buttons */}
<div className=' h-[50px] w-[100%] mt-[30px] flex justify-around'>
<button className='bg-[#333333] px-[16px] rounded-3xl text-white shadow-[0px_9px_8px_-6px_#333333] active:shadow-none active:delay-75'

onClick={()=>{

    setProductItems([...productItems,{productImg,productName,productPrice}]);

}}

>Add To Cart</button>
<button className='bg-[#E52F06] px-[16px] rounded-3xl text-white shadow-[0px_9px_8px_-6px_#E52F06] active:shadow-none active:delay-75'>Buy Now</button>
</div>

</div>


    </>
  )
}
