import axios from "axios";
import { publicRoutes } from "../enums/route.enum";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const requests = {
    get: (url: string, config?: any) => axios.get(url, config),
    post: (url: string, body: {}, config?: any) =>
        axios.post(url, body, config),
    put: (url: string, body: {}, config?: any) => axios.put(url, body, config),
    patch: (url: string, body: {}, config?: any) =>
        axios.patch(url, body, config),
    delete: (url: string, config?: any) => axios.delete(url, config)
};

export const apiConstants = {
    apiEndPoint: apiBaseUrl,
    login: "/login"
};

export const apiRequestUrls = {
    login: apiBaseUrl + publicRoutes.login
};
