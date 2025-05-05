import axios from "axios";

const dogInstance = axios.create({
    baseURL: "https://api.thedogapi.com/v1/breeds"
});

export const getDogsApi = async () => {
    const { data } = await dogInstance.get("/");
    return data;
};