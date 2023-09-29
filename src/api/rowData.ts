import { axiosInternal } from "./rowData.api"

const endpoint = `/employees`

export const dbRows = {
    getAll: function(){
        return axiosInternal.get(endpoint)
    },
}