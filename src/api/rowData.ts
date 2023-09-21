import { axiosInternal } from "./rowData.api"

const endpoint = `/row-data.json`

export const rows = {
    getAll: function(){
        return axiosInternal.get(endpoint)
    },
}