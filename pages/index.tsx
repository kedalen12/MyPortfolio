import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import {ArrowUpCircleIcon} from '@heroicons/react/24/outline'
import {motion} from 'framer-motion'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperience, fetchPageInfo, fetchProjects, fetchSkills, fetchSocials } from '../utils/fetchHelper'

type Props = {
  pageInfo: PageInfo,
  experiences: Experience[],
  skills: Skill[],
  projects: Project[],
  socials: Social[]
}

const Home = ({pageInfo, experiences, skills, projects, socials}:Props) => { 
  return (
    <div className='bg-[rgb(36,36,36)]  text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar       scrollbar-thin
    scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
    '>
      <Head>
        <title>Oriol's Portfolio</title>
      </Head>

      <Header socials={socials}/>
      {/* Hero */}
      <section id="hero" className='snap-center'>
        <Hero pageInfo={pageInfo}/>
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      {/* Experience */}
      <section id="xp" className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>
      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>
      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
  </section>
      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <Contact contactInfo={pageInfo}/>
      </section>

      <Link href={"#hero"}>
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <motion.div 
        initial={{translateY: 0}}
        whileHover={{translateY: -20}}
        transition={{duration: .3, type: 'spring'}}

        className='flex items-center justify-center'>
               <ArrowUpCircleIcon className='w-10 h-10'/>
        </motion.div>
      </footer>
      </Link>
    </div>
  )
}

export default Home


export const getStaticProps :GetStaticProps<Props> = async () => {
  const pageInfo:PageInfo = await fetchPageInfo();
  const projects:Project[] = await fetchProjects();
  const skills:Skill[] = await fetchSkills();
  const experiences:Experience[] = await fetchExperience();
  const socials:Social[] = await fetchSocials();

  
  return {
    props: {
      pageInfo,
      skills,
      projects,
      experiences,
      socials
    },
    revalidate: 10
  }
}