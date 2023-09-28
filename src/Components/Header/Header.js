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
    const toggleNav=()=>setIsOpen(prev=>!prev)
    return(
        <nav>
            <div className='navInner'>
                <span className='logo' onClick={()=>navigate('/')}>{'<alexdev/>'}</span>
                <div>
                    {routes.map(({route,routeName})=>(
                        <Link key={route+routeName} 
                        to={route} 
                        className={handleDisplayLocationClass(route)} 
                        aria-label={routeName}>
                            {routeName}
                        </Link>
                    ))}
                </div>

                <div className={isOpen?'hamburgerOpen':'hamburger'} onClick={toggleNav}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                
                <div className={isOpen?'navLowOpen':'navLowClosed'}>
                    {routes.map(({route,routeName})=>(
                        <Link 
                        to={route} 
                        className={"navItemLow"} 
                        aria-label={routeName} 
                        key={routeName+route}
                        onClick={toggleNav}>
                            {routeName}
                        </Link>
                    ))}
                </div>
            </div>           
        </nav>
    )
}

const routes = [
{route:"/", routeName:"Home"},
{route:"/projects", routeName:"Projects"},
{route:"/about", routeName:"About"}
]

export default Header