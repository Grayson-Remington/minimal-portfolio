import React from 'react';

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Grayson</h1>
      <p className='text-base md: text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
      <p className='text-sm max-w-xl mb-6 font-bold'> I'm an aspiring web developer with a mechanical engineering degree and a background in computer drafting.
            <br />
            All code for projects displayed here can be found on my github{' '}
            <a
               href="https://grayremington.com"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               gray-remington
            </a>{' '}
         </p>


    </div>
  )
}

export default Intro;