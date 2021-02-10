import React, { useState, useEffect } from "react";
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
    <div>

<div class="main-box">
      <div class="big-circle">
        <div class="small-circle"></div>
      </div>
      <h2 class="heading-name">John Doe</h2>
      <h3 class="heading-work">Web Developer</h3>
      <p class="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nemo
        sunt quae dolorem atque deserunt non 
      </p>
      <a href="#" class="follow_btn">Follow</a>
    </div>

        

       {teachers.map((product) => (
        <p key={product.userId}>{product.name}</p>
      ))} 
    </div>
  );
}

export default Facultymembers;
