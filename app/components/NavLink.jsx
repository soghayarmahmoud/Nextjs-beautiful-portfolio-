import Link from "next/link";

const NavLink =({href, title}) =>{
    return(
        
        <Link href={href} className='block lg:py-2 lg:pl-3 lg:pr-4  lg:mx-1.5 md:mx-1.5 s  sm:py-1 sm:pl-1 sm:pr-1  text-[#444] lg:inline-block sm:text-xl rounded md:p-1 sm:p-0 hover:text-black hover:border-t-2  hover:border-t-blue-500 mx-2 sm:mx-0.5  '>{title}</Link>

    );
}
export default NavLink;