'use client';
import Image from 'next/image';
import React from 'react'
import  Typewriter  from 'typewriter-effect';
import media from '../../assests/media-img.png';
const HighnessMedia = () => {
    return (
        <div className='highness-media'>
        <div className="highness-media-page-hero">
      <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Highness Media'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        As a leading entity in the trading industry, Highness Investment LLC is consistently at the pulse of financial innovation and market shifts. Our Media Page is the central repository for our communications, providing writers, analysts, and the curious with a comprehensive view of our latest news, insights, and company milestones.</p>
       </div>
            </div>
            <div className="highness-content container flex justify-center gap-10 rounded-lg">
              <div className="media-left text-gray-300 ml-10 mt-16">
                <h2 className='text-primary text-3xl font-bold'>Highness Launches Global Trading Race</h2>
                <p className='my-5 text-xl w-[70%] leading-[1.8]'>
                Highness has announced the launch of a Global Trading Competition with a prize pool of $500,000 for 33 winners in 3 rounds.*
                </p>
               <p className=' text-xl w-[80%] leading-[1.8]' >
               *Terms and conditions apply
                <span className='block '>All trading involves risk. It is possible to lose all your capital.</span>
               </p>
              </div>
              <div className="media-right mt-10">
                <Image src ={media} alt='media-img w-[100%] h-[400px]' className='media-img'/>
              </div>
            </div>

        </div>
    )
}

export default HighnessMedia
