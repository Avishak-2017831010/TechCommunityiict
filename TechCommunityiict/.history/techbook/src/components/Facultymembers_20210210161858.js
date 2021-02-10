import React, { useState, useEffect } from "react";
import './Facultymembers.css'
import Axios from "axios";
import Teachercard from './Teachercard'

function Facultymembers() {
  const [teachers, setteachers] = useState([]);

  const fetchteachers = async () => {
    const { data } = await Axios.get(
      "https://60238a7b6bf3e6001766b33f.mockapi.io/iictteachersinfo"
    );
    const teachers = data;
    setteachers(teachers);
    console.log(teachers);
  };

  useEffect(() => {
    fetchteachers();
  }, []);

  return (

    
    
    <div className="facultymembers">
       
       {teachers.map((product) => (
         
        // <p key={product.userId}>{product.name}</p>

        <div className="main-box">
      <div className="big-circle">
        <div className="small-circle"></div>
      </div>
      <h2 className="heading-name">{product.userId}{product.name}</h2>
      <h3 className="heading-work">Web Developer</h3>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nemo
        sunt quae dolorem atque deserunt non 
      </p>
      <a href="#" className="follow_btn">Follow</a>
    </div>
      ))
      
      } 
    </div>
  );
}

export default Facultymembers;
