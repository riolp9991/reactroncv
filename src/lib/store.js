import { configureStore } from "@reduxjs/toolkit";
import mooviesReducer from "../features/Moovies/moovies.slice";

export const store = configureStore({
    reducer: {
        moovies: mooviesReducer,
    },
});
