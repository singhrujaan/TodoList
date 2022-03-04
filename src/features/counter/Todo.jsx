import React,{ useState } from "react"
import styles from './todo.module.css';
import {  useDispatch } from 'react-redux';
import {
  add,
} from './TodoSlice';
import List from "./List";
import { IoIosAddCircleOutline } from 'react-icons/io';
import ModalComponent from "./ModalComponent";
import TextBox from "./TextBox";
import Popup from "./Popup";


const Todo = () => {
    const [input, setInput] = useState("");
    const [IsOpen, setIsOpen] = useState(false);
    const [Loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    // const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = useState(0);

    
   
    const openModal=()=> {
       (input.length<1)?
        alert('field required')
      :
      setIsOpen(true);

     
    }


    const noOfChecked=(checked)=>{
      return(checked)
    }

  return (
    
      <div  className="container" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:'5px',height:'100vh',width:'100vw',backgroundColor:'black'}}>
        <div style={{color:'white'}}>
             

              <div style={{display:"flex",backgroundColor:'white',borderRadius:'10px'}}>
                <TextBox input={input} setInput={setInput} openModal={openModal}/>
                </div>

                <div>
                <ModalComponent Loading={Loading}  setLoading={setLoading} IsOpen={IsOpen} setIsOpen={setIsOpen} input={input}/>
                </div>

                <List 
                // totalSelectedCheckboxes={totalSelectedCheckboxes} setTotalSelectedCheckboxes={setTotalSelectedCheckboxes}
                noOfChecked={noOfChecked}
                />
        </div>
        
        {Loading===true && 
        <div >
          <Popup sucess="item added successfully"  setLoading={setLoading} />
        </div>}

    </div>
    
    
  )
}

export default Todo