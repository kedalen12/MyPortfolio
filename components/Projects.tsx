import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Link from 'next/link'
type Props = {
    projects: Project[]
}
export default function Projects({projects}: Props) {

  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    >
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>PROJECTS</h3>
   
        <div className='relative w-full text-center justify-center  flex overflow-hidden
        '>
            <Link href="https://github.com/kedalen12">
          <h4 className='text-5xl font-semibold text-center cursor-pointer'>
                            <>
                              <span className='underline transition-all delay-200 text-center decoration-[#F7AB0A]/20 hover:decoration-[#F7AB0A]'>IN PROGRESS... You can check my github</span>
                            </>
                        </h4>
                        </Link>
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}