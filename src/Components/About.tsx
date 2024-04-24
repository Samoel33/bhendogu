"use client"
import React,{useRef,useEffect} from 'react'
import Contact from '@/Components/Contact';
import { FaHandshake,FaHandHoldingHeart,FaAward,FaArrowsToEye  } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import {useInView} from "react-intersection-observer";
import { motion, easeInOut} from "framer-motion";

const fade={
  initial:{
    opacity:0,
    translateY:-20
  },
  animate:{
    opacity:1,
    translateY:0,
    transition:{
      type:"spring",
      delay:0.4,
      duration:0.8
    }
  }
}
const inview={
  initial:{
    opacity:0,
    y:-20
  },
  visible:{
    opacity:1,
    y:0,
    transition:{
      duration:1,
      type:'spring'
    }
  }
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
export default function AboutComponent() {
 const [ref,inView,entry]=useInView({
  threshold: 0.6
 })

  return (
    <>
   <motion.section variants={fade} initial="initial" whileInView="animate" className="bg-gray-100   shadow-2xl lg:mx-auto md:mx-24 xs:mx-1 lg:w-1/2 xs:w-full">
      <h1 className="lg:mt-1 xs:mt-24 font-bold xs:text-4xl text-blue-700 capitalize flex justify-center pr-20 lg:text-6xl mb-5 pt-5 text-primary">
        About Us
      </h1>
      <div className="grid grid-cols-1 place-items-center">
        <div className="flex flex-col gap-2 p-2">
          <h3 className="font-bold text-blue-700 text-2xl p-3 lg:text-4xl text-secondary">
            Company Introduction
          </h3>
          <p className="leading-normal max-w-prose p-3 lg:max-w-lg-s md:max-w-md-s">
           Bendogu Technologies &#40;Pty&#41; Ltd is a dynamic black owne level 1 &#40;BBBEE&#41; Electrical Engineering company which was found in 2014 by a young South African Eterprenuer who has a vast experience in design,
           installation, commissioning, and project management of electrical infrastructure such as protection and substation automation  systems. We work hard to warn and maintain our clients&apos; trust and confidence.
           <br></br>
           <br />
           We consider ourselves as an integral part of our clients&apos; initiatives. Our services extend beyond normal profassional parameters because of the adopted participation and hands-on approach.
           <br />
           <br />
           The comapany believes in enhencing the experience of key personnel through the structured empowerment programs and developing a team of specialist committed to quality and service in all aspect of project engineering and management.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2 w-full">
          <h3 className="font-bold tet-blue-700 text-2xl p-3  lg:text-4xl text-primary">
            Company Mission Statement 
          </h3>
          <motion.ul ref={ref} variants={inview} initial="initial" animate={inView ?"visible": "initial"} className="leading-normal max-w-prose p-3 lg:max-w-lg-s md:max-w-md-s">
           <motion.li initial="initial" whileInView="visible" className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-primary mb-1 '>The company is dedicated to provision of profassional services of high quality and customer setisfaction.</motion.li>
           <motion.li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-overlay mb-1 '>To provide the best engineering solutions to our customers.</motion.li>
           <motion.li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-primary mb-1 '>To execute and efficiently manage projects.</motion.li>
           <motion.li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-overlay mb-1 '>To bring positive change to our community.</motion.li>
           <motion.li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-primary mb-1 '>To empower previously disadvantaged individuals through transfer of knowledge and skills.</motion.li>
           <motion.li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-overlay mb-1 '>Development of skills and expertise through education and on-job training.</motion.li>
          </motion.ul>
        </div>
        <div className="flex flex-col gap-2 p-2 w-full">
          <h3 className="font-bold text-blue-700 text-2xl p-3 lg:text-4xl text-secondary">
            Company Vision
          </h3>
          <motion.p  variants={inview1} initial="initial" whileInView="visible" viewport={{once:true}} className="leading-normal max-w-prose p-3 lg:max-w-lg-s md:max-w-md-s">
            To position and grow Bhendogu Technologies (Pty) Ltd to become one of the leading and preferred electrical engineering provider and to provide turnkey solution to our clients by forming strategic partnership with companies in the same industry. To provide excellent, innovative and fast services to our clients.
          </motion.p>
        </div>
        <div className="flex flex-col border-primary border gap-2 p-2 w-full ">
          <h3 className="font-bold text-blue-700 text-2xl p-3 lg:text-4xl text-primary">
            Company Values
          </h3>
             <ul className="leading-normal max-w-prose p-3 lg:max-w-lg-s md:max-w-md-s">
           <motion.li initial={{scale:1}} whileHover={{scale:1.08, transition:{duration:0.3}}} className='list-disc shadow-lg h-10 flex items-center p-2 border-l-4 border-l-primary mb-1 '><FaHandshake className='text-2xl text-primary mr-2'/>Respect</motion.li>
           <motion.li initial={{scale:1}} whileHover={{scale:1.08, transition:{duration:0.3}}} className='list-disc shadow-lg h-10 flex items-center p-2 border-l-4 border-l-overlay mb-1 '><FaHandHoldingHeart className='text-2xl text-secondary mr-2'/>Honesty</motion.li>
           <motion.li initial={{scale:1}} whileHover={{scale:1.08, transition:{duration:0.3}}} className='list-disc shadow-lg h-10 flex items-center p-2 border-l-4 border-l-primary mb-1 '><FaAward className='text-2xl text-primary mr-2'/>Exellence</motion.li>
           <motion.li initial={{scale:1}} whileHover={{scale:1.08, transition:{duration:0.3}}} className='list-disc shadow-lg h-10 flex items-center p-2 border-l-4 border-l-overlay mb-1 '><FaArrowsToEye className='text-2xl text-secondary mr-2'/>Customer Focus</motion.li>
           <motion.li initial={{scale:1}} whileHover={{scale:1.08, transition:{duration:0.3}}} className='list-disc shadow-lg h-10 flex items-center p-2 border-l-4 border-l-primary mb-1 '><AiFillSafetyCertificate className='text-2xl text-primary mr-2'/>Safety</motion.li>
          
          </ul>
         
        </div>
        <div className="flex flex-col gap-2 p-2 w-full">
          <h3 className="font-bold text-blue-700 text-2xl p-3  lg:text-4xl text-primary">
            Company Services Offered
          </h3>
          <motion.ul variants={inview1} initial="initial" whileInView="visible" viewport={{once:true}} className="leading-normal max-w-prose p-3 lg:max-w-lg-s md:max-w-md-s">
           <li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-primary mb-1 '>Wiring of Switchgear/protection and Control Panels</li>
           <li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-overlay mb-1 '>Point to point/Ring out on Switchgear/protection and Control panels</li>
           <li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-primary mb-1 '>Programming and Testing of Various type of Relays</li>
           <li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-overlay mb-1 '>Factory Acceptance Testing (FAT) Electrical Protection Schemes</li>
           <li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-primary mb-1 '>Site Acceptance Testing (SAT) Of Electrical Protection Schemes</li>
           <li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-overlay mb-1 '>Installation Of Electrical Switchgear Panels</li>
           <li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-primary mb-1 '>Preventative or Scheduled Maintenance on HV/MV Switchgear</li>
           <li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-overlay mb-1 '>Investigations and Analysis Of Network Disturbance</li>
           <li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-primary mb-1 '>Power Systems Protection</li>
           <li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-overlay mb-1 '>SCADA Systems</li>
           <li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-primary mb-1 '>Telecoms</li>
           <li className='list-disc shadow-lg  flex items-center p-2 border-l-4 border-l-overlay mb-1 '>Metering</li>
          </motion.ul>
        </div>
      </div>
    </motion.section>
    <Contact/>
    </>
  )
  
}