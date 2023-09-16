import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import Navbar from '../components/Navbar';
import {productContent} from '../content/ProductContent'
import { useProduct } from '../context/store';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Products() {

const [searchItems,setSearchItems] = useState([productContent]);

const store = useProduct(); 



useEffect(()=>{
 const filterdItems  = productContent.filter((item)=>{

if(store.searchText==""){

  return true

}else{

  return item.productName.toLowerCase().includes(store.searchText.toLowerCase());
}


})  

setSearchItems(filterdItems);


},[store.searchText])

  return (
    <>
  <Navbar/> 
  <Hero/>
    <div  className='h-auto w-[100%] mt-[2px] '>
      
     
     <div className='w-[100%] h-[10vh]  flex justify-center items-center'>
        <h1 className='text-3xl drop-shadow-lg font-light text-[#E52F06] '>All Products</h1>
        </div>
        {/* Products Section  */}
    
<div className='w-[100%] h-[100vw] p-6 bg-[#EEEEEE] flex justify-center gap-[80px] flex-wrap '>

{searchItems.map((item)=>(

<Product quantity={1} productImg={item.productImage} productName={item.productName} productPrice={item.productPrice}/>

))}


</div>
    </div>
<Footer/>

    </>
  )
}
