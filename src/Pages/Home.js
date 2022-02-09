import React from "react";
import Header from '../Components/Header/Header'
import './Home.css'
import projectsData from "../projectsData";
import Footer from "../Components/Footer/Footer";
import {useNavigate} from 'react-router-dom'
import pdf from '../Alexandru Flicter - resume.pdf'


function Home(){

    const navigate = useNavigate()

    return(
        <div className='homeContainer'>
            <Header homeNav={true} aboutNav={false} />
            <div className='homeContainerInner'>
                <div className='introduction'>
                    <p className='heyThere'>HEY THERE,</p>
                    <h1 className='iAm'>I am <span className='alex'>Alex</span> 👋</h1>
                    <p className='aboutMeHome'>I love building beautiful, accessible and useful applications to the world wide.
                        Thank you for stopping by! I am glad you are here!
                    </p>
                    <a href={pdf} download className='resumeButton'>Resume</a>
                </div>
                <div className='projectsHome'>
                    <h2 className='recentProjects'>Recent Projects</h2>
                    {projectsData.slice(0,2).map(project=>
                    <a className='projectHomeContainer' href={project.live} key={project.key}>
                        <h3 className='projectNameHome'>{project.name}</h3>
                        <p className='aboutProjectHome'>{project.aboutProject}</p>
                        <div className='techsContainerHome'>
                            {project.techs.map(tech=><p>{tech}</p>)}
                        </div>
                    </a>
                    )}
                    <p onClick={()=>navigate('/projects')} className='moreProjectsHome'>More projects</p>
                </div>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Home