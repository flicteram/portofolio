import React from "react";
import './Home.css'
import projectsData from "../projectsData";
import workData from "../workProjects";
import pdf from '../Alexandru-Flicter-resume.pdf'
import Projects from "../Components/ProjectsHome"
import useChangePageTitle from "../Hooks/useChangePageTitle";

function Home() {
    useChangePageTitle("Home")
    return (
        <div className='homeContainer'>
            <div className='homeContainerInner'>
                <div className='introduction'>
                    <p className='heyThere'>HEY THERE,</p>
                    <h1 className='iAm'>I am <span className='alex'>Alex</span> 👋</h1>
                    <p className='aboutMeHome'>
                        I love building beautiful, accessible and useful applications to the world wide.
                        Thank you for stopping by! I am glad you are here!
                    </p>
                    <a href={pdf} target="_blank" className='resumeButton' rel="noreferrer">Resume</a>
                </div>
                <Projects
                projectsData={workData}
                title={"Work Projects"}
                />
                <Projects
                projectsData={projectsData}
                title={"Personal Projects"}
                />
            </div>
        </div>
    )
}

export default Home