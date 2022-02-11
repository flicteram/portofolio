import React,{useState} from "react";
import './Header.css'
import {Link,useNavigate} from 'react-router-dom'


function Header({homeNav,projects,aboutNav}){
    const [isOpen,setIsOpen]=useState(false)
    const navigate = useNavigate()

    const handleOpen=()=>isOpen?setIsOpen(false):setIsOpen(true)
    return(
        <nav>
            <div className='navInner'>
            <p className='logo' onClick={()=>navigate('/')}>{'<alexdev/>'}</p>
            <ul>
                <Link to={'/'}><li className={homeNav?'locationNav':'notLocationNav'}>Home</li></Link>
                <Link to={'/projects'}><li className={projects?'locationNav':'notLocationNav'}>Projects</li></Link>
                <Link to={'/about'}><li className={aboutNav?'locationNav':'notLocationNav'}>About</li></Link>
            </ul>

            <div className={isOpen?'hamburgerOpen':'hamburger'} onClick={handleOpen}>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
            </div>
            
            <div className={isOpen?'navLowOpen':'navLowClosed'}>
                <Link to={'/'} className='navItemLow'>Home</Link>
                <Link to={'/projects'} className='navItemLow'>Projects</Link>
                <Link to={'/about'} className='navItemLow'>About</Link>
            </div>

            </div>           
        </nav>
    )
}

export default Header