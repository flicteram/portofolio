import React,{useState} from "react";
import './Header.css'
import {Link,useNavigate, useLocation} from 'react-router-dom'


function Header(){
    const [isOpen,setIsOpen]=useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const handleDisplayLocationClass = (locationToCheck) =>
    location.pathname===locationToCheck
    ?'locationNav'
    :'notLocationNav'
    const handleOpen=()=>isOpen?setIsOpen(false):setIsOpen(true)
    return(
        <nav>
            <div className='navInner'>
                <span className='logo' onClick={()=>navigate('/')}>{'<alexdev/>'}</span>
                <div>
                    <Link to={'/'} className={handleDisplayLocationClass("/")} aria-label="Home">Home</Link>
                    <Link to={'/projects'} className={handleDisplayLocationClass("/projects")} aria-label="Projects">Projects</Link>
                    <Link to={'/about'} className={handleDisplayLocationClass("/about")} aria-label="About">About</Link>
                </div>

                <div className={isOpen?'hamburgerOpen':'hamburger'} onClick={handleOpen}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                
                <div className={isOpen?'navLowOpen':'navLowClosed'}>
                    <Link to={'/'} className='navItemLow' aria-label="Home">Home</Link>
                    <Link to={'/projects'} className='navItemLow' aria-label="Projects">Projects</Link>
                    <Link to={'/about'} className='navItemLow' aria-label="About">About</Link>
                </div>
            </div>           
        </nav>
    )
}

export default Header