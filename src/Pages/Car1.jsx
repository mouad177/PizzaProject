import React, { useEffect } from 'react'
import MercedesBenz from '/MyLandingPageProjects/CarRental/src/assets/img/Mercedes-Benz.png'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import arrow from '/MyLandingPageProjects/CarRental/src/assets/icons/arrow.png'

function Car1() {
  useEffect(()=>{
let number = document.getElementById('number')
let priceMsg = document.getElementById('priceMsg');
let submit = document.getElementById('submit');
submit.onclick = function CalclPrice(){
if(number.value!=''){
  let price = (+number.value*20)

  priceMsg.innerHTML= `${price} $: مبلغ الايجار`

}
else{
  priceMsg.innerHTML=''
}

}


  },[])
  return (
    <>


    <div className='flex flex-col md:flex-row items-center justify-around'>
      <div id="box-image" className='flex flex-col items-center gap-4'>
        <img className='mt-10' src={MercedesBenz}  width={500}/>
        <span className='text-black dark:text-white font-extrabold text-4xl'>Mercedes-Benz</span>
        <button className='bg-orange-400 p-2 hover:bg-orange-600 rounded-2xl text-white font-bold text-2xl'>تقديم الطلب</button>
      </div>
      <div id="box-input" className='flex flex-col items-center gap-7'>
        <p className='text-black dark:text-white text-2xl font-bold mt-11'>20$ لليوم الواحد</p>
<div id="input" className='flex flex-row-reverse items-center gap-3'>
<label className='dark:text-white text-black font-bold text-xl' htmlFor="number">ادخل عدد أيام تأجير السيارة
        </label>
        <input type="number" id="number" />
        <input  id='submit'  type="submit" value="تأكيد"  className='text-white rounded-2xl p-2 hover:bg-green-600 bg-green-400 font-bold'/>

</div>


<span id='priceMsg' className='text-4xl bg-gray-700 rounded-xl p-2 font-bold text-yellow-400'> : مبلغ الايجار</span>
<Link to='/Home' className='bg-green-400 p-2 mt-28 hover:bg-green-600 text-white flex flex-row-reverse gap-3 rounded-2xl'>
<button className='text-xl'>رجوع</button>
<img src={arrow} width={20} />
</Link>

      </div>

    </div>
    </>
  )
}

export default Car1
