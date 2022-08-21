import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    year: "",
    mooviesPages: 0,
    mooviesPage: 0,
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
        setMooviesPage: (state, action) => {
            state.mooviesPage = action.payload;
        },
        setMooviesPages: (state, action) => {
            state.mooviesPages = action.payload;
        },
    },
});

export const { setTitle, setYear, setMooviesPages, setMooviesPage } =
    moovieSlice.actions;
export default moovieSlice.reducer;
