import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [{name:"",checked:false}],
  isModalOpen:false,
};



export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state,action) => {
      // console.log("state1",state.value,action.payload)
      // state.value = [...state.value,action.payload];
      const newTodo = {
        name:action.payload.name,
        checked: false
      }
      state.value.push(newTodo)
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

export const { add, del, incrementByAmount} = TodoSlice.actions;



export default TodoSlice.reducer;
