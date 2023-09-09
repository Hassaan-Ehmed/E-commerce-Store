import React from 'react'

export default function Login() {
  return (
   <>

<div className="wrapper w-[100%] h-[100vh] bg-[white] flex justify-center items-center">

<div className='signup-box h-[90vh] w-[60%] bg-[#EEEEEE] flex flex-col justify-between shadow-lg shadow-[#333333]' >

<div className='form-title flex justify-center items-center h-[10%] w-[100%]'>
<h1 className='text-4xl font-sans'>Login</h1>
</div>



<div className="form-control bg-[#EEEEEE]  h-[90%] w-[100%] flex justify-center items-center">

<form>
<table className='flex flex-col justify-between w-[100%]'>

<tr className='mt-5 flex  justify-center gap-[58px]'><label className='text-xl'>Email</label><input type="text" name="email" id="email" className=' py-[5px] w-[20vw] text-xl ' /></tr>
<tr className='mt-5 flex  justify-center gap-[24px]'><label className='text-xl'>Password</label><input type="password" name="password" id="password" className=' py-[5px] w-[20vw] text-xl ' /></tr>
<tr className='mt-5  flex  justify-center gap-[38px] '><label className='w-[50px]'></label><button className='bg-[#E52F06] py-[10px] px-[20px] rounded-3xl text-white text-md shadow-[0px_9px_8px_-6px_#333333] active:shadow-none active:delay-75'>Log In</button></tr>


</table>

</form>


</div>



</div>
</div>
   </>
  )
}
