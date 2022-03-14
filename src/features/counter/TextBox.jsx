import React from "react";
import styles from "./todo.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { add } from "./TodoSlice";
import { useRef ,forwardRef } from 'react';
import { useSelector } from "react-redux";

const TextBox = forwardRef(({openModal,setInput,input},ref) => {
  const value = useSelector((state)=>state.todo.value);
  const dispatch = useDispatch();
  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(add(input));
    }
  };

  const clearInput=()=>{
    ref.current.value="";

  }

  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        value={input}
        className={styles.input}
        style={{
          border: "none",
          backgroundColor: "white",
          color: "black",
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          borderRadius: "10px",
          width: "700px",
        }}
        placeholder="enter item"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => _handleKeyDown(e)}
        ref={ref}
      />

      <IoIosAddCircleOutline
        style={{
          padding: "10px 10px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "5px",
          border: "none",
        }}
        onClick={openModal}
      />
    </div>
  );
      })

export default TextBox;
