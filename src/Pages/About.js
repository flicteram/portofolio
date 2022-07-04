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


function About(){

    const [ref1, inView1] = useInView({unobserveOnEnter:true,threshold:1})
    const [ref2, inView2] = useInView({unobserveOnEnter:true,threshold:1})
    const [ref3, inView3] = useInView({unobserveOnEnter:true,threshold:1})
    const [ref4, inView4] = useInView({unobserveOnEnter:true,threshold:1})
    const [ref5, inView5] = useInView({unobserveOnEnter:true,threshold:1})
    const [ref6, inView6] = useInView({unobserveOnEnter:true,threshold:1})

    const handleInView1 = () => inView1?{transform:'rotateY(0deg)'}:{transform: 'rotateY(-90deg)'};
    const handleInView2 = () => inView2?{transform:'rotateY(0deg)'}:{transform: 'rotateY(-90deg)'};
    const handleInView3 = () => inView3?{transform:'rotateY(0deg)'}:{transform: 'rotateY(-90deg)'};
    const handleInView4 = () => inView4?{transform:'rotateY(0deg)'}:{transform: 'rotateY(-90deg)'};
    const handleInView5 = () => inView5?{transform:'rotateY(0deg)'}:{transform: 'rotateY(-90deg)'};
    const handleInView6 = () => inView6?{transform:'rotateY(0deg)'}:{transform: 'rotateY(-90deg)'};

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
                            <a href='mailto:flicteralexandru@gmail.com'><EmailIcon sx={styles}/></a>
                            <a href='https://www.linkedin.com/in/alexandru-flicter-3b70ab220/' target='_blank' rel="noreferrer"><LinkedInIcon sx={styles}/></a>
                            <a href='https://github.com/flicteram' target='_blank' rel="noreferrer"><GitHubIcon sx={styles}/></a>
                            <a href='https://www.facebook.com/profile.php?id=100009972224077' target='_blank' rel="noreferrer"><FacebookIcon sx={styles}/></a>
                        </div>
                    </div>
                    <div className='aboutMeText'>
                        <p ref={ref1} style={handleInView1()}>I am a self taught developer based in Bucharest, Romania.
                        I have experience designing and developing web applications,
                        from simple landing pages to progressive web applications.
                        </p>
                        <p ref={ref2} style={handleInView2()}>
                        What I like about programming is that you have always something new to learn, you never know enough,
                        the technology is evolving so fast and you have to keep up the phase, so, in my opinion everyday you are a better version of yourself.
                        </p>
                        <p ref={ref3} style={handleInView3()}>
                        I aspire towards a career that will allow me to help beginners learn, as I believe programming is not easy and it is
                        a huge quality to know how to explaing complex terms with simple and concise words.
                        </p>
                        <p ref={ref4} style={handleInView4()}>
                        When I am not coding, I like to spend my time playing video games, hanging out with friends, watching movies, playing football 
                        and hiking.    
                        </p>
                        <p ref={ref5} style={handleInView5()}>
                        Here are a few technologies I have been working with recently:   
                        </p>
                        <div className='techsAbout' ref={ref6} style={handleInView6()}>
                            <p>⮞ HTML</p>
                            <p>⮞ CSS</p>
                            <p>⮞ JavaScript</p>
                            <p>⮞ React</p>
                            <p>⮞ Next.js</p>
                            <p>⮞ Firebase</p>
                            <p>⮞ MaterialUI</p>
                            <p>⮞ Redux</p>
                            <p>⮞ Redux-Saga</p>
                            <p>⮞ Semantic UI</p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
    )
}

export default About