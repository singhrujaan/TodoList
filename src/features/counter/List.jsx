
import { useDispatch, useSelector } from "react-redux"
import {del} from './TodoSlice';
  import { MdDelete } from 'react-icons/md';
import{AiOutlineEdit} from 'react-icons/ai'
import ModalComponent from "./ModalComponent";

const List = ({IsOpen,setIsOpen}) => {
    const value = useSelector((state)=>state.todo.value);
    const dispatch = useDispatch();
   
  //  const deleteHandler=(index)=>{
  //   dispatch(del(index))

  //  }
   const openModal=(index)=> {
    // setIsOpen(true);
    dispatch(del(index))
  }

   const current = new Date();
   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   console.log(date)

  return (
    <div style={{backgroundColor:'purple',fontWeight:'bold',fontSize:'30px',display:'flex',flexDirection:'column',justifyContent:'center',margin:'44px 44px',
    borderRadius:'15px',
    width: 'auto',
    height: 'auto',
    overflow: 'hidden',
    }}>
 
   {
       value.length >0 &&value.map((item,index)=>{
       return(
        <div style={{color:'white',margin:'10px',borderRadius:'5px'}} key={index}>
        <li  style={{listStyle:"none",border:'1px solid red',height:'50px'}} >
        
           {item}<AiOutlineEdit style={{marginLeft:'15px',color:'green'}} />
           <MdDelete onClick={()=>{openModal(index)}} style={{marginLeft:'25px',color:'red'}}></MdDelete>
        <span style={{fontSize:'15px',margin:'20px',color:'grey'}}>{date}</span>
        <input type="checkbox"/>
        </li>
        </div>
        )
      })
    }
       
    <ModalComponent IsOpen={IsOpen} setIsOpen={setIsOpen} />
       
    </div>
  )
}

export default List