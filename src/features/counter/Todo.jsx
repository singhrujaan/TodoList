import React,{ useState,useRef } from "react"
import List from "./List";
import ModalComponent from "./ModalComponent";
import TextBox from "./TextBox";
import Popup from "./Popup";


const Todo = () => {
  const ref = useRef();
    const [input, setInput] = useState("");
    const [IsOpen, setIsOpen] = useState(false);
    const [Loading, setLoading] = useState(false);
    // const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = useState(0);

    const closeModal=()=> {
      setIsOpen(false);
    }
   
   
    const openModal=()=> {
       (input.length<1)?
        alert('field required')
      :
      setIsOpen(true);
     
    }


    const noOfChecked=(checked)=>{
      return(checked)
    }

    const clearInput=()=>{
        
      // console.log( "ref1",inputRef.current.value);
      ref.current.value="";
      
    }

  return (
    
      <div  className="container" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:'5px',height:'100vh',width:'100vw',backgroundColor:'black'}}>
        <div style={{color:'white'}}>
             

              <div style={{display:"flex",backgroundColor:'white',borderRadius:'10px'}}>
                <TextBox  ref={ref} input={input} setInput={setInput} openModal={()=>openModal()}/>
                </div>

                <div>
                <ModalComponent clearlist={()=>clearInput()} closeModal={closeModal} Loading={Loading}  setLoading={setLoading} IsOpen={IsOpen} setIsOpen={setIsOpen} input={input} setIsInput={setInput}/>
                </div>

                <List 
                // totalSelectedCheckboxes={totalSelectedCheckboxes} setTotalSelectedCheckboxes={setTotalSelectedCheckboxes}
                noOfChecked={noOfChecked}
                setLoading={setLoading}
                setIsOpen={setIsOpen}
                />
        </div>
        
        {Loading===true && 
        <div >
          <Popup setLoading={setLoading} closeModal={closeModal} />
        </div>}

    </div>
    
    
  )
}

export default Todo