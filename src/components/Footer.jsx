import React from 'react'
import FooterChilds from './Footer-Childs'
import playstore_img  from '../images/playstore.png'
import appstore_img  from '../images/appstore.png'
import payment_method  from '../images/payment-method2.png'

export default function Footer() {
  return (
    <>
    
    
    <div className='Main-Footer h-[30vw] shadow-lg shadow-black  flex flex-col justify-between pt-3 mt-8 relative'>


<div className="main h-[70%] w-[100%] bg-[white]   flex justify-center gap-4 ">

<FooterChilds
title={"Contact Us"}
first={"Super Store"}
second={"Shop 1259 Ocean Mall, Karachi"}
fourth={"store@bussiness.com"}
fifth={"+92 3189345110"}
/>
<FooterChilds
title={"Information"}

second={"Product Support"}
third={"Checkout"}
fourth={"License Policy"}
fifth={"Affiliate"}
/>
<FooterChilds
title={"Customer Service"}
second={"Help Center"}
third={"Redeem Voucher"}
fourth={"Contact Us"}
fifth={"Policies & Rules"}
/>






<div className="child-step  h-[100%] w-[32%] flex   items-center ">



<ul className='h-[80%] w-[100%] flex flex-col justify-center gap-[35px]   items-start'>
    
    <li className=' w-[100%] h-[15%]  text-[21.5px]  text-[#333333] font-bold'>Download Our App</li>

    <li><ul className=' w-[100%] flex flex-col justify-center gap-3   items-start'>
    
<li className='text-[19px] text-[#616161] font-medium'>Download our App and get extra 15% Discount on your first Order..!</li>
<li className='text-xl w-[100%]'>


<div className='w-[100%] flex justify-between mt-4'>

<img src={playstore_img} alt="" className='h-[52px] w-[41%]'/>
<img src={appstore_img} alt="" className='h-[52px] w-[41%]'/>

</div>

</li>


  
</ul></li>

</ul>

</div>

</div>


<div className="copy-right-section h-[20%] w-[100%] bg-[#EEEEEE] flex  justify-around gap-[50px] items-center">

<div className="text w-[40%] h-[100%] flex justify-start items-center">

<h1 className='text-lg text-[#444444]'>Copyright © Team Rio | Built with Store by Humans.</h1>
</div>


<div className="image h-[100%] w-[40%]  flex justify-end items-center">

<img src={payment_method} alt="" className='h-[68%] w-[53%] '/>


</div>



</div>

    </div>
    
    
    
    
    </>
  )
}
