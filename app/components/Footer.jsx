import React from 'react'
const currentDate = new Date();
const Footer = () => {
  return (
    <footer className='footer border-2 border-t-[#33353fa4] border-r-transparent border-l-transparent text-black'>
        <div className=' container p-12 flex justify-between'>
            <span className='text-2xl font-bold text-blue-500 select-none'>A<span className='text-black'>∀</span> </span>
            <p className='text-[#555]'> <span className='font-bold text-black text-xl'> &copy;</span> All rights reserved in { currentDate.getFullYear()  } </p>
        </div>
    </footer>
  )
}

export default Footer