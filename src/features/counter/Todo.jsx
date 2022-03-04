import React,{ useState } from "react"
import styles from './todo.module.css';
import {  useDispatch } from 'react-redux';
import {
  add,
} from './TodoSlice';
import List from "./List";
import { IoIosAddCircleOutline } from 'react-icons/io';
import ModalComponent from "./ModalComponent";


const Todo = () => {
    const [input, setInput] = useState("");
    const [IsOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
   

    
   
    const openModal=()=> {
      setIsOpen(true);
    }


  return (
    <div  className="container" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100vw',height:'100vh',borderRadius:'5px',backgroundColor:'black'}}>
        <div>
          <div style={{display:"flex",backgroundColor:'white',borderRadius:'10px'}}>
            <input type="text" className={styles.input} style={{border:'none',backgroundColor:'white',color:'black',fontSize:'20px',display:'flex',justifyContent:'center',borderRadius:'10px',width:'700px'}} placeholder="enter item" onChange={(e)=>{setInput(e.target.value)}} />

            <IoIosAddCircleOutline style={{padding:'10px 10px',backgroundColor:'green',color:'white',borderRadius:'5px',border:'none'}} onClick={openModal}/>
            </div>
            <div style={{}}>
            <ModalComponent  IsOpen={IsOpen} setIsOpen={setIsOpen} input={input}/>
            </div>
            <List/>
        </div>
    </div>
  )
}

export default Todo