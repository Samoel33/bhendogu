import type { Metadata } from 'next'
import AboutComponent from '@/Components/About'
import React from 'react'

export const metadata ={
  title: "About",
  description: "Bhendogu offer wide range of services ",
};
export default function About() {
  return (
    <AboutComponent/>
  )
}
