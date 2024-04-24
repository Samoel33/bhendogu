
import Image from 'next/image';
import Link from 'next/link';
import React,{useEffect} from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import switchgear from '../../public/images/SWITCHGEAR.jpg'
import transformer from '../../public/images/transformer.jpg'
import omicron from '../../public/images/a-reOMICRON.jpg'
import logo from '../../public/logo1.svg'

// const getTestimonial = async()=>{
 
//   try{
//     const res =await fetch("http://localhost:3000/api/Testimonials",{cache:"no-store"})
//     if(!res.ok) {return await res.json()}
//     else{
//       console.log(res)
//         return await res.json();
//       }
  

//   }catch(err){
//     console.log(err);
//   }
// }
export default async function Gallery() {
  // const results= await getTestimonial(); 
  
  return (
   <div>GALLERY</div>
    
  )
}
