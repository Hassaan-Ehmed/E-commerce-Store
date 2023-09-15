import React from 'react'
import Product from '../components/Product'
import Navbar from '../components/Navbar';
import {productContent} from '../content/ProductContent'

export default function Products() {


  return (
    <>
  <Navbar/> 
    <div  className='h-[100vh] w-[100%] mt-[70px]'>
      
     
     <div className='w-[100%] h-[10vh]  flex justify-center items-center'>
        <h1 className='text-3xl drop-shadow-lg font-light text-[#E52F06] '>All Products</h1>
        </div>
        {/* Products Section  */}
    
<div className='w-[100%] h-[1300px] p-6 bg-[#EEEEEE] flex justify-center gap-[80px] flex-wrap '>

{productContent.map((item)=>(


<Product productImg={item.productImage} productName={item.productName} productPrice={item.productPrice}/>

))}


</div>
    </div>
    </>
  )
}
