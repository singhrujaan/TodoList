

import React, { useState } from 'react';
import Modal from 'react-modal';
import {  useDispatch } from 'react-redux';
import {
  add,
} from './TodoSlice';
const ModalComponent = ({IsOpen,setIsOpen,input,title}) => {
    
  
  const dispatch = useDispatch();

  const closeModal=()=> {
    setIsOpen(false);
  }
  const yesSubmitHandler = ()=>{
    dispatch(add(input));
    closeModal();
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      
    },
    
  };
  return (
    <div>
      <Modal 
       isOpen={IsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
      <div style={{display:'flex'}}>
        <h1 >Are you sure you want to add an item?</h1>
        <span>X</span>
      </div>
      <div style={{display:'flex'}}> 
          <button onClick={yesSubmitHandler}>yes</button>
          <button onClick={closeModal}>no</button>
      </div>

    </Modal>
    </div>
  )
}

export default ModalComponent;