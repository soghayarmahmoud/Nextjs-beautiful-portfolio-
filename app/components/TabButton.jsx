"use client";
import React from 'react';

const TabButton = ({ active, selectTab, children} ) => {
    
    const buttonClasses = active ?
    "font-semibold text-black  border-b-2  border-blue-500 "
    :"text-[#444]  cursor-pointer";

return(
<button onClick={selectTab} >
    <p className= {`mr-3 font-semibold ${buttonClasses}`}>  
    {children}
    </p>
</button>
);


}


export default TabButton;