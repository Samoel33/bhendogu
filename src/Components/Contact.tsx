"use client"
import React,{useRef} from "react"
import  {useForm}  from 'react-hook-form';
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/ReactToastify.css';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import logo from '../../public/logo1.svg'
type emailUs={
  name:String,
  email:String,
  subject:String,
  message:String
}

const notify=()=>toast.success("Email sent successfully, We will get back to you shortly",{
  position:"top-right",
  autoClose:5000,
  hideProgressBar:false,
  closeOnClick:true,
  pauseOnHover:true,
  draggable:true,
  progress:undefined

})
const notifyErr=()=>toast.error("There was an error sending your email",{
  position:"top-right",
  autoClose:5000,
  hideProgressBar:false,
  closeOnClick:true,
  pauseOnHover:true,
  draggable:true,
  progress:undefined

})


  
export default function Contact(){
  const {register,handleSubmit,reset,formState} = useForm<emailUs>()
  const {errors} =formState
     const form = useRef<HTMLFormElement>(null);
  const  sendEmail = async(data:emailUs)=>{
    if(!form.current) return
    reset();
    emailjs.sendForm(
  `service_h6np1aa`,`${process.env.template_id}`, form.current, `${process.env.public_key}`
  ).then((response)=>{
      notify()
    },(err)=>{
     notifyErr()
    });
  }
    return (
        <div className="lg:container w-full bg-gray-100 flex justify-center items-center lg:p-5 p-2 xs:mt-24 lg:mt-0 md:mt-0">
        <form
        ref={form}
          className=" lg:w-2/5 md:w-4/5 w-full flex flex-col gap-2 items-center justify-center  shadow-md rounded pt-5 pb-3 bg-gradient-to-tr from-primary from-70% to-secondary"
          onSubmit={handleSubmit(sendEmail)}
        >
          <Image src={logo} className="size-24" alt="logo"/>
          <h1 className="text-blue-700 font-bold text-lg text-center">
            Send Us Email for Enquiries/Quote
          </h1>
          <span>All field with <span className="error text-md">*</span> are required before submitting the form</span> 
          <div className="w-full flex flex-col gap-2 pl-3">
            <label htmlFor="name" className="pl-3 text-blue-700 font-bold">
              Name <span className="text-red-500 text-sm error">*</span> 
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: { value: true, message: "Name is required" },
                minLength: {
                  value: 3,
                  message: "Name should at least have more than 2 chars",
                },
              })}
              className="w-3/4 h-10 border rounded border-blue-700 focus:outline-yellow-200 pl-3 bg-gray-100 "
              placeholder="Enter Your Name"
            />
            <span className="text-red-500 text-sm error">
              {errors.name?.message}
            </span>
          </div>
          <div className="w-full flex flex-col gap-2 pl-3">
            <label htmlFor="email" className="pl-3 text-blue-700 font-bold">
              Email Address <span className="text-red-500 text-sm error">*</span> 
            </label>
            <input
              type="email"
              id="email"
              {...register("email",{
                pattern:{
                  value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message:'Enter a valid email address'
                },
                required:{
                  value:true,
                  message:'Email address is a required field'
                }
              })}
              className="w-3/4 h-10 border rounded border-blue-700 focus:outline-yellow-200 pl-3 "
              placeholder="Enter Your Email Address"
            />
            <span className="text-red-500 text-sm error">
              {errors.email?.message}
            </span>
          </div>
          <div className="w-full flex flex-col gap-2 pl-3">
            <label htmlFor="subject" className="pl-3 text-blue-700 font-bold">
              Subject <span className="text-red-500 text-sm error">*</span> 
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", {
                required: { value: true, message: "subject is required" },
                minLength: {
                  value: 3,
                  message: "Name should at least have more than 2 chars",
                },
              })}
              className="w-3/4 h-10 border rounded border-blue-700 focus:outline-yellow-200 pl-3 bg-gray-100 "
              placeholder="Write Subject"
            />
            <span className="text-red-500 text-sm error ">
              {errors.subject?.message}
            </span>
          </div>
          <div className="w-full flex flex-col gap-2 pl-3">
            <label htmlFor="message" className="pl-3 text-blue-700 font-bold ">
              Message <span className="text-red-500 text-sm error">*</span> 
            </label>
            <textarea
            id="message"
              {...register("message", {
                required: { value: true, message: "Message is required" },
                minLength: {
                  value: 3,
                  message:
                    "Message should at least have more than 2 characters",
                },
              })}
              className="w-3/4 h-40 pl-3 border rounded border-blue-700 focus:outline-yellow-200"
              placeholder="Write your Message"
            />
            <span className="text-red-500 text-sm error">
              {errors.message?.message}
            </span>
          </div>
          <div className="w-full flex justify-start items-center pl-3">
            <input type="submit" value="Send Email" className="bg-text-primary text-primary font-bold text-lg flex justify-center item-center rounded p-2 shadow-md cursor-pointer hover:shadow-lg hover:shadow-text-primary"/>

          </div>
        </form>
        
      </div>
    )
}
