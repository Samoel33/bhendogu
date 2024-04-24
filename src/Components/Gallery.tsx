import Image from 'next/image';
import Link from 'next/link';
import path from 'path'
import React from 'react'
import switchgear from '../../public/images/SWITCHGEAR.jpg'
import transformer from '../../public/images/transformer.jpg'
import omicron from '../../public/images/a-reOMICRON.jpg'

export default function Gallery() {
   
  return (
    <>
    <h1 className='p-2 text-4xl text-primary text-bold transform transition duration-60 animate-heading-anim'>Our great Services</h1>
    <div className='w-full grid lg:grid-cols-2 gap-2 pl-1 pr-1 xs:grid-cols-1 transform transition duration-75 absolute z-2 animate-over-relay'>
    <div className="w-full lg:h-full md:h-full xs:h-auto flex lg:flex-row justify-between rounded shadow-md shadow-overlay relative xs:flex-col">
      <div className="lg:w-1/2 md:w-1/2 xs:w-full h-full relative">
      <h1 className='absolute bottom-0 text-2xl text-primary w-full h-2/4 lg:rounded md:rounded xs:rounded-none flex justify-center items-center bg-overlay text-bold cardHeight animate-card transition duration-65'>SWITCHGEAR SERVICES</h1>
      <Image src={switchgear} alt="Switchgear Services" className='w-full h-full rounded' />
      </div>
      <p className='lg:w-1/2 lg:relative lg:bg-text-primary  max-w-prose  xs:w-full xs:bg-overlay xs:h-full p-1'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint alias veniam exercitationem dolor, nisi corrupti tenetur, vel minima autem, maiores debitis illo obcaecati sit? Nemo earum labore natus nobis.
      </p>
    </div>
    <div className="w-full lg:h-full md:h-full xs:h-auto flex lg:flex-row-reverse justify-between rounded shadow-md shadow-overlay relative xs:flex-col">
      <div className="lg:w-1/2 md:w-1/2 xs:w-full h-full relative">
      <h1 className='absolute bottom-0 text-2xl text-primary w-full h-2/4 lg:rounded md:rounded xs:rounded-none flex justify-center items-center bg-overlay text-bold cardHeight animate-card transition duration-65'>TRANSFORMER SERVICES</h1>
      <Image src={transformer} alt="Switchgear Services" className='w-full h-full rounded' />
      </div>
      <p className='lg:w-1/2 lg:relative lg:bg-text-primary  max-w-prose  xs:w-full xs:bg-overlay xs:h-full p-1'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint alias veniam exercitationem dolor, nisi corrupti tenetur, vel minima autem, maiores debitis illo obcaecati sit? Nemo earum labore natus nobis.
      </p>
    </div>
    <div className="w-full lg:h-full md:h-full xs:h-auto flex lg:flex-row justify-between rounded shadow-md shadow-overlay relative xs:flex-col">
      <div className="lg:w-1/2 md:w-1/2 xs:w-full h-full relative">
      <h1 className='absolute bottom-0 text-2xl text-primary w-full h-2/4 lg:rounded md:rounded xs:rounded-none flex justify-center items-center bg-overlay text-bold cardHeight animate-card transition duration-65'>TESTING USING OMICRON TOOLS</h1>
      <Image src={omicron} alt="Switchgear Services" className='w-full h-full rounded' />
      </div>
      <p className='lg:w-1/2 lg:relative lg:bg-text-primary  max-w-prose  xs:w-full xs:bg-overlay xs:h-full p-1'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint alias veniam exercitationem dolor, nisi corrupti tenetur, vel minima autem, maiores debitis illo obcaecati sit? Nemo earum labore natus nobis.
      </p>
    </div>
    
    </div>
    
    </>
  )
}
