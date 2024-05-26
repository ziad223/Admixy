'use client';
import Image from 'next/image';
import React from 'react'
import Typewriter from 'typewriter-effect';
import sateft1 from '../../assests/safety-icon-1.png';
import sateft2 from '../../assests/safety-icon-2.png';
import sateft3 from '../../assests/safety-icon-3.png';

const Safety = () => {
  return (
    <div className='safety '>
      <div className="saftey-page-hero">
      <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['Safety Of Your Funds'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        At Highness Investment LLC, we prioritize the safety of our clients' funds. We utilize state-of-the-art security measures and work with reputable financial institutions to ensure that your investments are protected. Your peace of mind is our top priority.
</p>
       </div> 
      </div>
      <div className="container">
        <h2 className='safety-title text-center font-bold text-3xl text-[#2b61ac] leading-[1.6]'>
        Securing your account from a negative balance is decisive when trading on the Forex market,
         <span className='md:block'>which is deemed inherently risky.</span>
        </h2>
        <p className='text-xl text-gray-600 text-center mt-5'>
        Highness Investment LLC provides standard tools to help you do this
        </p>
      </div>
      <div className="safety-last container flex justify-center gap-4">
        <div className="safety-div text-center">
       <Image src={sateft1} alt='safety-img' className='w-[100px] mx-auto '/>
       <h2 className='text-2xl my-4 text-[#2b61ac] font-medium'>Stop Loss Level</h2>
       <p className='text-gray-600'>
       Placing your stop loss at a reasonable level will protect your account from fast price changes and market fluctuations.
       </p>
        </div>
        <div className="safety-div text-center">
       <Image src={sateft2} alt='safety-img' className='w-[100px] mx-auto '/>
       <h2 className='text-2xl my-4 text-[#2b61ac] font-medium'>Transaction Volume</h2>
       <p className='text-gray-600'>
       It is important to be aware of the volume and number of open positions and orders on your account, as not all transactions may be profitable.


       </p>
        </div>
        <div className="safety-div text-center">
       <Image src={sateft3} alt='safety-img' className='w-[100px] mx-auto '/>
       <h2 className='text-2xl my-4 text-[#2b61ac] font-medium'>Leverage</h2>
       <p className='text-gray-600'>
       Managing leverage is another principal instrument for managing risks. Whenever the leverage are higher, the potential risks and profits are higher, so it's important to use it wisely.
       </p>
        </div>
      </div>
    </div>
  )
}

export default Safety
