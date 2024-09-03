import React from 'react'
import { motion } from "framer-motion"
import Lottie from "lottie-react";
import carAnimation from '/MyLandingPageProjects/CarRental/src/assets/car.json'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import car from '/MyLandingPageProjects/CarRental/src/assets/img/view-3d-car.png'
import MercedesBenz from '/MyLandingPageProjects/CarRental/src/assets/img/Mercedes-Benz.png'
import CrossroadCar from '/MyLandingPageProjects/CarRental/src/assets/img/CrossroadCar.png'
import CrossroadCar2 from '/MyLandingPageProjects/CarRental/src/assets/img/CrossroadCar2.png'
import CrossroadCar3 from '/MyLandingPageProjects/CarRental/src/assets/img/CrossroadCar3.png'
import CrossroadCar4 from '/MyLandingPageProjects/CarRental/src/assets/img/CrossroadCar4.png'
import LamborghiniOrange from '/MyLandingPageProjects/CarRental/src/assets/img/LamborghiniOrange.png'
import lamborghini from '/MyLandingPageProjects/CarRental/src/assets/img/lamborghini.png'
import SedanCarBlue from '/MyLandingPageProjects/CarRental/src/assets/img/SedanCarBlue.png'
import YellowCar from '/MyLandingPageProjects/CarRental/src/assets/img/YellowCar.png'
import peugeot3008 from '/MyLandingPageProjects/CarRental/src/assets/img/peugeot3008.png'
import BlueSportsCar from '/MyLandingPageProjects/CarRental/src/assets/img/BlueSportsCar.png'
import AutomobileDaciaCar from '/MyLandingPageProjects/CarRental/src/assets/cars/AutomobileDaciaCar.png'
import BlueCar from '/MyLandingPageProjects/CarRental/src/assets/cars/BlueCar.png'
import WhiteCar from '/MyLandingPageProjects/CarRental/src/assets/cars/WhiteCar.png'
import WhiteCar2 from '/MyLandingPageProjects/CarRental/src/assets/cars/WhiteCar2.png'
import GraySportsCar from '/MyLandingPageProjects/CarRental/src/assets/cars/GraySportsCar.png'
import BrownCar from '/MyLandingPageProjects/CarRental/src/assets/cars/BrownCar.png'
import CarContactAnimation from '/MyLandingPageProjects/CarRental/src/assets/CarContactAnimation.json'


function Home() {
  return (
    <>
        <Header/>
   <section id="Home" >
    <div className='flex flex-col md:flex-row items-center'>
    <motion.img  initial={{x:-120,opacity:0,rotate:20}} transition={{duration:1}} animate={{opacity:1,x:0,rotate:0}} className='z-20' src={car} width={600} alt="Car" />

        <div className='flex flex-col items-center text-center gap-10'>
<motion.h1 initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:0.4}} className='text-orange-400 text-7xl font-extrabold md:mr-24'> !اختر سيارتك  </motion.h1 >
<motion.h2 initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:0.6}} className='text-4xl font-bold text-black dark:text-white md:mr-20'>  بيع وتأجير السيارات بأسعار مميزة   </motion.h2>
        </div>
    </div>
<motion.div initial={{opacity:0,rotate:74}} transition={{duration:1}} animate={{opacity:1,rotate:80}} id='bg' className='z-10 w-[400px] h-[680px] duration-1000 top-[-20%] left-[-80%] lg:w-[780px] lg:h-[500px] lg:left-[-20%] bg-orange-400 dark:bg-orange-500 absolute md:top-[0%] rotate-[80deg] md:w-[740px] md:h-[400px] md:left-[-30%]'></motion.div>
   </section>
   <section id='AboutUs' >

<div className="flex flex-col md:flex-row-reverse items-center justify-around gap-7">
   
<motion.div initial={{opacity:0,x:20}} viewport={{once:false,amount:0.5}} whileInView={{opacity:1,x:0}} transition={{duration:1}} ><Lottie  style={{width:600,height:500}} animationData={carAnimation} />
</motion.div>


<div className='flex flex-col items-center gap-16 text-center'>
    <motion.h2 initial={{opacity:0,x:-20}} transition={{duration:1}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:0.5}} className='font-extrabold text-orange-300 text-6xl '>من نحن</motion.h2>
    <motion.p initial={{opacity:0,y:30}} transition={{duration:1,delay:0.2}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} className='text-2xl m-2 text-black dark:text-white px-5 text-center w-[100%] '>
    مرحباً بكم في سيارات حديثة! نحن متخصصون في بيع واستئجار السيارات الجديدة والمستعملة. نقدم لكم خيارات متنوعة بجودة عالية وأسعار تنافسية. فريقنا هنا لمساعدتكم في العثور على السيارة المناسبة لاحتياجاتكم. شكراً لاختياركم سيارات حديثة</motion.p>
</div>

</div>
   </section>

    <section id="CarsRental">
        <motion.h2 initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{amount:0.5,once:false}} className='font-extrabold text-6xl mb-10 text-center  text-orange-300 mt-10'>سيارات للتأجير</motion.h2>
<div id="Cars" className='md:grid lg:grid-cols-4 md:grid-cols-3 mx-auto w-[80%] flex flex-col justify-center items-center'>
<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.3}}>
<Link to='/car1'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img  width={200} src={MercedesBenz} alt="MercedesBenz" />
        <p className='dark:text-white font-bold text-black'>Mercedes-Benz</p>
            <span className='text-lg font-bold dark:text-white text-black'>20$ لليوم الواحد</span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>تأجير</button>
        </div>
   </Link>

</motion.div >

<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.4}} >
<Link to='/car2'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={CrossroadCar} alt="crossroad car" />
        <p className='dark:text-white font-bold text-black'>Crossroad Car</p>
            <span className='text-lg font-bold dark:text-white text-black'>25$ لليوم الواحد</span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>تأجير</button>
        </div>
   </Link>
</motion.div>

<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.3,once:false}} transition={{duration:1,delay:0.5}}>

<Link to='/car3'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={CrossroadCar2} alt="CrossroadCar" />
        <p className='dark:text-white font-bold text-black'>Crossroad Car</p>
            <span className='text-lg font-bold dark:text-white text-black'>25$ لليوم الواحد</span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>تأجير</button>
        </div>
   </Link>
</motion.div>


<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.4,once:false}} transition={{duration:1,delay:0.5}}>


<Link to='/car4'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={CrossroadCar3} alt="Crossroad Car" />
        <p className='dark:text-white font-bold text-black'>Crossroad Car</p>
            <span className='text-lg font-bold dark:text-white text-black'>25$ لليوم الواحد</span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>تأجير</button>
        </div>
   </Link>
   </motion.div>

<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.5}}>

<Link to='/car5'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={CrossroadCar4} alt="CrossroadCar" />
        <p className='dark:text-white font-bold text-black'>Crossroad Car</p>
            <span className='text-lg font-bold dark:text-white text-black'>25$ لليوم الواحد</span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>تأجير</button>
        </div>
   </Link>
</motion.div>

<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.6,once:false}} transition={{duration:1,delay:0.5}}>

<Link to='/car6'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={peugeot3008} alt="peugeot3008" />
        <p className='dark:text-white font-bold text-black'>Peugeot 3008</p>
            <span className='text-lg font-bold dark:text-white text-black'>28$ لليوم الواحد</span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>تأجير</button>
        </div>
   </Link>
</motion.div>

<motion.div  initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.5}}>

<Link to='/car7'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={YellowCar} alt="YellowCa" />
        <p className='dark:text-white font-bold text-black'>Yellow Car</p>
            <span className='text-lg font-bold dark:text-white text-black'>20$ لليوم الواحد</span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>تأجير</button>
        </div>

</Link>

</motion.div>

<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.6,once:false}} transition={{duration:1,delay:0.5}}>

<Link to='/car8'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={BlueSportsCar} alt="Blue Sports Car" />
        <p className='dark:text-white font-bold text-black'>Blue Sports Car</p>
            <span className='text-lg font-bold dark:text-white text-black'>20$ لليوم الواحد</span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>تأجير</button>
        </div>

</Link>
</motion.div>

<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.5}}>

<Link to='/car9'>

<div id="card" className='flex flex-col items-center gap-5'>
     <img width={200} src={LamborghiniOrange} alt="LamborghiniOrange" />
     <p className='dark:text-white font-bold text-black'>Orange Lamborghini</p>
         <span className='text-lg font-bold dark:text-white text-black'>60$ لليوم الواحد</span>
         <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>تأجير</button>
     </div>
</Link>
</motion.div>

<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.5}}>

<Link to='/car10'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={lamborghini} alt="lamborghini" />
        <p className='dark:text-white font-bold text-black'>lamborghini</p>
            <span className='text-lg font-bold dark:text-white text-black'>70$ لليوم الواحد</span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>تأجير</button>
        </div>
   </Link>
</motion.div>
</div>
    </section>
    <section id="CarsSale">
    <motion.h2 initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{amount:0.5,once:false}} className='font-extrabold text-6xl mb-10 text-center  text-green-400 mt-10'>سيارات للبيع</motion.h2>
    <div id="Cars" className='md:grid lg:grid-cols-3 md:grid-cols-2 mx-auto w-[80%]  flex flex-col justify-center items-center'>
<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.3}}>
<Link to='/car11'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={AutomobileDaciaCar} alt="AutomobileDaciaCar" />
        <p className='dark:text-white font-bold text-black'>Automobile Dacia Car</p>
            <span className='text-lg font-bold dark:text-white text-black'>13 000$ </span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>شراء</button>
        </div>
   </Link>

</motion.div >
<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.3}}>
<Link to='/car12'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={150} src={BlueCar} alt="Blue Car" />
        <p className='dark:text-white font-bold text-black'>Blue Car</p>
            <span className='text-lg font-bold dark:text-white text-black'>10 000$ </span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>شراء</button>
        </div>
   </Link>

</motion.div >
<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.3}}>
<Link to='/car13'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={WhiteCar} alt="WhiteCar" />
        <p className='dark:text-white font-bold text-black'>White Car</p>
            <span className='text-lg font-bold dark:text-white text-black'>12 000$ </span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>شراء</button>
        </div>
   </Link>

</motion.div >
<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.3}}>
<Link to='/car14'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={WhiteCar2} alt="WhiteCar" />
        <p className='dark:text-white font-bold text-black'>White Car</p>
            <span className='text-lg font-bold dark:text-white text-black'>11 000$ </span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>شراء</button>
        </div>
   </Link>

</motion.div >
<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.3}}>
<Link to='/car15'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={BrownCar} alt="BrownCar" />
        <p className='dark:text-white font-bold text-black'>Brown Car</p>
            <span className='text-lg font-bold dark:text-white text-black'>12 500$ </span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>شراء</button>
        </div>
   </Link>

</motion.div >
<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.3}}>
<Link to='/car16'>
   <div id="card" className='flex flex-col items-center gap-5'>
        <img width={200} src={GraySportsCar} alt="GraySportsCar" />
        <p className='dark:text-white font-bold text-black'>Gray SportsC ar</p>
            <span className='text-lg font-bold dark:text-white text-black'>11 500$ </span>
            <button className='p-2 rounded-2xl bg-green-400 text-white font-bold hover:bg-green-600'>شراء</button>
        </div>
   </Link>

</motion.div >
</div>
    </section>
    <section id='Contact'>
<motion.h2 initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.6}}  className='text-black  dark:text-white font-extrabold text-center p-2 text-5xl mt-14'>Contact Us</motion.h2>

  <div className='flex  flex-col-reverse md:flex-row items-center justify-center gap-2'>
<motion.div initial={{opacity:0,x:-100,rotate:30}} whileInView={{opacity:1,rotate:0,x:0}} viewport={{amount:0.5,once:false}} transition={{duration:1}}>  <Lottie  animationData={CarContactAnimation} style={{height:500,width:500}} />
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
