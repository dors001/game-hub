import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '96128351f7454a078463e18b39674425'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
                .get<FetchResponse<T>>(this.endpoint, config)
                .then(res => res.data);
    };

    getGame = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data);
    };
}

export default APIClient

