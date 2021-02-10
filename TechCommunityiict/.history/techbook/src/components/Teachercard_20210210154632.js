import React from 'react'

export const Teachercard = (name,imagelink,email,position,phone,details) => {
    return (
        <div>

<div className="main-box">
      <div className="big-circle">
        <div className="small-circle"></div>
      </div>
      <h2 className="heading-name">{name}</h2>
      <h3 className="heading-work">{position}</h3>
      
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nemo
        sunt quae dolorem atque deserunt non 
      </p>
      <a href="#" className="follow_btn">Follow</a>
    </div>
            
        </div>
    )
}


