"use client";
import React from "react";
const ProjectCard = ({imgUrl, title, description,instaUrl})=>{

    const handleCardClick = () => {
    if (instaUrl) {
      window.open(instaUrl, '_blank'); // Opens the Instagram URL in a new tab
    }
}

return(
    <div className="bg-[#ddd] m-2 p-4 rounded-2xl  shadow-2xs"  onClick={handleCardClick}>
        
        <div 
        className="h-80 md:h-80 rounded-xl relative group"
        style = {{background: `url(${imgUrl})` 
        , backgroundSize:"cover"}}
        >

        </div>
        <div className="text-black" >
            <h5 className="text-xl text-center text-black py-4 font-bold ">{title}</h5>
            <p className=" text-base text-[#444] p-4 font-semibold  mb-2 ">{description}</p>
        </div>
    </div>
);
}
export default ProjectCard;