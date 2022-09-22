import React from 'react'

import {motion} from 'framer-motion'
function BackgroundCirlces() {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    animate={{
      opacity: [.1,.2,.4,.8,.1,1],
      scale: [1,2,2,3,1],
      borderRadius: ["20%", "20%", "50%", "80%", "20%"]
    }}
    transition={{
        duration: 2.5
    }}
    className='relative flex justify-center items-center'>
    <div className='absolute border border-[#333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
    <div className='absolute border border-[#333] rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
    <div className='absolute border border-[#333] rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
    <div className='absolute border border-[#F7AB0A] rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
    <div className='absolute border border-[#333] rounded-full h-[600px] w-[600px] mt-52 animate-ping'/>
    </motion.div>
  )
}

export default BackgroundCirlces