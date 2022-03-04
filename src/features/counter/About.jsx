import React from 'react'
import {  useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
const About = () => {
    console.log("props",useParams)
    // console.log("index",index)
    const {index}= useParams();
    const value = useSelector((state)=>state.todo.value);
  return (
    <div style={{backgroundColor:'black',color:'white',fontSize:'30px',height:'100vh'}}>
        {/* {value} */}
       <div style={{backgroundColor: 'white',color:'black',margin:'auto',height:'auto',width:'auto'}}>
        <div>{value[index]}</div>
        </div>
    </div>
  )
}

export default About