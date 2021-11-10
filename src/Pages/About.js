import React from "react";
import './About.css'
import Header from "../Components/Header/Header";
import Footer from '../Components/Footer/Footer'
import imgMe from '../Components/Images/me.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import Fade from '@mui/material/Fade';


function About(){

    const styles={
        width:30,
        height:30,
        color:'black',
        borderRadius:'10px',
        padding:'2px',
        boxShadow:'0px 0px 6px 0px rgb(0, 255, 191)',
        '&:hover':{
            color:'rgb(0, 255, 191)',
            cursor:'pointer'
        }
    }
    return(
        <Fade in={true} timeout={500}>
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
                            <a href='mailto:flicteralexandru@gmail.com'><EmailIcon sx={styles}/></a>
                            <a href='https://www.linkedin.com/in/alexandru-flicter-3b70ab220/'><LinkedInIcon sx={styles}/></a>
                            <a href='https://github.com/flicteram'><GitHubIcon sx={styles}/></a>
                            <a href='https://www.facebook.com/profile.php?id=100009972224077'><FacebookIcon sx={styles}/></a>
                        </div>
                    </div>
                    <div className='aboutMeText'>
                        <p>I am a self taught developer based in Bucharest, Romania.
                        I have experience designing and developing web applications,
                        from simple landing pages to progressive web applications.
                        </p>
                        <p>
                        What I like about programming is that you have always something new to learn, you never know enough,
                        the technology is evolving so fast and you have to keep up the phase, so, in my opinion everyday you are a better version of yourself.
                        </p>
                        <p>
                        I aspire towards a career that will allow me to help beginners learn, as I believe programming is not easy and it is
                        a huge quality to know how to explaing complex terms with simple and concise words.
                        </p>
                        <p>
                        When I am not coding, I like to spend my time playing video games, hanging out with friends, watching movies, playing football 
                        and hiking.    
                        </p>
                        <p>
                        Here are a few technologies I have been working with recently:   
                        </p>
                        <div className='techsAbout'>
                        <p>- HTML</p>
                        <p>- CSS</p>
                        <p>- JavaScript</p>
                        <p>- React</p>
                        <p>- Firebase</p>
                        <p>- MaterialUI</p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
    </Fade>)
}

export default About