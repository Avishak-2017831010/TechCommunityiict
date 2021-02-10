import React from 'react'
import { useStateValue } from '../StateProvider'
import { Avatar, IconButton } from '@material-ui/core'
import Contact from './Contact'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './profiletop.css'

const Profiletop = ()=>{

    const [{user},dispatch]=useStateValue();
    return(
        <div className="top_profile">
        <div></div><Avatar classname="profile_pic" src={user.photoURL}/>
        <h4 id="name">Name: <span id="username">{user.displayName}</span></h4>
        <Contact Icon={EmailIcon} Link={user.email}/>
        <Contact Icon={GitHubIcon} Link={user.email}/>
        <Contact Icon={LinkedInIcon} Link="Linked In"/>

        
        {/* <h3 id="email"><a href="mailto:{user.email}"><span id="useremail">{user.email}</span></a></h3> */}
        </div>
    )
    
}

export default Profiletop;