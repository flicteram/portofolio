import React, {useState} from "react";
import './Projects.css'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import projectsData from "../projectsData";
import workProjects from '../workProjects'
import Project from "../Components/Project/Project";

function Projects(){
    const [category,setCategory] = useState('all')

    const handleCategoryChange = (value) =>{
        setCategory(value)
    }

    const handleActiveStyle = (value) => category === value ? 'activeCategory' : 'notActiveCategory'

    return(
        <div className='projectsContainer'>
            <Header projects={true}/>
            <div className='projects'>
                <h1>Projects</h1>
                <p className='projectsIntroduction'>My personal projects and the projects I have contributed on are a way to keep track of my growth as a developer.</p>
                <div className='optionsContainer'>
                    <button onClick={()=>handleCategoryChange('all')} className={handleActiveStyle('all')}>All</button>
                    <button onClick={()=>handleCategoryChange('work')} className={handleActiveStyle('work')}>Work</button>
                    <button onClick={()=>handleCategoryChange('personal')} className={handleActiveStyle('personal')}>Personal</button>
                </div>
                {(category === 'all' || category === 'work') && 
                    <div className='projectsInfoContainer'>
                        {workProjects.map((project,index)=><Project key={project.key} project={project} index={index}/>)}
                    </div>
                }
                {(category === 'all' || category === 'personal') && 
                    <div className='projectsInfoContainer'>
                        {projectsData.map((project,index)=><Project key={project.key} project={project} index={index}/>)}
                    </div>
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Projects