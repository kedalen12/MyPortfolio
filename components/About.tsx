import React from 'react'
import {motion} from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}
function About({pageInfo}:Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 
   justify-evenly  mx-auto  items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img
            src={urlFor(pageInfo?.backgroundImage).url()}
            initial={{
                x: -200
            }}
            whileInView={{x:0}}
            transition={{
                duration: 1
            }}
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 
            rounded-full object-cover md:rounded-lg
            md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className='space-y-10 px-0 md:px-5'>
            <h4 className='text-4xl font-semibold'>
                A <motion.span  initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration: 1}}  className='underline  decoration-[#F7AB0A]'>little</motion.span> backgorund
            </h4>
            {pageInfo?.backGroundInformation.split("[SKIP]").map((strs,i) => {
                            

                if(!strs.includes("|")) {
                    return <p key={i} className='text-base text-justify'> {strs} </p>
                }
                const getIndices = (searchStr:string, str:string) => {
                    var searchStrLen = searchStr.length;
                    if (searchStrLen == 0) {
                        return [];
                    }
                    var startIndex = 0, index, indices = [];
   
                    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
                        indices.push(index);
                        startIndex = index + searchStrLen;
                    }
                    return indices;
                }
                let fObject : any;
                let indices = getIndices('|', strs)
                const sStrins = []
                let cPosition = 0
                for(let i = 0; i < indices.length; i++){
                    sStrins.push(strs.substring(cPosition,indices[i]))
                    cPosition = indices[i]
                }

                return <p key={i}  className='text-base text-justify'>
                    {sStrins.map((s,j) => {
                        if(s.startsWith('|')){
                            return <span key={j}  className='font-semibold text-[#F7AB0A]'>{s.substring(1,s.length)}</span>
                        }
                        return s
                    })}
                </p>
              
                

            })}
        </div>

    </motion.div>
  )
}

export default About