import React, {useState, useEffect, useMemo} from "react";
import './Projects.css'
import projectsData from "../projectsData";
import workProjects from '../workProjects'
import Project from "../Components/Project/Project";
import useChangePageTitle from "../Hooks/useChangePageTitle";

function Projects(){
    const initialState = useMemo(()=>[...workProjects, ...projectsData], [])
    const [category,setCategory] = useState('all')
    const [projects, setProjects] = useState(initialState)
    useChangePageTitle("Projects")

    const handleCategoryChange = (value) =>{
        setCategory(value)
    }

    const handleActiveStyle = (value) => category === value ? 'activeCategory' : 'notActiveCategory'

    useEffect(()=>{
        switch(category){
            case "personal":
                setProjects(projectsData)
                break;
            case "work":
                setProjects(workProjects)
                break;
            default:
                setProjects(initialState)
                break;
        }
    },[category, initialState])

    return(
        <div className='projectsContainer'>
            <div className='projects'>
                <h1>Projects</h1>
                <p className='projectsIntroduction'>My personal projects and the projects I have contributed on are a way to keep track of my growth as a developer.</p>
                <div className='optionsContainer'>
                    <button onClick={()=>handleCategoryChange('all')} className={handleActiveStyle('all')}>All</button>
                    <button onClick={()=>handleCategoryChange('work')} className={handleActiveStyle('work')}>Work</button>
                    <button onClick={()=>handleCategoryChange('personal')} className={handleActiveStyle('personal')}>Personal</button>
                </div>
                <div className='projectsInfoContainer'>
                        {projects.map((project,index)=><Project key={index} project={project} index={index}/>)}
                </div>
            </div>
        </div>
    )
}

export default Projects