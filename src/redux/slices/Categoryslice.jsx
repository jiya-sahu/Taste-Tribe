import { createSlice } from "@reduxjs/toolkit";

const Categoryslice = createSlice({
    name: "category",
    initialState: {
        category: "All"
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        clearCategory: (state) => {
            state.category = [];
        }
    }
})

export const { setCategory, clearCategory } = Categoryslice.actions;
export default Categoryslice.reducer;