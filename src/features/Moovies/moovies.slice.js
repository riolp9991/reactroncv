import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    year: "",
    mooviesPages: 0,
    mooviesPage: 0,
    currentMoovieID: -1,
    videoLink: "",
    subtitleLink: "",
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
        setCurrentMoovieId: (state, action) => {
            state.currentMoovieID = action.payload;
        },
        setVideoLink: (state, action) => {
            state.videoLink = action.payload;
        },
        setSubtitleLink: (state, action) => {
            state.subtitleLink = action.payload;
        },
    },
});

export const {
    setTitle,
    setYear,
    setMooviesPages,
    setMooviesPage,
    setCurrentMoovieId,
    setVideoLink,
    setSubtitleLink,
} = moovieSlice.actions;
export default moovieSlice.reducer;
