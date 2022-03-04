import React from 'react'
import styles from './todo.module.css';
import { IoIosAddCircleOutline } from 'react-icons/io';
import {  useDispatch } from 'react-redux';
import {
    add,
  } from './TodoSlice';

const TextBox = ({openModal,setInput,input}) => {

    const dispatch = useDispatch();
    const _handleKeyDown=(e)=> {
        if (e.key === 'Enter') {
            dispatch(add(input));
        }

    }

  return (
    <div style={{display:'flex'}}>
        <input type="text" className={styles.input} style={{border:'none',backgroundColor:'white',color:'black',fontSize:'20px',display:'flex',justifyContent:'center',borderRadius:'10px',width:'700px'}} placeholder="enter item" onChange={(e)=>{setInput(e.target.value)}} onKeyDown={(e)=>_handleKeyDown(e)}/>

        <IoIosAddCircleOutline style={{padding:'10px 10px',backgroundColor:'green',color:'white',borderRadius:'5px',border:'none'}} onClick={openModal}/>
    </div>
  )
}

export default TextBox