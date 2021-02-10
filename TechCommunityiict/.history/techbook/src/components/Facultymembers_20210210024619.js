import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Facultymembers = () => {

    const [teacher,setTeacher]=useState(null)

    axios.get('http://localhost:3000/users').then(response=>{
        set
    })
    return (
        <div>
            
        </div>
    )
}

export default Facultymembers
