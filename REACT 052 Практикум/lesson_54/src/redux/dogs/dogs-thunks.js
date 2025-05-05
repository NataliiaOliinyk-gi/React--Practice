
import { fetchDogsRequest, fetchDogsSuccess, fetchDogsFailed } from "./dogs-slice";

import { getDogsApi } from "../../api/dog-api";

export const fetchDogs = () => {
    const func = async dispatch => {
        try {
            dispatch(fetchDogsRequest());
            const data = await getDogsApi();
            dispatch(fetchDogsSuccess(data))
        } catch (error) {
            dispatch(fetchDogsFailed(error?.responce?.data?.message))
        }
    };

    return func
};