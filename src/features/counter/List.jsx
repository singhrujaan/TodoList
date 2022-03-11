
import { useDispatch, useSelector } from "react-redux"
import {del} from './TodoSlice';
import {toastmsg} from './ToastSlice';
  import { MdDelete } from 'react-icons/md';
import{AiOutlineEdit} from 'react-icons/ai'
import ModalComponent from "./ModalComponent";
import {  Link } from "react-router-dom";
import { useState } from "react";
const List = ({IsOpen,setIsOpen,setLoading}) => {
    const value = useSelector((state)=>state.todo.value);
    console.log("value1",value)
    const dispatch = useDispatch();
    // const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = useState(0);
    const [isChecked, setisChecked] = useState(0);
  //  const deleteHandler=(index)=>{
  //   dispatch(del(index))
  //  }
   const openModal=(index)=> {
    // setIsOpen(true);
    setLoading(true);
    dispatch(del(index));
    dispatch(toastmsg('deleted succesfully'))
    setTimeout(() => {
      setLoading(false);
      
    }, 4000);
  }

   const current = new Date();
   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   
  const handleChk=(e)=>{
    const checked = e.target.checked;
    console.log('check',checked)
    if (checked){
      // dispatch(checkTrueCount);
    }
    else{
      // dispatch(checkFalseCount);
    }
    // setTotalSelectedCheckboxes(document.querySelectorAll('input[type=checkbox]:checked').length);
    
  }
//   useEffect(() => {
//     handleChk();
// }, [totalSelectedCheckboxes]);
// console.log(totalSelectedCheckboxes);

   return (
    <div style={{backgroundColor:'purple',fontWeight:'bold',fontSize:'30px',display:'flex',flexDirection:'column',justifyContent:'center',margin:'44px 44px',
    borderRadius:'15px',
    width: 'auto',
    height: 'auto',
    overflow: 'hidden',
    }}>
      <span style={{fontFamily:'sans-serif',fontSize:'1.5rem'}}>Checked:{}</span>
   {
     value.length>0? value.map((item,index)=>{
       return(
         <div key={index}style={{color:'white',margin:'10px',borderRadius:'5px',border:'1px solid red',padding:'28px'}}>
        <li  style={{listStyle:"none",height:'50px'}} >
          {/* {console.log("item90",item,typeof item,item.length,item.name.slice(0,9))} */}
          {item.length>10? <Link to={`/about/${index}`} >{item.name.slice(0,9)}...</Link>:<div>{item.name}</div>}
          
         {item.name.length>10? <Link to="/About"/>:"helo"} 
           <AiOutlineEdit style={{color:'green'}} />
           <MdDelete onClick={()=>{openModal(index)}} style={{marginLeft:'25px',color:'red'}}></MdDelete>
        <span style={{fontSize:'15px',margin:'20px',color:'grey'}}>{date}</span>
        <input type="checkbox" value={index} onChange={(e)=>handleChk(e)}/>
        </li>
        </div>
        )
      }) : <div>No items found</div>
    }
       
    <ModalComponent IsOpen={IsOpen} setIsOpen={setIsOpen} />
       
    </div>
  )
}
 
export default List