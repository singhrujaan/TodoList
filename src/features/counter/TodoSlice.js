import { createSlice } from '@reduxjs/toolkit';
// import { useEffect } from 'react';

const initialState = {
  value: [],
  isModalOpen:false
};



export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state,action) => {
      console.log("state",state.value)
      state.value = [...state.value,action.payload];
        // localStorage.setItem('item',JSON.stringify(state.value));
    },

    del: (state,action) => {
      state.value= state.value.filter((items,index)=>{
        if (index!==action.payload) 
        {return (items)} 
        return null
    })
    },
    

    modalOpen:(state)=>{
      state.isModalOpen= true;
    },

    modalClose:(state)=>{
      state.isModalOpen= false;
    },

    // edit: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { add, del, incrementByAmount } = TodoSlice.actions;



export default TodoSlice.reducer;
