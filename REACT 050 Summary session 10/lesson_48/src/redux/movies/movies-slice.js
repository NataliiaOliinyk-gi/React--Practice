import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const moviesSlice = createSlice({
    name: "movies",
    initialState: [],
    reducers: {
        addMovie: {
            reducer: (store, { payload }) => [...store, payload],
            prepare: data => {
                return {
                    payload: {
                        ...data,
                        id: nanoid(),
                        createdAt: new Date().toISOString(),
                    }
                }
            }
        },

        deleteMovie: (store, { payload }) => store.filter(item => item.id !== payload),

        toggleFavorite: (store, { payload }) => {
            const movie = store.find(item => item.id === payload);
            movie.favorite = !movie.favorite;
        },
    }
});

export const { addMovie, deleteMovie, toggleFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;



// Пізніше, коли дані будуть використовуватись у компоненті, ти можеш знову створити об'єкт дати:
// const date = new Date(movie.createdAt);