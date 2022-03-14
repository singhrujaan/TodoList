import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkedContainer:[]
};



export const CompletedSlice = createSlice({
  name: 'check',
  initialState,
  reducers: {
    // add: (state, action) => {
    //   state.value = [action.payload, ...state.value,];
    // },
    toggleCheck:(state,action)=>{
        state.checkedContainer+= action.payload
    }

    

  },
});

export const { toggleCheck} = CompletedSlice.actions;



export default CompletedSlice.reducer;
