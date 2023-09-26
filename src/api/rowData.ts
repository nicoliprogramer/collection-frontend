import { axiosInternal } from "./rowData.api"

const endpoint = `/employees`

export const rows = {
    getAll: function(){
        return axiosInternal.get(endpoint)
    },
}