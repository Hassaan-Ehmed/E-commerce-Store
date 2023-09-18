import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import Navbar from '../components/Navbar';
import {productContent} from '../content/ProductContent'
import { useProduct } from '../context/store';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Hero_Img from '../images/hero2.png'

export default function Products() {

const [searchItems,setSearchItems] = useState([productContent]);

const store = useProduct(); 




useEffect(()=>{
 const filterdItems  = productContent.filter((item)=>{

  // if open searbar and press Enter without filling text so this return full array  
if(store.searchText==""){

  return true

}else{

  // Go Each index and extract name then convert name to lowerCase and check 
  // if user's Text (Search bar Text) 's letters includes in  any index of an array so it will
  // return true when it return true so the current item goes to filteredItems array otherwise
  // in false condition the item will rejected ! 
  return item.productName.toLowerCase().includes(store.searchText.toLowerCase());
}


})  

// set filtered Items
setSearchItems(filterdItems);


},[store.searchText])

// This UseEffect run when user changes search bar text means: (when user typing in searbar and press Enter) 

  return (
    <>

  <Navbar/> 
  <Hero saleText="SALE UPTO 50% OFF" title="Grocery & Electronics" img={Hero_Img} h={"150%"} w={"85%"}/>

    <div  className='h-auto w-[100%] mt-[2px] '>
      
     
     <div className='w-[100%] h-[10vh]  flex justify-center items-center'>
        <h1 className='text-3xl drop-shadow-lg font-light text-[#E52F06] '>All Products</h1>
        </div>
        {/* Products Section  */}
    
<div className='w-[100%] h-[100vw] p-6 bg-[#EEEEEE] flex justify-center gap-[80px] flex-wrap '>


{/* Map Products on Search Items initially this is full array then after searching it will be filtered*/}
{searchItems.map((item)=>(

<Product quantity={1} productImg={item.productImage} productName={item.productName} productPrice={item.productPrice}/>

))}


</div>
    </div>
<Footer/>

    </>
  )
}
