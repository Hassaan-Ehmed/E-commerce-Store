import React from 'react'

export default function FooterChilds(props) {
  return (
    <>
    <div className="child1  h-[100%] w-[20%] flex  items-center ">



<ul className='h-[80%] w-[100%] flex flex-col justify-center gap-3   items-start'>
    
    <li className=' w-[100%] h-[15%]  text-[21.5px] text-[#333333] font-bold'>{props.title}</li>

    <li><ul className=' w-[100%] flex flex-col justify-center gap-3   items-start'>
    

<li className='text-lg text-[#616161] font-medium'>{props.first}</li>
<li className='text-lg text-[#616161] font-medium'>{props.second}</li>
<li className='text-lg text-[#616161] font-medium'>{props.third}</li>
<li className='text-lg text-[#616161] font-medium'>{props.fourth}</li>
<li className='text-lg text-[#616161] font-medium'>{props.fifth}</li>

  
</ul></li>

</ul>


</div>
    </>
  )
}
