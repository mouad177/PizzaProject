import React from 'react'
import { motion } from "framer-motion"
import Lottie from "lottie-react";
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import pizza from '/MyLandingPageProjects/PizzaProject/src/assets/img/pizza.png'
import pizzaAbout from '/MyLandingPageProjects/PizzaProject/src/assets/img/pizzaAbout.png'
import PizzaMargherita from '/MyLandingPageProjects/PizzaProject/src/assets/img/PizzaMargherita.png'
import ChickenPizza from '/MyLandingPageProjects/PizzaProject/src/assets/img/ChickenPizza.png'
import CheesePizza from '/MyLandingPageProjects/PizzaProject/src/assets/img/CheesePizza.png'
import CornPizza from '/MyLandingPageProjects/PizzaProject/src/assets/img/CornPizza.png'
import pizzaAnimation from '/MyLandingPageProjects/PizzaProject/src/assets/pizza.json'
function Home() {
  return (
    <>
        <Header/>
   <section id="Home" >
    <div className='flex flex-col md:flex-row items-center'>
    <motion.img  initial={{x:-120,opacity:0,rotate:20}} transition={{duration:1}} animate={{opacity:1,x:0,rotate:0}} className='z-20 mt-5 md:w-[500px] lg:w-[660px]' src={pizza} width={600} alt="Car" />

        <div className='flex flex-col items-center text-center gap-10'>
        <motion.h1 initial={{opacity:0,y:30}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:0.6}}  className='text-[#2f2c2c] dark:text-white text-3xl -translate-x-32 lg:text-6xl font-extrabold '>استمتع بأشهى بيتزا طازجة محضرة بأجود المكونات!</motion.h1>
        <motion.h2 initial={{opacity:0,y:30}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:0.6}}  className='text-red-400 font-bold text-3xl -translate-x-32 lg:text-4xl ' >   ! بيتزا تأخذك في رحلة من النكهات المميزة     </motion.h2>
        </div>
    </div>
<motion.div initial={{opacity:0,rotate:74}} transition={{duration:1}} animate={{opacity:1,rotate:80}} id='bg' className='z-10 w-[400px] h-[680px] duration-1000 top-[-20%] left-[-80%] lg:w-[780px] lg:h-[500px] lg:left-[-20%] bg-red-400 dark:bg-red-500 absolute md:top-[0%] rotate-[80deg] md:w-[740px] md:h-[250px] md:left-[-40%]'></motion.div>
   </section>


   <section id='AboutUs' >

<div className="flex flex-col md:flex-row-reverse items-center justify-around gap-7">
   
<motion.img src={pizzaAbout} width={400} initial={{opacity:0,x:20,rotate:20}} viewport={{once:false,amount:0.5}} whileInView={{opacity:1,x:0,rotate:0}} transition={{duration:1}} />


<div className='flex flex-col items-center gap-16 text-center'>
<motion.h2 initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{duration:0.7,delay:0.3}} viewport={{amount:0.5,once:false}} className='font-extrabold text-4xl text-red-400'>من نحن - بيتزا السعادة</motion.h2>
<motion.p initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.7,delay:0.5}} viewport={{amount:0.5,once:false}} className='text-black dark:text-white max-w-[330px] text-xl'>مرحبًا بكم في "بيتزا السعادة"، حيث نقدم بيتزا لذيذة بأعلى جودة باستخدام أفضل المكونات. نسعى لجعل كل وجبة تجربة ممتعة تجمع بين النكهات المميزة شكرًا لاختياركم بيتزا السعادة</motion.p>
</div>

</div>
   </section>

    <section id="ListPizza" >
    <motion.h2 initial={{x:30,opacity:0}} whileInView={{opacity:1,x:0}} viewport={{amount:0.5,once:false}} transition={{duration:1}} className='text-red-400 font-extrabold text-3xl lg:text-5xl text-center mt-10 mb-5'>قـائــــمة البيتــزا</motion.h2>
    <motion.p initial={{y:30,opacity:0}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1}} className='text-center font-bold text-black dark:text-white text-xl lg:text-2xl mb-10'>اطلب على ذوقك</motion.p> 



<div id="Pizzaimgs" className='md:grid lg:grid-cols-4 md:grid-cols-3 mx-auto w-[80%] flex flex-col justify-center items-center'>
<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.2}}>

   <div id="card" className='flex flex-col items-center gap-5  rounded-2xl'>
        <img  width={200} src={PizzaMargherita} alt="Pizza Margherita" />
        <p className='dark:text-white font-bold text-black'>بيتزا مارغاريتا</p>
            <span className='text-lg font-bold dark:text-white text-black'>10$</span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>اطلب الان</button>
        </div>
 

</motion.div >

<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.4}} >

   <div id="card" className='flex flex-col items-center gap-5  rounded-2xl'>
        <img width={200} src={ChickenPizza} alt="Chicken Pizza" />
        <p className='dark:text-white font-bold text-black'>بيتزا دجاج</p>
            <span className='text-lg font-bold dark:text-white text-black'>15$ </span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>اطلب الان</button>
        </div>
 
</motion.div>

<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.5}}>

<div id="card" className='flex flex-col items-center gap-5  rounded-2xl'>
        <img width={200} src={CheesePizza} alt="Cheese Pizza" />
        <p className='dark:text-white font-bold text-black'>بيتزا بالجبن</p>
            <span className='text-lg font-bold dark:text-white text-black'>10$ </span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>اطلب الان</button>
        </div>
</motion.div>


<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.6}}>

<div id="card" className='flex flex-col items-center gap-5  rounded-2xl'>
        <img width={200} src={CornPizza} alt="Corn Pizza" />
        <p className='dark:text-white font-bold text-black'>بيتزا بالذرة</p>
            <span className='text-lg font-bold dark:text-white text-black'>13$ </span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>اطلب الان</button>
        </div>
   </motion.div>

<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.7}}>

</motion.div>
</div>
    </section>


    <section id='Contact'>
<motion.h2 initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.6}}  className='text-black  dark:text-white font-extrabold text-center p-2 text-5xl mt-14'>Contact Us</motion.h2>

  <div className='flex  flex-col-reverse md:flex-row items-center justify-center gap-2'>
<motion.div initial={{opacity:0,x:-100,rotate:30}} whileInView={{opacity:1,rotate:0,x:0}} viewport={{amount:0.5,once:false}} transition={{duration:1}}>  <Lottie  animationData={pizzaAnimation} style={{height:500,width:500}} />
</motion.div>
<form>
<div id="box-input" className='flex mt-9 flex-col gap-4 items-center justify-start '>
<motion.div  initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.3}} className='flex'>
<label className='text-black dark:text-white mr-2' htmlFor="name">Name</label>
<input required type="text" id='name' className='rounded-xl p-[3px]' />
</motion.div>


<motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.4}}  className='flex'>
<label className='text-black dark:text-white mr-2' htmlFor="phone">Phone</label>
<input required type='number' id='phone' className='rounded-xl p-[3px]' />
</motion.div>
<motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.5}}  className='flex'>
<label className='text-black dark:text-white mr-2' htmlFor="em">Email</label>
<input required type="text" id='em' className='rounded-xl p-[3px]' />
</motion.div>

<motion.textarea initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.6}}  className='rounded-xl dark:bg-[#3d3b3b] dark:text-white text-black' required dir='rtl' placeholder='الرسالة' id='msg'></motion.textarea>
<motion.input initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.4}}  required type="submit" value='ارسال' className='p-2 rounded-2xl bg-red-400 text-white font-bold  hover:bg-red-700'/>
</div>

</form>

  </div>
</section>
    

    </>

  )
}

export default Home
