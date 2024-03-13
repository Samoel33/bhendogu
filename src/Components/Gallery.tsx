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
    <h1 className='p-2 text-4xl text-primary text-bold'>Our great Services</h1>
    <div className='w-full flex flex-col justify-center pr-2 pl-2'>
    <div className="w-full h-full flex justify-between rounded shadow-md shadow-overlay">
      <div className="w-1/2 h-3/4 relative">
      <h1 className='absolute bottom-0 text-2xl text-primary w-full h-2/4 rounded flex justify-center items-center bg-overlay text-bold cardHeight animate-card transition duration-65'>SWITCHGEAR SERVICES</h1>
      <Image src={switchgear} alt="Switchgear Services" className='w-full h-full rounded' />
      </div>
      <p className='w-1/2 text-text-primary max-w-prose'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint alias veniam exercitationem dolor, nisi corrupti tenetur, vel minima autem, maiores debitis illo obcaecati sit? Nemo earum labore natus nobis.
      </p>
    </div>
    <div className="w-full h-full flex flex-row-reverse p-2 gap-2 rounded">
      <div className="w-1/2 h-3/4 relative">
        <h1 className='absolute bottom-0 text-2xl text-primary w-full h-2/4 rounded flex justify-center items-center bg-overlay text-bold cardHeight animate-card transition duration-65'>TRANSFORMER SERVICES</h1>
      <Image src={transformer} alt="Switchgear Services" className='w-full h-full rounded' />
      </div>
      <p className='w-1/2 text-text-primary max-w-prose'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint alias veniam exercitationem dolor, nisi corrupti tenetur, vel minima autem, maiores debitis illo obcaecati sit? Nemo earum labore natus nobis.
      </p>
    </div>
    <div className="w-full h-full flex p-2 bg-overlay  gap-2 rounded">
      <div className="w-1/2 h-3/4 relative">
        <h1 className='absolute bottom-0 text-2xl text-primary w-full h-2/4 rounded flex justify-center items-center bg-overlay text-bold cardHeight animate-card transition duration-65'>TESTING USING OMICRON</h1>
      <Image src={omicron} alt="Switchgear Services" className='w-full h-full rounded' />
      </div>
      <p className='w-1/2 text-text-primary max-w-prose'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint alias veniam exercitationem dolor, nisi corrupti tenetur, vel minima autem, maiores debitis illo obcaecati sit? Nemo earum labore natus nobis.
      </p>
    </div>
    </div>
    
    </>
  )
}
