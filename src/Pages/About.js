import React from "react";
import './About.css'
import Header from "../Components/Header/Header";
import Footer from '../Components/Footer/Footer'
import imgMe from '../Components/Images/me.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useInView } from 'react-hook-inview'
import AboutParagraph from "../Components/AboutParagraph";

export default function About(){

    const [ref, inView] = useInView({unobserveOnEnter:true,threshold:1})
    const inViewStyle = inView?{transform:'rotateY(0deg)'}:{transform: 'rotateY(-90deg)'};

    return(
    <div className='aboutContainer'>
        <Header aboutNav={true}/>
            <div className='aboutContentContainer'>
                <h1 className='aboutMeTitle'>About Me</h1>
                <div className='aboutContentInner'>
                    <div className='aboutMeAvatar'>
                        <img src={imgMe} className='imgMe' alt={'Alexandru Flicter'}/>
                        <h2>Alexandru Flicter</h2>
                        <p className='frontend'>Front-end Developer</p>
                        <div className='socialMediaAboutPage'>
                            {aboutLinks.map(({href,icon})=>(
                                <a href={href} target='_blank' rel="noreferrer">{icon}</a>
                            ))}
                        </div>
                    </div>
                    <div className='aboutMeText'>
                        {aboutPharagraphs.map(p=><AboutParagraph text={p}/>)}
                        <div className='techsAbout' ref={ref} style={inViewStyle}>
                            {skills.map(skill=>(
                                <p>⮞ {skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
    )
}

const styles={
    width:30,
    height:30,
    color:'black',
    borderRadius:'10px',
    padding:'2px',
    boxShadow:'0px 0px 6px 0px rgb(0, 226, 170)',
    '&:hover':{
        color:'rgb(0, 226, 170)',
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
    I have experience designing and developing web applications,
    from simple landing pages to progressive web applications.`,
    `What I like about programming is that you have always something new to learn, you never know enough,
    the technology is evolving so fast and you have to keep up the phase, so, in my opinion everyday you are a better version of yourself.`,
    `I aspire towards a career that will allow me to help beginners learn, as I believe programming is not easy and it is
    a huge quality to know how to explaing complex terms with simple and concise words.`,
    `When I am not coding, I like to spend my time playing video games, hanging out with friends, watching movies, playing football 
    and hiking.`,
    `Here are a few technologies I have been working with recently: `
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