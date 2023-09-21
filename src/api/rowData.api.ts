import axios from "axios"

const BASE_URL = "https://www.ag-grid.com/example-assets"

export const axiosInternal = axios.create({
    baseURL: BASE_URL
})