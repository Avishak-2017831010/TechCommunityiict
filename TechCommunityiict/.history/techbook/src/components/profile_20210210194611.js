import react from 'react'
import { useStateValue } from '../StateProvider'
import Profiletop from './profiletop'
import { Avatar, IconButton } from '@material-ui/core'
import './profile.css'
import Contact from './Contact'



const Profile=()=>{

    const [{user},displatch]=useStateValue();

    return(

        
        //  <div className="profilesection">
        //     <Profiletop/>
        // </div>
        <div className="teachercontainer">
        <div className="main-box">
      <div className="big-circle">
        <div className="small-circle"><img src={product.imglink}/></div>
      </div>
      <h2 className="heading-name">Name</h2>
      <h3 className="heading-work">Department</h3>
      <h2 className="heading-name">Email</h2>
      <p className="info">
        {product.Phone}
      </p>
      <a href="#" className="follow_btn">{product.Details}</a>
    </div>
    </div>
        
       

    )

}

export default Profile;