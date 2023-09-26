import React from "react";
import './About.css'
import imgMe from '../Components/Images/me.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useInView } from 'react-hook-inview'
import AboutParagraph from "../Components/AboutParagraph";
import useChangePageTitle from "../Hooks/useChangePageTitle";

export default function About(){

    const [ref, inView] = useInView({unobserveOnEnter:true,threshold:1})
    const inViewStyle = inView?{transform:'rotateY(0deg)'}:{transform: 'rotateY(-90deg)'};
    useChangePageTitle("About")
    return(
    <div className='aboutContainer'>
        <div className='aboutContentContainer'>
          <h1 className='aboutMeTitle'>About Me</h1>
            <div className='aboutContentInner'>
                <div className='aboutMeAvatar'>
                    <img src={imgMe} className='imgMe' alt={'Alexandru Flicter'}/>
                    <h2>Alexandru Flicter</h2>
                    <p className='frontend'>Front-end Developer</p>
                    <div className='socialMediaAboutPage'>
                        {aboutLinks.map(({href,icon})=>(
                            <a href={href} target='_blank' rel="noreferrer" key={href}>{icon}</a>
                        ))}
                    </div>
                </div>
                <div className='aboutMeText'>
                    {aboutPharagraphs.map(p=><AboutParagraph text={p} key={p}/>)}
                    <div className='techsAbout' ref={ref} style={inViewStyle}>
                        {skills.map(skill=>(
                            <p key={skill}>⮞ {skill}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const styles={
    width:30,
    height:30,
    color:'black',
    borderRadius:'10px',
    padding:'2px',
    boxShadow:'0px 0px 6px 0px var(--mainColor)',
    '&:hover':{
        color:'var(--mainColor)',
        cursor:'pointer'
    }
}
const aboutLinks = [
    {
        href:"mailto:flicteralexandru@gmail.com",
        icon:<EmailIcon sx={styles}/>,
    },
    {
        href:"https://www.linkedin.com/in/alexandru-flicter-3b70ab220/",
        icon:<LinkedInIcon sx={styles}/>,
    },
    {
        href:"https://github.com/flicteram",
        icon:<GitHubIcon sx={styles}/>,
    },
    {
        href:"https://www.facebook.com/profile.php?id=100009972224077",
        icon:<FacebookIcon sx={styles}/>
    }
]

const aboutPharagraphs = [
    `I am a self taught developer based in Bucharest, Romania.
    I am a highly skilled Frontend Developer with three years of experience in the industry. 
    I've had the privilege to work for renowned companies such as Microsoft and Veelancing, 
    where I've made significant contributions to various projects, including the renowned Microsoft Teams, 
    and several medium-sized initiatives.`,
    `My journey in Frontend Development has equipped me with a deep understanding of web development technologies, frameworks, 
    and best practices. Crafting intuitive and visually appealing user interfaces has been my forte, enhancing the user experience 
    for the products and platforms I've been involved in.`,
    `One of my standout achievements was my involvement in the development of Microsoft Teams, 
    a widely used collaboration tool that has transformed the way people communicate and work together. 
    My contributions to this flagship project have likely left a lasting impact on millions of users worldwide.`,
    `My experience extends beyond tech giants like Microsoft. I've also lent my expertise to Veelancing, 
    where I played a vital role in executing and delivering various medium-sized projects. 
    My adaptability and versatility in handling different scales of projects 
    demonstrate my ability to excel in diverse work environments.`,
    `Here are a few technologies I feel most comfortable with: `
]

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "GraphQl",
    "Apollo",
    "React",
    "Next.js",
    "Firebase",
    "MaterialUI",
    "Redux",
    "Redux-Saga",
    "Semantic UI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io"
]