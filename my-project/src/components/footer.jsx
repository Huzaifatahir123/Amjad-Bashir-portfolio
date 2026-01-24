

const Footer = () => {
  return (
    <div className='flex dark:bg-dark dark:text-white flex-col gap-4 sm:px-12 px-4 lg:px-24 xl:px-40 pt-10'>
      <div className='p-4 gap-4 rounded-t-2xl w-full flex flex-col bg-secondary'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl dark:text-white max-sm:text-sm font-bold text-black'>
            Amjad<span className='text-red-500 text-3xl'>.</span>
          </h1>
          <h1 className='text-xl max-sm:text-sm font-sm dark:text-white text-black'>
            amjadbashirrose@gmail.com
          </h1>
        </div>

        <div className='w-full h-[1px] dark:bg-white bg-black'></div>
        
        <div className='flex justify-between dark:text-white gap-2 text-black items-center'>
          <p className='text-sm dark:text-white'>© 2025 Amjad All Rights Reserved.</p>
          <p className='text-sm text-black dark:text-white'>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer