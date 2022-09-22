import {Experience, Skill,PageInfo, Project, Social} from '../typings'

export const fetchSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/getSkills`)
    const skills: Skill[] = (await res.json()).skills;

    return skills;
}

export const fetchExperience = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/getExperience`)
    const experiences: Experience[] = (await res.json()).experience;
    
    return experiences;
}

export const fetchPageInfo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/getPageInfo`)
    const t = await res.json()
    const pageInfo: PageInfo = (t).pageInfo;

    return pageInfo;
}

export const fetchProjects = async() => { 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/getProjects`)
    const projects: Project[] = (await res.json()).projects;

    return projects;
}

export const fetchSocials = async() => { 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/getSocials`)
    const socials: Social[] = (await res.json()).socials;

    return socials;
}