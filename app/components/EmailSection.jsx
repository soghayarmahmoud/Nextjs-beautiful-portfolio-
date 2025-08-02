"use client"

import InstagramIcon from "../../public/instagram-brands-solid-full.svg"
import WhatsAppIcon from "../../public/whats.svg"
import YoutubeIcon from "../../public/youtube-brands-solid-full.svg"
import Link from 'next/link'
import Image from 'next/image'

// import AnimatedSection from './AnimatedSection'

// const EmailSection = () => {

// const [emailSubmitted, setEmailSubmitted ] = useState(false);
// const clearInputs = () => {
//     document.getElementById('email').value = "";
//     document.getElementById('message').value = "";
//     document.getElementById('subject').value= "";
// }
// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//         email:e.target.email.value,
//         subject: e.target.subject.value,
//         message:e.target.message.value,
        
//     }
//     const JSONdata = JSON.stringify(data);
//     const endpoint = "/api/send";

//     const options ={
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSONdata,
//     }
//     const response = await fetch(endpoint, options);
 
   


//    const resData = await response.json();

//     if(response.ok){
//         console.log('Message Sent.');
//         setEmailSubmitted(true)
//     }

//     clearInputs();
// }

//     return (
//     <section id='contact' className='grid md:grid-cols-2 my-11 md:my-12 py-24 gap-4  sm:grid-cols-1 relative'>

//         {/* <div className="bg-[radial-gradient(ellipse_at_center,_#1e40af_0%,_transparent_70%)] rounded-full h-80 w-80  md:h-96 md:w-96 z-0 blur-lg absolute md:top-3/4 sm:top-full -left-4 transform -translate-1/2  -translate-x-1/2 "></div> */}
//             <AnimatedSection
//             initialClass="opacity-0 -translate-x-16 transition-all duration-1000"
//             animateClass="opacity-100 translate-x-0"
//              threshold={0.5}

//             >

            
//         <div>
//             <h5 className='text-5xl font-bold text-black  text-center my-2'>دعنا نتواصل</h5>
//             <p className='text-[#444] my-4 max-w-md mx-4 text-3xl' style={{direction:"rtl"}}>
//                 خلينا نحول فكرتك لفيديو يزوّد من مشاهداتك وارباحك 
//             </p>
//             <div className='socials flex flex-row gap-2 place-content-center ' style={{direction:"rtl"}}>
//                 <Link href={"https://www.instagram.com/engali.vfx?igsh=MTdsOTY2OHM5eDY2ZQ=="} className='max-w-16'>
//                     <Image src={InstagramIcon} alt='Instagram Link'/>
//                 </Link>


//                 <Link href={"https://youtube.com/@engalivfx?si=Pte6CDyFvVH4MUiQ"} className='max-w-16'>
//                     <Image src={YoutubeIcon} alt='Youtube Link'/>
//                 </Link>
//                 <Link href={"https://wa.me/201095054714"} className='max-w-16'>
//                     <Image src={WhatsAppIcon} alt='Youtube Link'/>
//                 </Link>
//             </div>
//         </div>
// </AnimatedSection>
//         <div>
//             <form action="" className='flex flex-col gap-2' onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="email" type="email" className='text-blue-500 font-bold mb-0 '>Your Email</label>
//                     <input name='email' type="email" id='email'  placeholder='example@gmail.com' className='h-8 rounded border-2 border-blue-500  outline-none w-full text-black pl-2  mb-4 bg-[#eee]'/>
//                 </div>
                    
                    
//                 <div>
//                     <label htmlFor="subject" type="text" className='text-blue-500 font-bold'>Subject:</label>
//                     <input name='subject' type="text" id='subject'  placeholder='Enter the subject here....' className='h-8 rounded border-2 border-blue-500  outline-none w-full text-black pl-2 mb-4  bg-[#eee]'/>
//                 </div>
                    
//                 <div>
                    
//                     <label htmlFor="message" type="text" className='text-blue-500 font-bold'>Your Message:</label>
//                     <textarea name='message' rows="4" cols="50" id='message' placeholder="Type your message here..." className=' max-h-40 rounded border-2 border-blue-500  outline-none w-full te pl-2 mb-4 text-black h-40 bg-[#eee]' ></textarea>
//                 </div>

//                 <button type="submit" className='w-full  bg-blue-600 hover:bg-blue-500 rounded-2xl py-4 font-bold '>
//                     Send Message
//                 </button>

//                 {emailSubmitted && (<p className='text-green-500 text-xl mt-2 font-bold'>
//                     Message sent successfully!
//                 </p>)} 
//             </form>
//         </div>
//     </section>
//   )
// }



import React, { useState } from 'react';
// ... other imports

const EmailSection = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setSubject('');
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: email, // Use state variable
            subject: subject, // Use state variable
            message: message, // Use state variable
        };
        // ... rest of your fetch logic ...

        if (response.ok) {
            console.log('Message Sent.');
            setEmailSubmitted(true);
        }

        clearInputs();
    };

    return (
        <section id='contact' className='grid md:grid-cols-2 my-11 md:my-12 py-24 gap-4  sm:grid-cols-1 relative'>


            
        <div>
            <h5 className='text-5xl font-bold text-black  text-center my-2'>دعنا نتواصل</h5>
            <p className='text-[#444] my-4 max-w-md mx-4 text-3xl' style={{direction:"rtl"}}>
                خلينا نحول فكرتك لفيديو يزوّد من مشاهداتك وارباحك 
            </p>
            <div className='socials flex flex-row gap-2 place-content-center ' style={{direction:"rtl"}}>
                <Link href={"https://www.instagram.com/engali.vfx?igsh=MTdsOTY2OHM5eDY2ZQ=="} className='max-w-16'>
                    <Image src={InstagramIcon} alt='Instagram Link'/>
                </Link>


                <Link href={"https://youtube.com/@engalivfx?si=Pte6CDyFvVH4MUiQ"} className='max-w-16'>
                    <Image src={YoutubeIcon} alt='Youtube Link'/>
                </Link>
                <Link href={"https://wa.me/201095054714"} className='max-w-16'>
                    <Image src={WhatsAppIcon} alt='Youtube Link'/>
                </Link>
            </div>
        </div>
            <div>
                <form action="" className='flex flex-col gap-2' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className='text-blue-500 font-bold mb-0 '>Your Email</label>
                        <input
                            name='email'
                            type="email"
                            id='email'
                            placeholder='example@gmail.com'
                            className='h-8 rounded border-2 border-blue-500  outline-none w-full text-black pl-2  mb-4 bg-[#eee]'
                            value={email} // Controlled component
                            onChange={(e) => setEmail(e.target.value)} // Update state on change
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className='text-blue-500 font-bold'>Subject:</label>
                        <input
                            name='subject'
                            type="text"
                            id='subject'
                            placeholder='Enter the subject here....'
                            className='h-8 rounded border-2 border-blue-500  outline-none w-full text-black pl-2 mb-4  bg-[#eee]'
                            value={subject} // Controlled component
                            onChange={(e) => setSubject(e.target.value)} // Update state on change
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className='text-blue-500 font-bold'>Your Message:</label>
                        <textarea
                            name='message'
                            rows="4"
                            cols="50"
                            id='message'
                            placeholder="Type your message here..."
                            className=' max-h-40 rounded border-2 border-blue-500  outline-none w-full te pl-2 mb-4 text-black h-40 bg-[#eee]'
                            value={message} // Controlled component
                            onChange={(e) => setMessage(e.target.value)} // Update state on change
                        ></textarea>
                    </div>
                    <button type="submit" className='w-full  bg-blue-600 hover:bg-blue-500 rounded-2xl py-4 font-bold '>
                        Send Message
                    </button>
                    {emailSubmitted && (
                        <p className='text-green-500 text-xl mt-2 font-bold'>
                            Message sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};
export default EmailSection
