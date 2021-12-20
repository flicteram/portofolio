import React from "react";
import './Projects.css'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import projectsData from "../projectsData";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function Projects(){

    return(
        <div className='projectsContainer'>
            <Header projects={true}/>
            <div className='projects'>
                <h1>Projects</h1>
                <p className='projectsIntroduction'>My personal projects are a way to keep track of my growth as a developer.</p>
                <div className='projectsInfoContainer'>
                    {projectsData.map((project,index)=>
                    <div className={index%2===0?'projectContainerLeft':'projectContainerRight'}>
                        <img className={index%2===0?'projectPictureLeft':'projectPictureRight'} src={project.picture} alt={project.name}/>
                        <div className={index%2===0?'projectInfoLeft':'projectInfoRight'}>
                            <h3 className={index%2===0?'projectNameLeft':'projectNameRight'}>{project.name}</h3>
                            <p className='projectAbout'>{project.aboutProject}</p>
                            <div className={index%2===0?'techsContainerLeft':'techsContainerRight'}>
                            {project.techs.map(tech=><p>{tech}</p>)}
                            </div>
                            <div className={index%2===0?'linksIconsLeft':'linksIconsRight'}>
                                <a href={project.github}><GitHubIcon sx={{color:'black',width:'25px',height:'25px',":hover":{color:'rgb(0, 255, 191)',cursor:'pointer'}}}/></a>
                                <a href={project.live}><LanguageIcon sx={{color:'black',width:'25px',height:'25px',marginLeft:'10px',":hover":{color:'rgb(0, 255, 191)',cursor:'pointer'}}}/></a>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Projects