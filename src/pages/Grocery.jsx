import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import Navbar from '../components/Navbar';
import {productContent} from '../content/ProductContent'
import { useProduct } from '../context/store';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Grocery_Img from '../images/grocery-hero.png'


export default function Grocery() {

    const [searchItems,setSearchItems] = useState([productContent]);

    const store = useProduct(); 

// Shuffle Array in Random Order with Knuth Algorithm 
/*
1. reverse itrate
2. random number genrate 
3. shuffle current index with random number
*/


function ShuffleArr (array){


for(let i=array.length - 1 ; i > 0; i--){

    let random = Math.floor(  ( Math.random() * (i + 1) )  );

   let current_i =  array[i];
   array[i]=  array[random];
   array[random] = current_i


return array;

}
}

let GroceryContent = ShuffleArr(productContent)

console.log(productContent)

useEffect(()=>{
 const filterdItems  = GroceryContent.filter((item)=>{

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
  <Hero saleText={"SALE UPTO 56% OFF"} title={"Grocery and other..."} img={Grocery_Img} h={"200٪"} w={"60%"}/>

    <div  className='h-auto w-[100%] mt-[2px] '>
      
     
     <div className='w-[100%] h-[10vh]  flex justify-center items-center'>
        <h1 className='text-3xl drop-shadow-lg font-light text-[#E52F06] '>Grocery</h1>
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
