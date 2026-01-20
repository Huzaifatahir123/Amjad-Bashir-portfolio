import React from 'react'

import {motion,easeInOut, useScroll, useTransform} from "framer-motion"
import {parent,fadeInUp,revealeffect,parent1} from "../animations/navanimation"
import assets from '../assets/assets'
const Footer = () => {
  return (
    <motion.div  className='flex dark:bg-dark dark:text-white flex-col gap-4 sm:px-12 px-4 lg:px-24 xl:px-40 pt-10'>
                 <motion.div className='p-4 gap-4 rounded-t-2xl w-full flex flex-col  bg-secondary '>
                    <motion.div variants={parent1} viewport={{once:true,amount:0.3}} initial = "hidden" whileInView="visible" className=' flex justify-between items-center'>
 <motion.h1
 variants={revealeffect}
             initial = "initial"
             viewport={{once:true}}
             whileInView = "visible" 
             transition={{duration:1,delay:0.2,ease:easeInOut}}
 className='text-3xl dark:text-white max-sm:text-sm font-bold text-black '  >
Amjad<span className='text-red-500 text-3xl '>.</span>
  </motion.h1>
 <motion.h1
 variants={revealeffect}
             initial = "initial"
             viewport={{once:true}}
             whileInView = "visible" 
             transition={{duration:1,delay:0.2,ease:easeInOut}}
 className='text-xl max-sm:text-sm font-sm dark:text-white text-black '  >
amjadbashirrose@gmail.com

  </motion.h1>

                    </motion.div>
                      
                         <motion.div  className='w-full h-[1px] dark:bg-white bg-black'></motion.div>
                         <motion.div variants={parent1} viewport={{once:true,amount:0.3}} initial = "hidden" whileInView="visible" className='flex justify-between dark:text-white gap-2 text-black items-center'>
                            <motion.p variants={fadeInUp} className='text-sm dark:text-white'>© 2025 Amjad All Rights Reserved.</motion.p>
                            <motion.p variants={fadeInUp} className='text-sm text-black dark:text-white'>Privacy Policy</motion.p>
                         </motion.div>
                    
                 </motion.div>
            
    </motion.div>
  )
}

export default Footer