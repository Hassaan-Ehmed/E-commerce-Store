import React from 'react'
import Product from '../components/Product'
import led_image from '../images/led.jpg';
import shirt_image from '../images/shirt.jpg';
import headphone_image from '../images/headphones.jpg';
import perfume_image from '../images/perfume2.jpg';

export default function Products() {
  return (
    <>
    <div  className='h-[100vh] w-[100%] '>
     
     
     <div className='w-[100%] h-[10vh]  flex justify-center items-center'>
        <h1 className='text-3xl drop-shadow-lg font-light text-[#E52F06] '>All Products</h1>
        </div>
        {/* Products Section  */}
        {/* EEE EEE */}
<div className='w-[100%] h-[90vw] p-6 bg-[#282c34] flex justify-center gap-[80px] flex-wrap '>

<Product productImg={led_image} productName={"Ecostar 32 Inch Led TV"} productPrice={750} />
<Product productImg={shirt_image} productName={"Addidas Black T-Shirt-"} productPrice={199} />
<Product productImg={headphone_image} productName={"Audionic Wireless Headset"} productPrice={480} />
<Product productImg={perfume_image} productName={"Chennal Mint Perfume"} productPrice={379} />



</div>
    </div>
    </>
  )
}
