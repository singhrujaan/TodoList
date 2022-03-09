
import React from 'react';
import Modal from 'react-modal';
import {  useDispatch } from 'react-redux';
import {toastmsg} from './ToastSlice';
import {
  add,
} from './TodoSlice';
const ModalComponent = ({clearlist,setLoading,IsOpen,setIsOpen,input,setInput,title,closeModal}) => {
    
  
  const dispatch = useDispatch();

  
  const yesSubmitHandler = ()=>{
    dispatch(add(input));
    closeModal();
    setLoading(true);
    dispatch(toastmsg('item added successfully'))
    clearlist();
    setTimeout(() => {
      setLoading(false);
      
    }, 4000);
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
      ariaHideApp={false}
       isOpen={IsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
      <div style={{display:'flex'}}>
        <h2 >Are you sure you want to add an item?</h2>
        <span onClick={closeModal} style={{cursor:'pointer'}}>X</span>
      </div>
      <div style={{display:'flex',justifyContent:'space-around'}}> 
          <button onClick={yesSubmitHandler} style={{paddingInline:'20px',paddingBlock:'5px',fontSize:'18px'}} >yes</button>
          <button onClick={closeModal} style={{paddingInline:'20px',paddingBlock:'5px',fontSize:'18px'}}>no</button>
      </div>

    </Modal>
    </div>
  )
}

export default ModalComponent;