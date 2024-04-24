"use client"
import React from 'react'
import {useTypewriter,Cursor} from "react-simple-typewriter"

export default function Typewriter() {
    const [text] = useTypewriter({
        words:["Value Our Customer","Take Pride In Our Work","Always leave site with a Happy Customer","Give Good Quality Work"],
        loop:true,
        typeSpeed:150,
        deleteSpeed:20
    })
  return (
    <div className='w-full'>
        <span className='text-primary text-2xl lg:pl-14 xs:pl-1'>
            We {' '}
            </span>
            <span className='text-overlay text-xl'>
                {text}
            </span>
            </div>
  )
}
