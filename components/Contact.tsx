import React from 'react'
import {motion} from 'framer-motion'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';

type Props = {
    contactInfo: PageInfo
}

type Inputs = {
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
}

function Contact({contactInfo: {phoneNumber, email, address}}: Props) {

    const {register, handleSubmit} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:${email}?cc=${data.email}&subject=${data.subject}&body=Hi Oriol, this is ${data.name}\n${data.message}.\n Contact me at: ${data.phone}`
    }
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>CONTACT</h3>
    <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center '>
                I am who{" "} 
                <motion.span  initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration: 1}}  className='underline  decoration-[#F7AB0A]'>
                you
                </motion.span> 
                {" "}are looking for {" "} 
                <motion.span  initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration: 1}}  className='underline  decoration-[#F7AB0A]'>
                LET'S TALK
                </motion.span>
        </h4>
        <div className='space-y-10'>
            <div className="flex items-center space-x-5 justify-center">
                <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className='text-2xl'>{phoneNumber}</p>    
            </div>
            <div className="flex items-center space-x-5 justify-center">
                <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className='text-2xl'>{email}</p>    
            </div>
            <div className="flex items-center space-x-5 justify-center">
                <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className='text-2xl'>{address}</p>    
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}  className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input {...register('name')} placeholder='Name' className="contactInput" type="text"/>
                <input {...register('email')} placeholder='Email' className="contactInput" type="email"/>
                <input {...register('phone')} placeholder='Phone' className="contactInput" type='text'/>
            </div>
            <input {...register('subject')} placeholder='Subject' className="contactInput" type="text"/>

            <textarea {...register('message')} placeholder='Message' className="contactInput"/>
            <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg
            '>Submit</button>
        </form>
    </div>
   </motion.div>
  )
}

export default Contact