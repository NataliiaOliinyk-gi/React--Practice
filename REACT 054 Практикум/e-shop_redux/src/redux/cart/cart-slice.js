import { createSlice } from "@reduxjs/toolkit";

import { fetchCreateCart, fetchGetCart } from "./cart-thunks";

const initialState = {
    items: [],
    loading: false,
    error: null,
    cartId: null
};

const pending = (store) => {
    store.loading = true;
    store.error = null;
};

const rejected = (store, { payload }) => {
    store.loading = false;
    store.error = payload;
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    // reducers: {}
    extraReducers: (bilder) => {
        bilder
            .addCase(fetchCreateCart.pending, pending)
            .addCase(fetchCreateCart.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.cartId = payload;
            })
            .addCase(fetchCreateCart.rejected, rejected)
            .addCase(fetchGetCart.pending, pending)
            .addCase(fetchGetCart.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.items = [...payload]
            })
            .addCase(fetchGetCart.rejected, rejected)
    }
});

export default cartSlice.reducer;
