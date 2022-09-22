interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: string;
    asset: {
        _ref: string;
        _type: "reference"
    }
}

export interface Social extends SanityBody { 
    link:string,
    title:string
}

export interface PageInfo extends SanityBody { 
    address:string,
    backGroundInformation:string,
    backgroundImage:Image,
    email:string,
    name:string,
    phoneNumber:string,
    profilePic:Image
}

export interface Skill extends SanityBody { 
    image: Image,
    progress: number,
    title:string
}


export interface Experience extends SanityBody {
    company:string,
    companyImage:Image,
    jobTitle:string,
    isWorking:boolean,
    dateEnded: Date,
    dateStarted: Date,
    points: string[]
    technologies: Skill[]
}

export interface Project extends SanityBody { 
    image: Image,
    summary:string,
    technologies: Skill[],
    title: string,
    link: string
}