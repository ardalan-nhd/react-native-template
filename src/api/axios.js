// This folder needs improvement though. For example adding a services folder.

import mainAxios from "axios"

const axios = mainAxios.create({
    baseURL: 'baseURL', // Recommended way is through environment variables
    headers: {
        'Accept': 'application/json'
    }
})

export default axios