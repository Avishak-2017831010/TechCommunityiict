import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Facultymembers = () => {

    const [teacher,setTeacher]=useState(null)

    useEffect(()=>{

        axios.get('http://localhost:3000/users').then(response=>{
            setTeacher(response.data)
        })

    }, )

   if(teacher){
    return (
        <div>
            <h1>{teacher.name}</h1>
        </div>
    )
}

    return(
        <div> </div>
    )

export default Facultymembers;
