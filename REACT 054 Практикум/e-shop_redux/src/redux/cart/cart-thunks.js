import { createAsyncThunk } from "@reduxjs/toolkit";

import { createCartApi, getCartByIdApi } from "../../shared/api/cart-api"

export const fetchCreateCart = createAsyncThunk(
    'cart/fetchCreateCart',
    async (_, { rejectWithValue }) => {
        const { data, error } = await createCartApi();
        if (data) return data._id;
        return rejectWithValue(error?.responce?.data?.message);
    }
);

export const fetchGetCart = createAsyncThunk(
    'cart/fetchCart',
    async (_, { rejectWithValue, getState }) => {
        const { cart } = getState();
        const { data, error } = await getCartByIdApi(cart.cartId);
        if (data) return data.items;
        return rejectWithValue(error?.responce?.data?.message);
    }
);

