import React from 'react';

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-6 pb-6'>
      <div className='md:flex flex-row md:h-[300px]'>
      <img src="./img/portfolio-06.jpg" alt="" className='w-[300px] h-auto rounded-full'/>
      <div className='flex flex-col h-full items-center justify-center ml-6'>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Gray</h1>
      <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
     </div>
     </div> 
      <p className='text-sm max-w-xl my-6 font-bold'>
          My journey started back in my highschool drafting class, where my passion for solving problems was sparked by learning Autodesk software. I spent 3 years working with AutoCAD and Inventor before heading to Colorado State to study Mechanical Engineering. While at Colorado State, I worked at the university recreation center. For 5 years, I honed my customer service and communication skills. After graduating, I joined a telecommunications engineering company and was able to use both my communication and problem solving/design skills to build construction drawings for telecom companies. In my spare time, I found myself drawn to web developement and in July, I decided to make pursuing web development my primary goal.
      </p>
      </div>
            


    
  )
}

export default Intro;