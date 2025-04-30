import { configureStore } from '@reduxjs/toolkit';

import expenseReducer from './expenses/expenses-slice';

const store = configureStore({
    reducer: {
        expenses: expenseReducer
    }
})

export default store;