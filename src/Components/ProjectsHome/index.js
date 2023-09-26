import { Link } from "react-router-dom"
export default function ProjectsHome({projectsData, title}){
  return(
    <div className='projectsHome'>
      <h2 className='recentProjects'>{title}</h2>
      {projectsData.slice(0, 2).map((project) =>
          <a className='projectHomeContainer' href={project.live} key={project.key} target='_blank' rel="noreferrer">
              <h3 className='projectNameHome'>{project.name}</h3>
              <p className='aboutProjectHome'>{project.aboutProject}</p>
              <div className='techsContainerHome'>
                  {project.techs.map((tech, index) => <p key={index}>{tech}</p>)}
              </div>
          </a>
      )}
      <Link to="/projects" className='moreProjectsHome'>More projects</Link>
    </div>
  )
}