
"use client"
import Image from "next/image"
import Link from 'next/link'
import fullLogo from '../../public/bhendogu.svg'
import { FaRegEnvelope,FaPhone  } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import {animate, delay, motion} from "framer-motion";
import { useEffect, useState } from "react";
import { once } from "events";

const inviewAnim = {
  hidden:{
    opacity:0,
    y:20
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      type:"spring",
      delay:0.5    }
  }

}

export default function Footer(){
    const [isClient,setClient] = useState(false);
    useEffect(()=>{
      setClient(true);
    },[])
    const links=[
    {"id":0, "link":"getAquote"}, 
    {"id":3, "link":"Services"},
    {"id":2, "link":"About"},
    {"id":1, "link":"Projects"},
  ]
    return(
<footer className="w-full h-auto xs:flex-col lg:flex-col md:flex-row flex justify-center   mt-auto bg-secondary">
  <div className="w-full flex lg:flex-row md:flex-row xs:flex-col p-6 bg-text-primary" >
    <div className=" xs:w-full lg:w-1/2 flex flex-col  justify-center border-r-primary border-r-2 mr-2">
      <h1 className="text-bold text-4xl text-overlay">Unit 40 Westgate Flat</h1>
      <h2 className="text-bold text-2xl text-overlay">Mumford Street</h2>
      <h3 className="text-xl text-overlay">Vanderbijlpark C. W. 1</h3>
      <h4 className="text-md text-overlay">1911</h4>
    </div>
    <div className="w-full" suppressHydrationWarning={true}>
   {isClient && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.331648968243!2d27.819929079815438!3d-26.701849916885585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e945a222f6401b1%3A0x93e3f4f50220157b!2s40%20Mumford%20St%2C%20Vanderbijlpark%20C.%20W.%201%2C%20Vanderbijlpark%2C%201900!5e0!3m2!1sen!2sza!4v1712584138376!5m2!1sen!2sza" height="450" className="border-0 w-full"  loading="lazy" title="Bhendogu Location" ></iframe>}
    </div>
  </div>
    <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 border-t-2 border-t-secondary">
            <div className="clip lg:col-span-3 md:col-span-2 xs:col-span-1 justify-center items-center flex flex-col mb-4 bg-text-primary ">
            <motion.p variants={inviewAnim} initial="hidden" whileInView="animate" viewport={{once:true}}
             className="leading-normal  pt-3  pl-1 lg:max-w-md-s md:max-w-md-s xs:max-w-prose  text-secondary text-xl">We are dedicated to the provision of profassional services of high quality and customer setisfaction. To execue and efficiently manage projects.</motion.p>
            <div className="lg:w-3/5 xs:w-full lg:pl-14 md:pl-14 xs:pl-1 ">
            <Link href="/Bhendogu/getAquote" className="bg-primary w-40 h-8 rounded flex justify-center items-center mt-2  mb-2">Get A Quote</Link>
            </div>
            </div>
            <div className="w-full flex flex-col  gap-2 p-2">
            <h3 className="text-center text-primary text-bold border border-red">Contacts</h3>
             <Link href="/" className="">
            <Image src={fullLogo} height={20} width={200} alt="LOGO" />
          </Link>
        <div className="flex gap-2 justify-content items-center m-2 text-text-primary"><FaRegEnvelope className="text-text-primary text-xl"/>bheki.zwane@bhendogutechnologies.co.za</div>
        <div className="flex gap-2 justify-content items-center m-2 text-text-primary"><FaPhone className="text-text-primary text-xl"/>O83 575 4607 / 078 485 4178</div>
        <div className="flex gap-2 justify-content items-center m-2 text-text-primary"><FaFax className="text-text-primary text-xl"/>086 243 1204</div>
         </div>
        <div className="w-full flex flex-col  items-between gap-4 p-2">
            <h3 className="text-center text-primary text-bold border border-red">Navigation</h3>
            {
        links.map(({id,link})=>(
           <li
              key={id}
              className={"flex  justify-center items-center gap-6 cursor-pointer capitalize   w-full text-text-primary hover:text-text-primary hover:bg-primary hover:shadow-md hover:rounded "}
            >
              <Link href={`/Bhendogu/${link}`} className={ "text-md h-15 w-40 flex justify-center items-center"}>
                {link}
              </Link>
            </li>
        ))
      }
        </div>
    </div>
</footer>
    )
}
