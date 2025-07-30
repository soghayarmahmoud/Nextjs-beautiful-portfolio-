"use client";
import React from "react";
import ReactDOM from 'react-dom';
import Link from "next";
import { SocialIcon } from 'react-social-icons';

const Component = <SocialIcon url="https://youtube.com" />
const Component2 = <SocialIcon url="https://instagram.com" />


const ProjectCard = ({imgUrl, title, description,instaUrl, youtubeUrl})=>{

    const handleCardClick = () => {
    if (instaUrl) {
      window.open(instaUrl, '_blank'); // Opens the Instagram URL in a new tab
    }
}

return(
    <div className="bg-[#ddd] m-2 p-4 rounded-2xl  shadow-2xs"  onClick={handleCardClick}>
        
        <div 
        className="h-80 md:h-80 rounded-t-xl relative group"
        style={{background: `url(${imgUrl})` 
        , backgroundSize:"cover"}}
        >
            {/* <div className="overlay rounded-t-xl absolute top-0 w-full h-full  bg-[#1818189f] hidden group-hover:flex  transition-all duration-500 justify-center  items-center">
                <div className="px-4">
                    <SocialIcon url={instaUrl} />
                </div>
                <div className="px-4">
                    <SocialIcon url={youtubeUrl} />
                </div>
            </div> */}

        </div>
        <div className="text-black" >
            <h5 className="text-xl text-center text-black py-4 font-bold ">{title}</h5>
            <p className=" text-base text-[#444] p-4 font-semibold  mb-2 ">{description}</p>
        </div>
    </div>
);
}
export default ProjectCard;