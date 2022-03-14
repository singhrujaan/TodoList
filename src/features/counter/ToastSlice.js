import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message:"",
};



export const ToastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {

    toastmsg:(state,action)=>{
        state.message = action.payload;
    }

  },
});

export const { toastmsg } = ToastSlice.actions;



export default ToastSlice.reducer;