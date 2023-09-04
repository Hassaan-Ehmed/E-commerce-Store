import React from 'react'
import Product from '../components/Product'

export default function Products() {
  return (
    <>
    <div  className='h-[100vh] w-[100%] '>
     
     
     <div className='w-[100%] h-[10vh]  flex justify-center items-center'>
        <h1 className='text-3xl drop-shadow-lg font-light text-[#E52F06] '>All Products</h1>
        </div>
        {/* Products Section  */}
<div className='w-[100%] h-[90vw] p-6 bg-[#EEEEEE] flex justify-between gap-[30px] flex-wrap'>

<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>

</div>
    </div>
    </>
  )
}
