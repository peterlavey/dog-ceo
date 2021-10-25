/* istanbul ignore file */
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://dog.ceo/api'
});

export const request = {
    get: (path)=> axiosInstance.get(path)
};