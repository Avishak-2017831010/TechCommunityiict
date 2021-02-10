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

      <div className="card">
        <img src=""/>


      </div>

        

      {teachers.map((product) => (
        <p key={product.userId}>{product.name}</p>
      ))} 
    </div>
  );
}

export default Facultymembers;
