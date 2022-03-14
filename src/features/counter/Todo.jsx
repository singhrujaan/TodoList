import React, { useState,useRef  } from "react";
import { useSelector} from "react-redux";
import List from "./List";
import ModalComponent from "./ModalComponent";
import TextBox from "./TextBox";
import Popup from "./Popup";

const Todo = () => {
  const [input, setInput] = useState("");

  const [IsOpen, setIsOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [editIndex, setEditIndex] = useState();
  // const check = useSelector((state) => state.checked.value);
  const value = useSelector((state) => state.todo.value);
  const ref = useRef();
  const openModal = () => {
    input.length < 1 ? alert("field required") : setIsOpen(true);
  };

  const noOfChecked = (checked) => {
    return checked;
  };
  const editInput = (index) => {
    setInput(value[index]);
    console.log("index", index);
    setEditIndex(index);
  };
  const clearInput=()=>{
        
    // console.log( "ref1",inputRef.current.value);
    ref.current.value="";
    
  }
  const closeModal=()=> {
    setIsOpen(false);
  }

  // const completedItems =  useSelector((state) => 
  //             state.completed.checkedContainer.filter((complete)=>complete=== true));

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        width: "100vw",
      }}
    >
      <div style={{ color: "white" }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "green",
            borderRadius: "10px",
            position: "fixed",
          }}
        >

          {/* <div>{completedItems}</div> */}

          <TextBox ref={ref} input={input} setInput={setInput} openModal={openModal} />
        </div>

        <div>
          <ModalComponent
          clearlist={()=>clearInput()} 
          closeModal={closeModal}
            setEditIndex={setEditIndex}
            editIndex={editIndex}
            Loading={Loading}
            setLoading={setLoading}
            IsOpen={IsOpen}
            setIsOpen={setIsOpen}
            input={input}
            setIsInput={setInput}
          />
        </div>

        <List
          editInput={(index) => editInput(index)}
          noOfChecked={noOfChecked}
          setLoading={setLoading}
          setIsOpen={setIsOpen}
        />
      </div>

      {Loading === true && (
        <div>
          <Popup setLoading={setLoading} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default Todo;
