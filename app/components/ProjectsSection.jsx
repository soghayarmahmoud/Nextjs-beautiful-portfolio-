import React from "react";
import ProjectCard from "./ProjectCard";
import HeroSection from "./HeroSection";
import Link from "next/link";


const projectData = [

        {
        id:1,
        title:"UI",
        description:"",
        image:"/images/pro1.PNG",

        insta: "https://www.instagram.com/reel/DMV4ehKodP9/?igsh=aDJmb3lkcDR6dmR0",
    }, 

    {
        id:2,
        title:"Personal branding",
        description:"",
        image:"/images/pro2.PNG",

        insta: "https://www.instagram.com/p/DHBPKYkqn-V/",
    },
    {
        id:3,
        title:"Color grading",
        description:"",
        image:"/images/pro3.PNG",

        insta: "https://www.instagram.com/p/DJZnYozquwt/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },    
    {
        id:4,
        title:"3D",
        description:"",
        image:"/images/pro4.PNG",

        insta: "https://www.instagram.com/reel/DK3D11qKY9c/?igsh=ZzBsYmM2bThiYjdk",
    },  
    {
        id:5,
        title:"Motion Graphic",
        description:"",
        image:"/images/pro5.PNG",

        insta: "https://www.instagram.com/reel/DF3Jwc9qM_i/?igsh=MWEwM3dnaW1hdTA5bw%3D%3D",
    },  
    
 
]



const ProjectsSection =()=>{
 return(  
    <section id="projects">
    <h2  className="text-center text-4xl font-bold text-blue-500 mt-4 mb-6 py-4  border-blue-500">My Projects</h2>
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 p-2 lg:grid-cols-3">
        {projectData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} instaUrl={project.insta} youtubeUrl={project.youtube} />)}
    </div>
    </section>);
}

export default ProjectsSection;