import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup=()=>{
    const [name, setName] = useState()
    const [description,setDescription] = useState()
}
const handlesubmit=()=>{
    axios.post('http://localhost:3000/',{name,description})
}