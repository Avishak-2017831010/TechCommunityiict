import react from 'react'
import { useStateValue } from '../StateProvider'
import Profiletop from './profiletop'
import { Avatar, IconButton } from '@material-ui/core'
import './profile.css'
import Contact from './Contact'



const Profile=()=>{

    const [{user},displatch]=useStateValue();

    return(

        
          <div className="profilesection">
        //     <Profiletop/>
        // </div>
       
        
       

    )

}

export default Profile;