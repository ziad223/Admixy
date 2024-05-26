'use client';
import React from 'react'
import  Typewriter  from 'typewriter-effect';
const Awards = () => {
    return (
        <div className='awards'>
     <div className="awards-page-hero">
      <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Awards'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        At Highness Investment LLC, we take pride in the recognition and awards we have received, which reflect our commitment to providing exceptional investment services to our clients. Join us today to experience unparalleled trading, and benefit from the global expertise that has earned us accolades and awards in the field of investment and trading!

       </p>
       </div>
      </div>
        </div>
    )
}

export default Awards
