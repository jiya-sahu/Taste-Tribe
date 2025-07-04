import { createSlice } from "@reduxjs/toolkit";

const Searchslice = createSlice({
    name: "search",
    initialState: {
        query: "",
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.query = action.payload;
        },
    },
});

export const { setSearchQuery } = Searchslice.actions;
export default Searchslice.reducer;