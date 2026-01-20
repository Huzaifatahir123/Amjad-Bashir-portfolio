import React from 'react'
import assets  from '../assets/assets'
import {DownloadIcon,LinkedinIcon} from "lucide-react"
const Hero = ({theme,settheme}) => {
  return (
    <div className='flex px-4 max-sm:w-screen max-sm:h-screen dark:text-text dark:bg-dark flex-col gap-4 justify-center items-center sm:px-12 lg:px-24 xl:px-40 py-20'>
      <img className='w-36 rounded-full h-36 object-cover' src={assets.picportfolio} alt="" />
      <p className='text-lg'>Hi i am AMJAD BASHIR</p>
      <h1 className='sm:text-4xl max-sm:text-center text-3xl  font-bold'> Senior Accounts & Finance Professional Based In Pakistan</h1>
      <p className='text-center'>I am a Senior Accounts & Finance Professional <br /> based in pakistan have a experience of 15+ years</p>
      <div className='flex gap-4'>
        <a target='_blanck' href='https://www.linkedin.com/in/amjad-bashir-863571159' className='hover:text-white hover:bg-black sm:px-6 sm:py-4 p-4 text-xs dark:hover:bg-white dark:hover:text-black duration-200  border-1 rounded-4xl sm:rounded-4xl flex justify-center items-center gap-1 max-sm:text-xs  '>Connect<LinkedinIcon className='max-sm:w-4'/></a>
        <a href={assets.Cv} download="AMJAD BASHIR CV.pdf"className=' dark:hover:bg-white dark:hover:text-black duration-200  sm:px-6 sm:py-4 p-4 border-1  rounded-4xl  flex  gap-2 justify-center items-center cursor-pointer hover:text-white hover:bg-black'>my resume <DownloadIcon className='w-6'/></a>
      </div>
    </div>
  )
}

export default Hero