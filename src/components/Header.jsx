import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import menu from '/MyLandingPageProjects/CarRental/src/assets/icons/menu.png'
import close from '/MyLandingPageProjects/CarRental/src/assets/icons/close.png'
import moon from '/MyLandingPageProjects/CarRental/src/assets/icons/crescent-moon.png'
import sun from '/MyLandingPageProjects/CarRental/src/assets/icons/sun.png'
import pizzaLogo from '/MyLandingPageProjects/PizzaProject/src/assets/Logo/pizzaLogo.png'

function Header() {
    useEffect(()=>{
        let menuBtn = document.getElementById('menu-btn');
        let closeBtn = document.getElementById('close-btn');
        let mobileMenu = document.getElementById('mobile-menu');
        let sun = document.getElementById('sun');
        let moon = document.getElementById('moon');
        let html = document.querySelector('html')
        menuBtn.onclick = function(){
          mobileMenu.classList.toggle('hidden');
          menuBtn.classList.add('hide');
          closeBtn.classList.remove('hide');

         }
         closeBtn.onclick = function(){
          mobileMenu.classList.toggle('hidden');
          closeBtn.classList.add('hide');
          menuBtn.classList.remove('hide');
         }
         sun.onclick=function(){
          html.classList.toggle('dark');
          sun.classList.add('hide');
          moon.classList.remove('hide');
         }
         moon.onclick=function(){
          html.classList.toggle('dark');
          moon.classList.add('hide');
          sun.classList.remove('hide');
         }
        
        

            },[])

            const [active,setActive] = useState(false);
            const [visible,setvisivle] = useState(false);

  return (
<>

<nav  className='bg-slate-200 z-50 rounded-2xl shadow-yellow-500 fixed w-full ' dir='rtl'>
<div className="flex justify-between items-center  w-[90%] mx-auto">
<motion.div id="logo" initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{duration:1}}  className='flex gap-2 items-center'>
<img  src={pizzaLogo} width={70} alt='Logo Car' />
<div className='flex items-center gap-3'>
<h2 className='text-red-500 font-extrabold text-2xl'>بيتزا</h2>
<h2 className='text-[#2f2c2c] font-extrabold text-2xl'>السعادة</h2>
</div>


    </motion.div>
   <div className='flex items-center lg:mx-10'>
   <motion.img onClick={()=> setvisivle(!visible)} id='sun' initial={{opacity:1,rotate:0,y:-10}} animate={{opacity:visible?0:1,rotate:visible?0:'360deg',y:0}} transition={{duration:1}} src={sun} width={30} /> 
   <motion.img onClick={()=> setvisivle(!visible)}  id='moon' className='hide' initial={{opacity:0,rotate:0}} animate={{opacity:visible?1:0,rotate:visible?0:'360deg'}} transition={{duration:1}} src={moon} width={30} /> 
  

   </div>
    <motion.ul initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:1}} className=' gap-11 font-bold text-lg hidden lg:flex'>
        <a className='hover:bg-red-400 hover:text-white hover:rounded-2xl p-2 duration-500' href='#Home' >الصفحة الرئيسية</a>
        <a className='hover:bg-red-400 hover:text-white hover:rounded-2xl p-2 duration-500' href='#AboutUs' >من نحن</a>
        <a className='hover:bg-red-400 hover:text-white hover:rounded-2xl p-2 duration-500' href='#ListPizza'>قائمة البيتزا</a>
        <a className='hover:bg-red-400 hover:text-white hover:rounded-2xl p-2 duration-500' href='#Contact'>اتصل بنا</a>



    </motion.ul>

   <div id="icons-mobile" className='lg:hidden'>
  <motion.img onClick={()=> setActive(!active)} initial={{x:-20,opacity:0}} transition={{duration:0.5}} animate={{opacity:active? 0 : 1 ,x:active? -20 :0}} id='menu-btn' src={menu} width={30} alt="menu" />
  <motion.img onClick={()=> setActive(!active)} transition={{duration:0.5}} animate={{opacity:active? 1 : 0 ,scale:active? 1 :0.5}} className='hide' id='close-btn' src={close} width={30} alt='close'/>

  </div>

  </div>
<div className="lg:hidden z-50">
<motion.ul  initial={{opacity:0,height:0}} animate={{opacity:active?1:0,height:active?'auto':0,padding:active?2:0}} transition={{duration:0.5}} id='mobile-menu'  className='bg-slate-200 rounded-2xl right-6 left-6 items-center flex flex-col gap-4 font-bold text-lg hidden p-2'>
        <motion.a transition={{duration:0.5,delay:0.2}} initial={{x:40,opacity:0}} animate={{x:active?0:40,opacity:active?1:0}} className='hover:bg-red-400 hover:text-white hover:rounded-2xl p-2 duration-500' href='#Home' >الصفحة الرئيسية</motion.a>
        <motion.a transition={{duration:0.5,delay:0.3}} initial={{x:40,opacity:0}} animate={{x:active?0:40,opacity:active?1:0}} className='hover:bg-red-400 hover:text-white hover:rounded-2xl p-2 duration-500' href='#AboutUs' >من نحن</motion.a>
        <motion.a transition={{duration:0.5,delay:0.4}} initial={{x:40,opacity:0}} animate={{x:active?0:40,opacity:active?1:0}} className='hover:bg-red-400 hover:text-white hover:rounded-2xl p-2 duration-500' href='#ListPizza' >قائمة البيتزا</motion.a>
        <motion.a transition={{duration:0.5,delay:0.5}} initial={{x:40,opacity:0}} animate={{x:active?0:40,opacity:active?1:0}} className='hover:bg-red-400 hover:text-white hover:rounded-2xl p-2 duration-500' href='#Contact'>اتصل بنا</motion.a>



    </motion.ul>

</div>
</nav>

</>
  )
}

export default Header
