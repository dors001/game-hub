import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '96128351f7454a078463e18b39674425'
    }
})