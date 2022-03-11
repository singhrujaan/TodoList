import React from 'react'
import styles from './todo.module.css';
import { IoIosAddCircleOutline } from 'react-icons/io';
import {  useDispatch, useSelector } from 'react-redux';
import { useRef ,forwardRef } from 'react';
import {
    add,
  } from './TodoSlice';


const TextBox = forwardRef(({openModal,setInput,input},ref) => {
  // console.log("input",inputRef.current.value)
 const value = useSelector((state)=>state.todo.value);
    const dispatch = useDispatch();
    const _handleKeyDown=(e)=> {
        if (e.key === 'Enter') {
            dispatch(add({name:input}));  
            clearInput();   // inputRef.target.value="";
        

        }

    }
    const clearInput=()=>{
      ref.current.value="";

    }

    
   

  return (
    <div style={{display:'flex'}}>
        <input value={input}type="text" className={styles.input} style={{border:'none',backgroundColor:'white',color:'black',fontSize:'20px',display:'flex',justifyContent:'center',borderRadius:'10px',width:'700px'}} placeholder="enter item" onChange={(e)=>{setInput(e.target.value)}} onKeyDown={(e)=>_handleKeyDown(e)} 
        ref={ref}/>

        <IoIosAddCircleOutline style={{padding:'10px 10px',backgroundColor:'green',color:'white',borderRadius:'5px',border:'none'}} onClick={openModal}/>
    </div>
  )


})

export default TextBox;