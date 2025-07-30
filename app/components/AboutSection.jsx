"use client";
import React,{useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AnimatedSection from "./AnimatedSection";






const TAB_DATA= [
    {
    title:"Skills",
    id:"skills",
    content:[
        <ul  className="font-bold text-base text-[#333] " key={"sk"}>
            <li key={'VFX'}>VFX</li>
            <li key={"Audio"}>Audio Editiing</li>
            <li key={"Sound"}>Sound Design</li>
            <li key={"Adobe"}>Adobe Premiere Pro</li>
            <li key={"AutoCAD"}>AutoCAD</li>
            <li key={"Structure"}>Structure Analysis & Design</li>
            <li key={"excel"}>Excel</li>
            <li key={"word"}>Word</li>
            <li key={"ppt"}>Power Point</li>
        </ul>
    ]
    },
    {
    title:"Education",
    id:"education",
    content:[
        <ul className="font-bold text-base text-[#333] " key={'edu'}>
            <li key={"HIET"}>HIET-Sohag</li>
            <li key={"Civil"} >Civil Engineering</li>
            <li key={"Yanfaa"}>Yanfaa</li>
            <li key={"EGFWD"}>Udemy</li>
            <li key={"CS50"}>Youtube</li>

        </ul>
    ]
    },



]


const AboutSection = ({ children, initialClass = '', animateClass = '', threshold = 0.5, ...props })=>{
    



    const [tab, setTab] = useState("skills");
    const [isPending, startTransision] = useTransition();

    const handleTabChange = (id)=>{
        startTransision(
            ()=>{
                setTab(id)
            }
        )
    }

return(

    <section className="text-black animate-fadeIn" id="about">

        <div className="md:grid md:grid-cols-2 gap-4 items-center sm:place-items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"  >
       
            <Image src="/images/about.jpg" width={500} height={500} alt="about me section" className="rounded-2xl"/>
            <AnimatedSection
            initialClass="opacity-0 translate-y-10 transition-all duration-1000"
            animateClass="opacity-100 translate-y-0"
             threshold={0.5}

            >

            
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full animate-fade-in-slide-up">
                <h2 className="text-4xl font-bold  my-4 text-center text-blue-500">About Me</h2>
                <p className="text-[#555]  text-base">
                    As a versatile freelancer, I bring a dual expertise in both Civil Engineering and Video Editing. My background in Civil Engineering provides a strong foundation in precision, problem-solving, and project management, ensuring a highly organized and analytical approach to every task. Complementing this, my proficiency in video editing allows me to transform complex ideas and raw footage into clear, compelling, and visually engaging narratives. I am dedicated to delivering high-quality results, whether it's optimizing structural designs or crafting dynamic visual content that effectively communicates your message.
                </p>

                <div className="flex flex-row mt-8  ">
                   
                   <TabButton key="skills-TAB" selectTab={()=> {handleTabChange("skills")} } active={(tab==="skills")} children={"Skills"}/>
                    <TabButton  key="education-TAB" selectTab={()=>handleTabChange("education")} active={(tab==="education")} children={"education"}/>
                   
                </div>
                <div className="mt-8">{TAB_DATA.find((t)=> t.id=== tab).content}</div>
            </div>
            </AnimatedSection>
        </div>
    </section>

);

}
export default AboutSection 
