import React from "react";
import { useSelector } from 'react-redux';
const Popup = ({sucess,setLoading,closeModal}) => {

  const msg = useSelector((state)=>state.toast.message);
  return (
    <div
      style={{
        color: "white",
        padding: "20px",
        position: "absolute",
        bottom: "0px",
        right: "0px",
        marginBottom: "10px",
        backgroundColor: "green",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          color: "red",
          cursor: "pointer",
        }}
      >
        X
      </div>
      <div>{msg}</div>
    </div>
  );
};

export default Popup;
