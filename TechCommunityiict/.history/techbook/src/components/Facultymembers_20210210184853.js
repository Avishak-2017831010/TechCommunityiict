import React, { useState, useEffect } from "react";
import './Facultymembers.css'
import Axios from "axios";


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
        <div className="teachercontainer">
        <div className="main-box">
      <div className="big-circle">
        <div className="small-circle"><img src={product.imglink}/></div>
      </div>
      <h2 className="heading-name">{product.name}</h2>
      <h3 className="heading-work">{product.position}</h3>
      <h2 className="heading-name">{product.email}</h2>
      <p className="info">
        {product.Phone}
      </p>
      <a href="#" className="follow_btn">{product.details}</a>
    </div>
    </div>
      ))
      
      } 
    </div>
  );
}

export default Facultymembers;
