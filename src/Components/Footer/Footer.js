import React from "react";
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer(){

    const iconsStyle={
        width:30,
        height:30,
        color:'black',
        padding:'2px',
        boxShadow:'0px 0px 3px 1px black',
        borderRadius:'5px',
        backgroundColor:'white',
        '&:hover':{
            color:'rgb(0, 226, 170)',
            cursor:'pointer'
        }
    }

    return(
        <footer>
            <div className='getInTouchContainer'>
                <h2 className='getInTouch'>Get In Touch!</h2>
                <p className='getInTouchText'>I would be happy to hear from you! Do not hesitate to send me an email.</p>
                <a href='mailto:flicteralexandru@gmail.com'><button className='sayHiButton'>Say Hi!</button></a>
            </div>

            <div className='socialMediaContainer'>
                <a href='mailto:flicteralexandru@gmail.com'><EmailIcon sx={iconsStyle}/></a>
                <a href='https://www.linkedin.com/in/alexandru-flicter-3b70ab220/'><LinkedInIcon sx={iconsStyle}/></a>
                <a href='https://github.com/flicteram'><GitHubIcon sx={iconsStyle}/></a>
                <a href='https://www.facebook.com/profile.php?id=100009972224077'><FacebookIcon sx={iconsStyle}/></a>
            </div>
            
        </footer>
    )
}

export default Footer