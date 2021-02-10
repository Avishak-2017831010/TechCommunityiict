import React from 'react'

export const Teachercard = (name,imagelink,email,position,phone,details) => {
    return (
        <div>

<div className="main-box">
      <div className="big-circle">
        <div className="small-circle"><img src={/></div>
      </div>
      <h2 className="heading-name">{name}</h2>
      <h3 className="heading-work">{position}</h3>
      <h4 className="heading-work">{details}</h4>
      <p className="info">
        {email},{phone}
      </p>
      <a href="#" className="follow_btn">Follow</a>
    </div>
            
        </div>
    )
}


