import React from 'react'
import { shoe8 } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
const SuperQuality = () => {
  return (
    <section
      id="about-us" 
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">

        <h1 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
          The Quality
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>You Desire!</span>
        </h1>
        <p className='mt-4 lg:max-w-lg info-text'>
        We only use the best quality materials to ensure that our products are durable and long-lasting. Ensuring that you get the best value for your money. Providing you with the quality you desire.
        </p>
        <div className='mt-11'>
          <Button label='View Details' iconURL={arrowRight} />

        </div>
        
      </div>
      <div className='flex-1 flex justify-center items-center'>
          
        <img src={shoe8} alt='shoe' width={570} height={522} className='object-contain' />
      </div>
      
    </section>
  )
}

export default SuperQuality;

