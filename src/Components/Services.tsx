
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import switchgear from '../../public/images/SWITCHGEAR.jpg'
import transformer from '../../public/images/transformer.jpg'
import omicron from '../../public/images/a-reOMICRON.jpg'
import Typewriter from './Typewriter';
import images from './images';
import { easeInOut, motion} from "framer-motion";

const fadeIn={
  hidden:{
    x:"100vw",
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      easeInOut,
      duration:1.5,
      type:"spring",
      delay:0.05
    }
  },
}
const inview1={
  initial:{
    opacity:0,
    x:-20
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      delay:1,
      duration:1,
      easeInOut,
      type:'spring'
    }
  }
}
const brands={
  initial:{
    opacity:0,
    y:-20
  },
  visible:{
    opacity:1,
    y:0,
    transition:(index:number)=>({
      delay:10 * index,
      type:'spring'
    })
  }
}
export default function ServicesComponent() {
  
  return (
    <>
    <div className="w-full flex flex-col relative">
    <div className=' container '>
    <h1 className='lg:pl-14 xs:pl-1 lg:text-4xl xs:text-2xl text-primary text-bold transform transition duration-60 animate-heading-anim lg:mt-0 md:mt-0 xs:mt-20'>Our great Services</h1>
    <Typewriter/>
    <div className='w-full flex justify-center items-center h-18  '>
      <Link href={'/Bhendogu/Contact'} className='w-44 h-full text-primary rounded flex justify-center items-center border-secondary border-2 m-2'>CONTACT US NOW</Link>
    </div>
    </div>
    <motion.div variants={fadeIn} initial="hidden" animate="animate" 
    className='mb-14 lg:w-11/12 lg:ml-14 md:ml-14 xs:ml-0 xs:w-full grid lg:grid-cols-2 xs:grid-cols-1 gap-2'>
    <motion.div   className=" service lg:h-full md:h-full xs:h-auto flex  rounded shadow-md shadow-overlay relative flex-col hover:shadow-lg hover:shadow-primary">
      <motion.div variants={inview1} initial="initial" whileInView="visible" viewport={{once:false}} className="size-full relative">
      <h1 className='absolute bottom-0 text-2xl text-primary w-full h-2/4 lg:rounded-t-md md:rounded-t-md xs:rounded-none flex justify-center items-center bg-overlay text-bold cardHeight animate-card transition duration-65'>SWITCHGEAR SERVICES</h1>
      <Image src={switchgear} alt="Switchgear Services" className='w-full h-3/4 object-fit rounded' />
      </motion.div>
     <div className='lg:w-full lg:relative    xs:size-full p-5 bg-overlay '>
      <p className='   max-w-prose w-full  p-1 text-text-primary'>
       Without regular maintenance, minor issues can turn into extensive repairs. Rust, corrosion and stripped insulation are easy to find and replace with maintenance checks.
      Regular switchgear testing and maintenance can:<br/>
      Prevent failures: Running your machine until failure means that you only replace parts when the failure light comes on. You can avoid potential failures and extend your components’ useful life with routine testing.
      Save money: Regular maintenance can save you from paying for costly emergency repairs.
      Improve function: Properly functioning and tested equipment will increase the overall output of your electrical system by ensuring it’s working at peak performance.
      </p>
      <ol className='list-disc p-1 text-paragraph'>
      <li>Installation and Commissioning</li>
       <li>Factory Acceptance Testing</li>
       <li>Functional Test: Test for proper unit function</li>
       <li>Contact Resistance Test: Tests contact resistance between current conductors</li>
       <li>AC Insulation Test: Measure insulation between open contacts, line and ground</li>
       <li>Quality Checks</li>
       <li>Wiring check as per the IEC standard and standard code of protection</li>
      </ol>
       <p className='max-w-prose p-1 text-primary'> We also do relay configuration for ABB,SEL,SIEMENS and more...</p>
    </div>
    </motion.div>
    <div className="service lg:size-full md:size-full xs:h-auto flex  justify-between rounded shadow-md shadow-overlay relative flex-col">
      <motion.div variants={inview1} initial="initial" whileInView="visible" viewport={{once:false}} className="size-full relative">
      <h1 className='absolute bottom-0 text-2xl text-primary w-full h-2/4 lg:rounded-t-md md:rounded-t-md xs:rounded-none flex justify-center items-center bg-overlay text-bold cardHeight animate-card transition duration-65'>TRANSFORMER SERVICES</h1>
      <Image src={transformer} alt="Switchgear Services" className='size-full rounded object-fill' />
      </motion.div>
     <div className='lg:w-full lg:relative    xs:size-full p-5 bg-overlay '>
      <p className='   max-w-prose w-full  p-1 text-text-primary'>
       A power transformer is the most costly and essential equipment piece of equipment within an electrical substation. As such it is desirable to perform various preventative maintenance activities to ensure the transformer maintains a high level of performance and a long functional life.
      </p>
      <ol className='list-disc p-1 text-paragraph'>
      <li>Turn Ratio Test : Test carried out to ensure that the primary and secondary colis are aligned</li>
       <li>Insulation and Resistance Test : Test carried to determine the quality of insualtion within the Transformer</li>
       <li>Resistance Test</li>
       <li>Power Factor</li>
      </ol>
      <p className='max-w-prose p-1  text-primary'> more test are carried out with omicron test machine...</p>
    </div>
    </div>
    <div className=" service lg:size-full md:h-full xs:h-auto flex  justify-between rounded shadow-md shadow-overlay relative flex-col">
      <motion.div variants={inview1} initial="initial" whileInView="visible" viewport={{once:false}} className="size-full relative">
      <h1 className='absolute bottom-0 text-2xl text-primary w-full h-2/4 lg:rounded-t-md md:rounded-t-md xs:rounded-none flex justify-center items-center bg-overlay text-bold cardHeight animate-card transition duration-65'>TESTING USING OMICRON TOOLS</h1>
      <Image src={omicron} alt="Switchgear Services" className='w-full h-full rounded' />
      </motion.div>
      <div className='lg:w-full lg:relative    xs:size-full p-5 bg-overlay '>
      <p className='   max-w-prose w-full  p-1 text-text-primary'>
       Equipment testing and verification is important in both factory and substations, In substations all equipments has to be tested before the substation goes live. In Factory all equipments needs to be tested and verified for SITE ready. We carried out tests using Omicron and other testing equipment to ensure full fuctional and good condition equipment supplied to clients.<span className='text-primary text-bold capitalize'>We do this to meet all your specification, and Ensure you are setisfied before we leave SITE or before panels leaves the factory.</span>
      </p>
      <ol className='list-disc p-1 xs:text-paragraph'>
      <li>Secondary Injection to test parameter in the relay</li>
       <li>Current Transformer Testing</li>
       <li>Voltage Transformer Testing</li>
       <li>Ductor Testing</li>
      </ol>
       <p className='max-w-prose p-1  text-primary'>We do more test upon request</p>
    </div>
    </div>
    </motion.div>
    <div className='w-full flex flex-col gap-2 justify-center items-center '>
      <p className='leading-normal max-w-prose text-secondary text-xl p-2'>We offer wide range of services and always leave our clients with best quality and services. We work with the Following Companies. <br /> 
      <span className='text-bold text-primary text-2xl text-bold'>
         Hire us and enjoy the quality of work.</span></p>
      <motion.ul  className='w-full grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-2 place-items-center p-12 '>
       {
        images.map((image,index)=>(
            <motion.li variants={brands} initial="initial" whileInView="visible" key={index} viewport={{once:true}} custom={index} >
            <Image src={image} alt="" width={200} height={200} className='size-400' />
            </motion.li>
        ))
       }
      </motion.ul>
    </div>
    </div>
    </>
  )
}
