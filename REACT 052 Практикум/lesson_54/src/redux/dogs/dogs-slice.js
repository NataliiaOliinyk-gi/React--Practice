import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
    error: null
}

const request = (store) => {
    store.loading = true;
    store.error = null;
};

const failed = (store, { payload }) => {
    store.loading = false;
    store.error = payload;
};

const dogsSlice = createSlice({
    name: "dogs",
    initialState,
    reducers: {
        fetchDogsRequest: request,
        fetchDogsSuccess: (store, { payload }) => {
            store.loading = false;
            store.items = [...payload];
        },
        fetchDogsFailed: failed,
    }
});

export const {
    fetchDogsRequest,
    fetchDogsSuccess,
    fetchDogsFailed
} = dogsSlice.actions;

export default dogsSlice.reducer;