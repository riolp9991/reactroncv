import create from "zustand";

const useMoovieStore = create((set) => {
    searchTitle: "";
    searchYear: "";
    setTitle: (value) => set((_) => (searchTitle = value));
    setYear: (value) => set((_) => (searchYear = value));
});
