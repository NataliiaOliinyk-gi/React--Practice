import { configureStore } from "@reduxjs/toolkit";

import dogsReducer from "./dogs/dogs-slice";

const store = configureStore({
    reducer: {
        dogs: dogsReducer
    }
});

export default store;