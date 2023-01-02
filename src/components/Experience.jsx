import React from 'react';

function Experience() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <section>
      
      <h2 className='text-3xl mb-7'>Skills and Experience</h2>
      
      <div>
        <div>
          <h3 className='text-2xl mb-3'>Software skills</h3>
          <p className='italic'> Javascript, &nbsp; Typescript, &nbsp; React, &nbsp; jQuery, &nbsp; Git, &nbsp; HTML, &nbsp; CSS, &nbsp; Tailwind, &nbsp; Grid, &nbsp; Flexbox, &nbsp; SQL</p>
        </div> 

        <div>
          
          <h3 className='text-2xl my-3'>Experience</h3>
          
            <ul className='list-disc'> 
           <strong> Engineer I &nbsp; &nbsp;| &nbsp; &nbsp; Network Building + Consulting  &nbsp; &nbsp; |	&nbsp; &nbsp; 	2021-2022</strong>
            <ul className='text-left list-disc ml-10'>
            <li>Developed construction drawings for telecommunications client equipment upgrades and modifications.</li>
            <li>Designed new conduit routes for fiber optic companies from existing infrastructure to proposed
             destinations in public right-of-way and private property.</li>
            <li>Prepared and reviewed construction drawings for completeness before final PE review.</li>
            <li>Communicated and managed multiple projects simultaneously for various clients. </li>
            </ul>
            <strong>Recreation Supervisor &nbsp; &nbsp;| &nbsp; &nbsp;  Colorado State University Campus Recreation &nbsp; &nbsp; |	&nbsp; &nbsp; 2016-2019</strong>
            <ul className='text-left list-disc ml-10'>

            <li>Supervised a staff ranging from 15-100 people</li>
            <li>Enforced policy to staff members and patrons to promote safety and consistency</li>
            <li>Provided excellent customer service to a culturally diverse demographic of patrons in order to promote an inclusive space</li>
            <li>Utilized conflict resolution skills with peers and customers</li>
            </ul>

            <strong> Maintenance Assistant  &nbsp; &nbsp;| &nbsp; &nbsp; Colorado State University Campus Recreation   &nbsp; &nbsp; |	&nbsp; &nbsp; 2014-2019 </strong>
            <ul className='text-left list-disc ml-10'>
            <li>Responsible for upkeep in the building through fixing and maintaining of fixtures</li>
            <li>Maintained facility fixtures through scheduled cleaning</li>
            <li>Repaired broken fixtures in the building</li>
            <li>Cleaned the facility and equipment to ensure a comfortable and clean environment </li>
            </ul>
            </ul>
        </div> 

        
      </div>

      
    </section>
    </div>
  )
}

export default Experience;