import React from "react";
import './Project.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { useInView } from 'react-hook-inview'

export default function Project({project}){
    
    const [ref, isVisible] = useInView({unobserveOnEnter:true,threshold:1})

    return (
    <div className={isVisible?'projectContainerAnim':'projectContainer'} ref={ref}>
        <img className={isVisible?'projectPictureAnim':'projectPicture'} src={project.picture} alt={project.name}/>
        <div className={isVisible?'projectInfoAnim':'projectInfo'}>
            <h3 className='projectName'>{project.name}</h3>
            <p className='projectAbout'>{project.aboutProject}</p>
            <div className='techsContainer'>
                {project.techs.map((tech,index)=><p key={index}>{tech}</p>)}
            </div>
            <div className='linksIcons'>
                {project.github&&
                    <a href={project.github} target='_blank' rel="noreferrer">
                        <GitHubIcon sx={{color:'black',width:'25px',height:'25px',":hover":{color:'var(--mainColor)',cursor:'pointer'}}}/>
                    </a>
                }
                <a href={project.live} target='_blank' rel="noreferrer">
                    <LanguageIcon sx={{color:'black',width:'25px',height:'25px',":hover":{color:'var(--mainColor)',cursor:'pointer'}}}/>
                </a>
            </div>
        </div>
    </div>
    )
}