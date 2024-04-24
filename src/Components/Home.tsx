'use client'
import React from 'react'
import Image from "next/image";
import mainImage from "../../public/images/transformer-768x796.jpg"
import Link from "next/link";
export default function HomeComponent() {
  return (
   <main >
      <div className="w-full h-3/5 relative">
    <div className="w-full h-screen bg-overlay transform transition duration-75 absolute z-2 animate-over-relay "></div>
    <div className="w-full h-screen z-1 object-fit">
      <Image src={mainImage} alt={"COVER"} className="h-full"/> 
    </div>
    <div className="lg:w-1/2 xs:w-full  flex  flex-col absolute top-40 lg:left-1/2 overflow-hidden xs:justify-center xs:left-0">
      <h1 className="text-primary w-1/4 font-bold text-6xl fadeInText transform transition duration-60 animate-heading-anim">Bhendogu</h1>
      <h2 className="text-primary text-4xl pt-2 transform transition duration-65 animate-heading-anim fadeInText  scroll-none">Technologies (Pty) Ltd</h2>
      <p className="leading-normal  pt-3  pl-1 lg:max-w-md-s md:max-w-md-s xs:max-w-prose fadeInText transform transition duration-60 animate-paragraph-anim text-text-primary">We offer wide range of services that meet your expectations. We are always availible upon your request. Services include but not limited to, Switchgear Installation, Switchgear Commissioning, Relay Logics, Power Transformer testing and many more...</p>
      <Link href="/Bhendogu/getAquote" className="bg-btn-primary w-1/4 h-8 rounded flex justify-center items-center mt-2 fadeInText transform transition duration-60 animate-paragraph-anim">Contact Us</Link>
    </div>
    </div>
   
    </main>
  )
}

