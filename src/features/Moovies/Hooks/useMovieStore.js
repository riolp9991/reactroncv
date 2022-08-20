import create from "zustand";

const useMoovieStore = create((set) => ({
    searchTitle: "Hola Mundo",
    searchYear: "",
    setTitle: (value) => set((_) => ({ searchTitle: value })),
    setYear: (value) => set((_) => ({ searchYear: value })),
}));

export default useMoovieStore;
