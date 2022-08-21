import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    year: "",
};

export const moovieSlice = createSlice({
    name: "moovies",
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setYear: (state, action) => {
            state.year = action.payload;
        },
    },
});

export const { setTitle, setYear } = moovieSlice.actions;
export default moovieSlice.reducer;
