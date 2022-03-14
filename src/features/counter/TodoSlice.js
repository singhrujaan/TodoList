import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  isModalOpen: false,
  checked: 0
};



export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = [action.payload, ...state.value,];
    },

    del: (state, action) => {
      state.value = state.value.filter((items, index) => {
        if (index !== action.payload) { return (items) }
        return null
      })
    },

    edit: (state, action) => {
      state.value.map((item, index) => {
        console.log("edit dispatch index", item)
        if (index === action.payload.index) {
          console.log('itemindex', item, index, action.payload.index)

          state.value[action.payload.index] = action.payload.input;


        }
        return null;
      })
    },

    

  },
});

export const { add, del, edit } = TodoSlice.actions;



export default TodoSlice.reducer;
