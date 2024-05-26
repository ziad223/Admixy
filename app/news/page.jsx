'use client';
import React from 'react'
import  Typewriter  from 'typewriter-effect';


const News = () => {
    return (
        <div className='news'>
              <div className="exhibitions-page-hero">
           <div className='text-center pt-[50px]'>
           <Typewriter
          className = 'Typewriter'
          options={{
          strings: ['Highness News'],
          autoStart: true,
          loop: true,
    
          }}
         />
        <p className='text-gray-100 w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
      Higness News Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellat       voluptas sed labore ullam ipsa sit esse sapiente pariatur? Consequatur, modi earum. Aliquam       commodi distinctio at veniam ex, eveniet quidem.   
    </p>
       </div>
       </div>
        </div>
    )
}

export default News
