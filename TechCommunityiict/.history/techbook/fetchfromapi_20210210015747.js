import React from 'react'
import axios from 'axios'
import { useState } from 'react';

export default function teacherinformation(){
    const url="http://localhost:3000/";
    const [notes,getnotes]=useState('')
    const getAllinfo=()=>{
        axios.get(`${url}notes`)
    }
}