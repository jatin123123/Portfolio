'use client'
import React from 'react'

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Loader() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for sliding in the text
   


    let tl=gsap.timeline();
    tl.from(".line h1", {
      y: 150,
      stagger: 0.2,
      duration: 0.6,
      delay:0.5  // Add duration for the animation timing
    });
    tl.from("#line1-part1,.line h2",{
      opacity:0 ,
      onStart:function(){
        let time=document.querySelector("#line1-part1 h5");
        let grow=0;
        
        setInterval(() => {
          if(grow<100){
            time.innerHTML=grow++;
          }else{
            time.innerHTML=grow;
          }
        }, 35);
    
      }
    })
    tl.to("#loader",{
      opacity:0,
      duration:0.2,
      delay:4
    })
    tl.from("#page1",{
      y:1200,
      delay:0.2,
      opacity:0,
      ease:'back.out'
    })
    tl.to("#loader",{
      display:"none"
    })
   
  }, []);
  return (
    <div id="loader" className='w-full text-white px-[25vh] py-[10vw] h-full fixed z-[999] bg-[#0b0b0b]'>
    <div className="line  h-fit flex items-center justify-start overflow-hidden gap-[3vw]">
      <div id="line1-part1" className='flex items-center justify-center gap-[2vw] '>
        <h5 className='text-[2vw] font-serif italic text-right w-[5vw]'>00</h5>
        <h6 className='text-[2vw] font-serif italic'>- 100</h6>
      </div>
      <h1 className='text-[4vw] uppercase font-bold font-sans'>Hang tight</h1>
    </div>
    <div className="line h-fit flex items-center justify-start overflow-hidden">
      <h1 className='text-[4vw] uppercase font-bold font-sans'>Preparing something </h1>
    </div>
    <div className="line h-fit flex items-center justify-start overflow-hidden">
      <h1 className='text-[4vw] uppercase font-bold font-sans'>exciting for you... loading</h1>
      <h2 className='text-[4vw] ml-5 font-bold italic '>NOW</h2>
    </div>

    <h1 className='mt-10  flex justify-end opacity-60 -mr-20'>Bringing my work to life... Almost there!  </h1>
    
    <h1 className='absolute bottom-4  opacity-25 left-[50%] -translate-x-[50%] '> © Jatin Jangid  2024</h1>
  </div>

  )
}

export default Loader