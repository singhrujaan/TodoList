import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message:"",
};



export const ToastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    // add: (state,action) => {
    //   console.log("state",state.value)
    //   state.value = [...state.value,action.payload];
    // },

    toastmsg:(state,action)=>{
        state.message = action.payload;
    }

  },
});

export const { toastmsg } = ToastSlice.actions;



export default ToastSlice.reducer;
