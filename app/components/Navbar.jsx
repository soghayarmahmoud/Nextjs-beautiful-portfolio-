"use client";

import React from 'react';
import Link  from 'next/link';
import NavLink from './NavLink';
const Navbar = ()=>{
    
    return(
        <nav  className='fixed top-0 left-0 right-0 z-10 bg-[#dddddd90] select-none '>

        <div className='flex flex-wrap items-center justify-between mx-auto p-4 lg:p-8 '> 
            <Link href={'/'} className='text-blue-600 font-bold text-2xl lg:text-4xl sm:text-xl'>A<span className='text-black'>∀</span> </Link>
        

        
            <div className='menu  md:block md:w-auto ' id='navbar'>
                <ul className='flex md:flex-row p-4 md:p-0 md:space-x-0 mt-0'>
                    <li><NavLink href={"#about"} title={"About"}/></li>
                    <li><NavLink href={"#contact"} title={"Contact"}/></li>
                    <li><NavLink href={"#projects"} title={"Projects"}/></li>

                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;