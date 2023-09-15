import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import Navbar from '../components/Navbar';
import {productContent} from '../content/ProductContent'
import { useProduct } from '../context/store';

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
    <div  className='h-[100vh] w-[100%] mt-[70px]'>
      
     
     <div className='w-[100%] h-[10vh]  flex justify-center items-center'>
        <h1 className='text-3xl drop-shadow-lg font-light text-[#E52F06] '>All Products</h1>
        </div>
        {/* Products Section  */}
    
<div className='w-[100%] h-[1300px] p-6 bg-[#EEEEEE] flex justify-center gap-[80px] flex-wrap '>

{searchItems.map((item)=>(

<Product productImg={item.productImage} productName={item.productName} productPrice={item.productPrice}/>

))}


</div>
    </div>
    </>
  )
}
