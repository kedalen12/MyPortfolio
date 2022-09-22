import React from 'react'
import {motion} from 'framer-motion'
import { Skill } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    directionLeft?: boolean,
    skill: Skill
}
function Skill({directionLeft, skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
    <motion.img
     initial={{
        x: directionLeft ? -50 : 50,
        y: directionLeft ? -50 : 50,
        opacity: 0
    }}
    transition={{duration:.5}}
    whileInView={{opacity:1, x: 0, y: 0}}
    src={urlFor(skill.image).url()}
    className='border border-gray-500 border-dotted rounded-full object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale
        transtion duration-300 ease-in-out
    '
    />
    <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out
    group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0
    '>
        <div className='flex flex-col mx-auto items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>{skill.title}</p>
            <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
        </div>
    </div>

    </div>
  )
}

export default Skill