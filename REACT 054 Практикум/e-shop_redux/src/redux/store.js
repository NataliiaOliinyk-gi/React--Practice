import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from 'redux-persist/lib/storage'

import cartReducer from "./cart/cart-slice";

const cartPersistConfig = {
    key: 'cart',
    storage: storage,
    whitelist: ['cartId']
}

export const store = configureStore({
    reducer: {
        cart: persistReducer(cartPersistConfig, cartReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
