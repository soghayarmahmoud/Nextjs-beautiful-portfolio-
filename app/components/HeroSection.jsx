// "use client";
"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';



const HeroSection = ()=> {

    return(
        <section className=''>
            <div className='my-8 py-8'></div>
            <div className='grid grid-cols-1 lg:grid-cols-12 mt-5'>
                <div className='col-span-7 place-self-center text-center sm:text-left animate-fade-in-slide-up'>

                    <h1 className="text-black font-bold text-3xl sm:text-2xl lg:text-4xl text-center my-4 "> 
                       <span>
                        Hi, I'm
                        </span> 
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Ali Abdelhameed',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Video Editor',
                                    1000,
                                    'Content Creator',
                                    1000
                                   ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ fontSize: '1.4em', display: 'block' , backgroundImage:'linear-gradient(to right, #1347D6, #2B9DCC)', backgroundClip:'text', WebkitTextFillColor:'transparent', color:'transparent', marginTop:'20px', marginBottom:'20px' }}
                                    repeat={Infinity}
                                />
                         </h1>
                    <p className='text-gray-400   my-8 px-10 text-base  sm:text-lg lg:text-xl' dir='rtl'>
                        أنا علي عبدالحميد، مونتير محترف وصانع محتوى متخصص في Reels تعليمية وإبداعية. بخبرة عملية ومعرفة دقيقة بتفاصيل المونتاج،
هدفي دائما اخلي العملاء يقدمه محتوى جديد — سريع، مفيد، ويشد الانتباه من أول ثانية.
كمان بساعد المونتيرين الطموحين إنهم يطوّروا مستواهم ويتعلموا تريكات واحترافية في برامج المونتاج.
                        
                    </p>
                <div className='px-14 '>
                    <button className='px-6 py-3.5 sm:w-fit w-full rounded-full mr-4 transition-colors bg-green-500 hover:bg-green-400 hover:cursor-pointer text-black font-bold ' onClick={()=> window.open('https://wa.me/201095054714','_blanc')}>WhatsApp</button>
                    <button className='px-6 py-3 sm:w-fit w-full rounded-full mr-4 transition-colors hover:bg-[#444] hover:text-white hover:cursor-pointer text-black border border-solid border-black mt-3 ' onClick={()=> window.open('#projects','_self')}>Show Projects</button>
                </div>

                </div>


                <div className='col-span-5 mt-10 lg:mt-0 place-self-center'>
                    <div className='rounded-full bg-blue-500  w-[320px] h-[320px] relative lg:w-[320px] lg:h-[320px] sm:w-[320px] sm:h-[320px]'>

                    <Image
                    className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    src="/images/l.jpg"
                    alt='profile image'
                    width={300}
                    height={300}
                    />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HeroSection;