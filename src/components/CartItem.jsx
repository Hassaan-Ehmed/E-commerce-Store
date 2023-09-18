import React, { useReducer, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { useProduct } from '../context/store';
export default function CartItem(props) {


const store = useProduct();

// in Reduce we have callback a,b is current Element we initialiaze a for 0 
// and b still is a current element we extract price with b(current element) and plus with a(0) and assign it to A  it's Look like ( [sum += i] Link * ) and total price of cart items is assign
// to total variable and after this we set to total variable  in store and use it in cart page 


let total  = store.productItems.reduce((a,b)=> a + b.productPrice  ,0);

store.setTotal(total);

return (

    <>
    
    
<div className='w-[90%] h-[130px]  flex  bg-white  shadow-lg justify-start items-center mt-5 ' key={props.indexNo}>

<div className='w-[19%] h-[100%]   flex justify-center items-center'>
    <img src={props.image} alt="" className='w-[75%] h-[80%]'/>
</div>


<div className='w-[19%] h-[100%]   flex justify-center items-center'>

<h1 className='text-lg font-semibold'>{props.name}</h1>
</div>

<div className='w-[15%] h-[100%]   flex justify-center items-center'>

<h1 className='text-lg font-semibold'>${props.price}.00</h1>
</div>

<div className='w-[15%] h-[100%]   flex justify-center gap-[20px] items-center'>

<button className='bg-slate-200 text-center px-[15px] font-extrabold text-lg rounded-3xl  shadow-[0px_9px_8px_-6px_black] active:shadow-none active:delay-75' 
>–</button>

<h1 className='text-lg font-semibold'>{store.quantity}</h1>

<button className='bg-slate-200  px-[15px] font-extrabold text-lg rounded-3xl  shadow-[0px_9px_8px_-6px_black] active:shadow-none active:delay-75'

>+</button>
</div>


<div className='w-[18%] h-[100%] flex justify-center items-center'>

<span><FontAwesomeIcon icon={faTrash} className='text-[22px] cursor-pointer text-red-600' 

onClick={()=>{

// This Logic for Deleting Specific Item from our cart Item

// If Delete icon clicked so they itrate array of cart items and check if ..
// current Item (you want to Delete) name's match with our every cart item it will remove and other element still assign to new array (result)     


let result  = store.productItems.filter((element)=>{

    if(props.name==element.productName){

        return false;
    }
    else{
        return true;
    }

})

// Now After Removing of current item new array will generate and it will paste in product items 

store.setProductItems([...result]);


}}

/></span>
</div>


<div className='w-[14%] h-[100%]   flex justify-center items-center'>


<h1 className='text-lg font-semibold'>Item Total: {store.quantity}</h1>
</div>



</div>
    
    
    
    </>
  )
}
