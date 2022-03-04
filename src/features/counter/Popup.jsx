import React from 'react'

const Popup = ({sucess,setLoading}) => {
  return (
    <div style={{color:'white',padding:'20px',position:"absolute",bottom:"0px",right:"0px",marginBottom:"10px",backgroundColor:'green',borderRadius:"5px"}}>
        <div style={{position:'relative',display:"flex",justifyContent:"flex-end",color:'red',cursor:'pointer'}}>X</div>
        <div>{sucess}</div>
    </div>
  )
}

export default Popup