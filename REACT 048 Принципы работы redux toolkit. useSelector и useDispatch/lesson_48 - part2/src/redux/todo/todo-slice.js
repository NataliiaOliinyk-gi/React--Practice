import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (store, { payload }) => [...store, payload],
            prepare: data => {
                return {
                    payload: {
                        id: nanoid(),
                        completed: false,
                        ...data,
                    }
                }
            }
        },

        deleteTodo: (store, { payload }) =>
            store.filter((item) => item.id !== payload),

        toggleTodoCompleted: (store, { payload }) => {
            const todo = store.find((item) => item.id === payload);
            todo.completed = !todo.completed;
        },
    },
});


export const { addTodo, deleteTodo, toggleTodoCompleted } = todoSlice.actions;

export default todoSlice.reducer;