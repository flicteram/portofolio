import React,{useState} from "react";
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import {Link,useNavigate} from 'react-router-dom'


function Header({homeNav,projects,aboutNav}){
    const [isOpen,setIsOpen]=useState(false)
    const navigate = useNavigate()

    const styles = (theme)=>({
        [theme.breakpoints.down('sm')]:{
            display:'initial',
            cursor:'pointer',
            width:30,
            height:30
        },
        [theme.breakpoints.up('sm')]:{
            display:'none',
            cursor:'pointer',
        }
    })
    return(
        <nav>
            <div className='navInner'>
            <p className='logo' onClick={()=>navigate('/')}>{'<alexdev/>'}</p>
            <ul>
            <Link to={'/'}><li className={homeNav?'locationNav':'notLocationNav'}>Home</li></Link>
            <Link to={'/projects'}><li className={projects?'locationNav':'notLocationNav'}>Projects</li></Link>
            <Link to={'/about'}><li className={aboutNav?'locationNav':'notLocationNav'}>About</li></Link>
            </ul>
            {isOpen?
            <CloseIcon sx={{zIndex:1000,cursor:'pointer',width:30,height:30}} onClick={()=>setIsOpen(false)}/>:
            <MenuIcon sx={styles} onClick={()=>setIsOpen(true)}/>}

            <Drawer className='drawer'
            anchor={'top'}
            open={isOpen}
            onClose={()=>setIsOpen(false)}
            sx={{zIndex:'999'}}
            hideBackdrop={false}
            elevation={16}
            >
            <Link to={'/'} className='navItemLow'>Home</Link>
            <Link to={'/projects'} className='navItemLow'>Projects</Link>
            <Link to={'/about'} className='navItemLow'>About</Link>
            </Drawer>
            </div>           
        </nav>
    )
}

export default Header