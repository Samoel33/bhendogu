"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import {
  FaAlignRight,
  FaTimes,
} from "react-icons/fa";
import {
 
  FaUser,
  FaMessage,
} from "react-icons/fa6";
import { MdOutlineHome,MdElectricalServices } from "react-icons/md";
import { usePathname } from "next/navigation";


export default function Navigation() {
  const [isClicked,setClicked]=useState(false)
  const links=[
    {"id":3, "link":"Services"},
    {"id":2, "link":"About"},
  ]
   const toggleburger=()=>{
    (!isClicked)? setClicked(true):setClicked(false)
  }
 const pathName = usePathname();
 const  isActive = (path:string)=>{
  pathName.split('/')
  if(pathName==='/') return pathName===path
  return pathName.split('/')[2]=== path
 }
  return (
    <>
    <nav className='w-full bg-secondary h-20 flex justify-between lg:sticky xs:fixed top-0 right-0 z-10'>
      <div className="h-full flex justify-start ">
          <Link href="/" className="">
            <img src="bhendogu.svg" height={20} width={200} alt="LOGO" />
          </Link>
        </div>
      <ul className="lg:flex sm:hidden md:hidden xs:hidden w-1/2 justify-between navigation">
        <li
            key="home"
              className={isActive('/') ? "active  px-4 rounded flex justify-center items-center cursor-pointer capitalize py-6  w-40 text-text-primary text-bold text-2xl":"px-4 flex justify-center items-center gap-2 cursor-pointer capitalize py-6 text-text-primary  w-40 text-white hover:text-yellow-300 hover:shadow-md hover:rounde hover:text-2xl"}
          >
            <Link href={`/`} onClick={() => setClicked(false)} className={"text-md h-full w-full flex justify-center items-center"}> Home</Link>
          </li>
      {
        links.map(({id,link})=>(
           <li
              key={id}
              className={isActive(link)? "active    flex justify-center items-center  cursor-pointer capitalize   w-40 text-text-primary text-bold text-2xl rounded" :"flex justify-center items-center gap-2 cursor-pointer capitalize   w-40 text-text-primary hover:text-text-primary hover:bg-primary hover:shadow-md hover:rounde hover:text-2xl"}
            >
              <Link href={`/Bhendogu/${link}`} className={ "text-md h-20 w-40 flex justify-center items-center z-3 absolute"}>
                {link}
              </Link>
            </li>
        ))
      }
      <li className={isActive('getQuote')? "activeQute  flex justify-center items-center gap-2 cursor-pointer capitalize py-6  w-44 text-primary text-2xl" :"btn-primary bg-text-primary w-44 text-blue-600 text-center flex justify-center gap-5 items-center h-20"}>
      <Link
            href="/Bhendogu/getAquote"
            className="text-md h-full w-full flex justify-center items-center"
            onClick={() => setClicked(false)}
          >
            <FaMessage className="mr-2 text-2xl text-primary" /> Get A Quote
          </Link>
      </li>
      </ul>
      {isClicked ? (
          <button className="w-20 lg:hidden" onClick={toggleburger}>
            <FaTimes className="text-4xl text-primary" />
          </button>
        ) : (
          <button className="w-20 lg:hidden" onClick={toggleburger}>
            <FaAlignRight className="text-4xl text-text-primary" />
          </button>
        )}
    </nav>
    {isClicked && (
        <ul
          className={
            isClicked === true
              ? `lg:hidden  navigation h-screen  w-full transform transition duration-75  flex flex-col gap-20 items-center bg-secondary shadow-sm animate-open-nav z-20 fixed  mt-20`
              : `lg:hidden  navigation h-screen  w-full animate-close-nav transform transition duration-75 delay-30 gap-10  `
          }
        >
         <li
            key="home"
              className={isActive('/') ? "active  px-4 rounded flex justify-center items-center cursor-pointer capitalize py-6  w-40 text-text-primary text-bold text-2xl":"px-4 flex justify-center items-center gap-2 cursor-pointer capitalize py-6 text-text-primary  w-40 text-white hover:text-yellow-300 hover:shadow-md hover:rounde hover:text-2xl"}
          >
            <Link href={`/`} onClick={() => setClicked(false)} className={"text-md h-full w-full flex justify-center items-center"}> Home</Link>
          </li>
        {
        links.map(({id,link})=>(
           <li
              key={id}
              onClick={() => setClicked(false)} 
              className={isActive(link)? "active    flex justify-center items-center  cursor-pointer capitalize   w-40 text-text-primary text-bold text-2xl rounded" :"flex justify-center items-center gap-2 cursor-pointer capitalize   w-40 text-text-primary hover:text-text-primary hover:bg-primary hover:shadow-md hover:rounde hover:text-2xl"}
            >
              <Link href={`/Bhendogu/${link}`} className={ "text-md h-20 w-40 flex justify-center items-center z-3 absolute"}>
                {link}
              </Link>
            </li>
        ))
      }
         <li className={isActive('getQuote')? "activeQute  flex justify-center items-center gap-2 cursor-pointer capitalize py-6  w-44 text-primary text-2xl" :"btn-primary bg-text-primary w-44 text-blue-600 text-center flex justify-center gap-5 items-center h-20"}>
      <Link
            href="/Bhendogu/getAquote"
            className="text-md h-full w-full flex justify-center items-center"
            onClick={() => setClicked(false)}
          >
            <FaMessage className="mr-2 text-2xl text-primary" /> Get A Quote
          </Link>
      </li>
        </ul>
      )}
      </>
  )
}
