import React from "react";
import './Projects.css'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import projectsData from "../projectsData";
import Project from "../Components/Project/Project";

function Projects(){
    return(
        <div className='projectsContainer'>
            <Header projects={true}/>
            <div className='projects'>
                <h1>Projects</h1>
                <p className='projectsIntroduction'>My personal projects are a way to keep track of my growth as a developer.</p>
                <div className='projectsInfoContainer'>
                    {projectsData.map((project,index)=><Project project={project} index={index}/>)}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Projects