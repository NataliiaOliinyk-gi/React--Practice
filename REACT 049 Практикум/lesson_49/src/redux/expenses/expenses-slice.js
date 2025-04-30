import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "expenses",
    initialState: [],
    reducers: {

        addExpense: {
            prepare: (data) => {
                return {
                    payload: {
                        id: nanoid(),
                        ...data
                    }
                }
            },
            reducer: (store, { payload }) => [...store, payload]
        },

        deleteExpense: (store, { payload }) =>
            store.filter(item => item.id !== payload)
    }
});

export const { addExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;