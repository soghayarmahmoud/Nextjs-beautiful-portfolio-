import React from "react";
import ProjectCard from "./ProjectCard";
import HeroSection from "./HeroSection";


const projectData = [
    {
        id:1,
        title:"Brand Story",
        description:"My first editing video",
        image:"/images/pro/pro3.PNG",
        insta: "https://www.instagram.com/p/DEKxL0ZIZvy/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },    
    {
        id:2,
        title:"Training & GYM",
        description:"",
        image:"/images/pro/pro4.PNG",
        
        insta: "https://www.instagram.com/p/DEN0K6Yon1_/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },    
    {
        id:3,
        title:"Health & Self Care",
        description:"",
        image:"/images/pro/pro5.PNG",
        
        insta: "https://www.instagram.com/p/DFsM7d-qdTS/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },    
    {
        id:4,
        title:"Seamless VFX Integration",
        description:"",
        image:"/images/pro/pro6.PNG",

        
        insta: "https://www.instagram.com/p/DEVsNdVohIn/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },
        {
        id:5,
        title:"Gym",
        description:"",
        image:"/images/pro/pro7.PNG",
        
        insta: "https://www.instagram.com/p/DFgdLLYohal/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },
        {
        id:6,
        title:"",
        description:"",
        image:"/images/pro/pro8.PNG",

        insta: "https://www.instagram.com/p/DFv8uwWoK-S/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },
    {
        id:7,
        title:"Brand story & Gym Couching",
        description:"",
        image:"/images/pro/pro9.PNG",

        insta: "https://www.instagram.com/p/DF8sHxVq2OU/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },
    {
        id:8,
        title:"Gym Tips",
        description:"",
        image:"/images/pro/pro10.PNG",

        insta: "https://www.instagram.com/p/DHBPKYkqn-V/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },
    {
        id:9,
        title:"Brand Story",
        description:"",
        image:"/images/pro/pro11.PNG",

        insta: "https://www.instagram.com/p/DHO-bM3qfcH/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },
    {
        id:10,
        title:"",
        description:"",
        image:"/images/pro/pro12.PNG",

        insta: "https://www.instagram.com/p/DHlKLy3KsQ_/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },
    {
        id:11,
        title:"",
        description:"",
        image:"/images/pro/pro13.PNG",

        insta: "https://www.instagram.com/p/DHtPiQKoKEA/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },
    {
        id:12,
        title:"",
        description:"",
        image:"/images/pro/pro14.PNG",

        insta: "https://www.instagram.com/p/DIocUuRK7Yj/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },
    {
        id:13,
        title:"Video Coloring",
        description:"",
        image:"/images/pro/pro15.PNG",

        insta: "https://www.instagram.com/p/DJZnYozquwt/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },
        {
        id:14,
        title:"My first video on the social media",
        description:" Since I'm an editor for many companies and content creators, I decided to be my own editor :) But I don't like taking pictures of myself, so I decided to appear this way.The first video will be religious, then I'll post information about editing (I mean, I'll diversify). These explanations and short videos will be posted on Instagram, while the long explanations will be posted on YouTube. I don't have a connection to other social media platforms. ",
        image:"/images/pro/pro1.PNG",

        insta: "https://www.instagram.com/p/DMIX35fIkYu/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
    },    {
        id:15,
        title:"My Second Video on the social media",
        description:" Since I'm an editor for many companies and content creators, I decided to be my own editor :) But I don't like taking pictures of myself, so I decided to appear this way.The first video will be religious, then I'll post information about editing (I mean, I'll diversify). These explanations and short videos will be posted on Instagram, while the long explanations will be posted on YouTube. I don't have a connection to other social media platforms. ",
        image:"/images/pro/pro2.PNG",

        insta: "https://www.instagram.com/p/DMN1U2CIuwb/",
        youtube: "https://www.youtube.com/@engalivfx/videos",
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