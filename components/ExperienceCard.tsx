import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
import moment from 'moment'
type Props = {
    experience: Experience
}

function ExperienceCard({ experience }: Props) {

    const getTimeFrame = () => {
        const momentStart = moment(experience.dateStarted, "YYYY-MM-DD");
        let started = `Started At ${momentStart.format("DD/MM/YY")}`
        if(experience.isWorking){
            return `${started} - Present`
        }
        const momentEnd = moment(experience.dateEnded, "YYYY-MM-DD");
        let ended = `Ended At ${momentEnd.format("DD/MM/YY")}`	
        return `${started} - ${ended}`
    }
    return (
        <article className='flex flex-col 
        rounded-lg items-center space-y-7 h-max
        flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 
        opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden
        '>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src={urlFor(experience.companyImage).url()}
                alt={experience.company}

            />
            <div className='px-0 md:px-10 h-fit' >
                <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{experience.company}</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech Used */}
                    
                    {experience.technologies?.map(tech => (
                        <img className='h-10 w-10 rounded-full'
                        src={urlFor(tech.image).url()}
                        alt={tech.title}/>
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>{getTimeFrame()}</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {experience.points.map(point => (
                        <li>{point}</li>
                    ))}
                  
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard