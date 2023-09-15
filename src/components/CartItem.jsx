import React, { useReducer, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { useProduct } from '../context/store';
export default function CartItem(props) {


const store = useProduct();

const [numberOfItems,setNumberOfItems] = useState(0);


let total  = store.productItems.reduce((prev,next)=>prev+next.productPrice,0);

store.setTotal(total);


const _add=()=>{
    
    setNumberOfItems( numberOfItems + 1 );

    let inc = store.total + props.price
    store.setTotal(inc);

}



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

<h1 className='text-lg font-semibold'>{numberOfItems}</h1>

<button className='bg-slate-200  px-[15px] font-extrabold text-lg rounded-3xl  shadow-[0px_9px_8px_-6px_black] active:shadow-none active:delay-75'

onClick={_add}

>+</button>
</div>


<div className='w-[18%] h-[100%] flex justify-center items-center'>

<span><FontAwesomeIcon icon={faTrash} className='text-[22px] cursor-pointer text-red-600' 

onClick={()=>{


let result  = store.productItems.filter((element)=>{

    if(props.name==element.productName){

        return false;
    }
    else{
        return true;
    }

})



store.setProductItems([...result]);


}}

/></span>
</div>


<div className='w-[14%] h-[100%]   flex justify-center items-center'>


<h1 className='text-lg font-semibold'>Item Total: {numberOfItems}</h1>
</div>



</div>
    
    
    
    </>
  )
}
