import backendInstance from "./backendInstance";

import requestDecorator from "./requestDecorator";

export const createCartApi = requestDecorator(async () => {
    const { data } = await backendInstance.post("/carts");
    return data;
})

export const getCartByIdApi = requestDecorator(async (id) => {
    const { data } = await backendInstance.get(`/carts/${id}`);
    return data;
})