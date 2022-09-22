
import { url } from 'inspector'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCirlces from './BackgroundCirlces'
type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo }: Props) {

    const [text, count] = useTypewriter({
        words: ["Passion", "Dedication", "Reliability", "Engagement"],
        loop: true,
        delaySpeed: 1000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>

            <BackgroundCirlces />
            <img
                className='relative rounded-full h-48 w-48 object-cover'
                src={urlFor(pageInfo?.profilePic).url()}
                alt="Oriol Pujol Garcia" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>FULL STACK DEVELOPER</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3 opacity-50'>import</span>
                    <span className='mr-0 text-[#F7AB0A]'> {"{"+text+"}"} </span>
                    <Cursor cursorColor='#F7AB0A'/>
                    <span className='mr-3 opacity-50'>from "ORIOL"</span>
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#xp">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
    </Link>
                </div>
            </div>
        </div>

    )
}