export let errorRequest = (error: any) => {

    let res: any

    if (error.code === "ERR_NETWORK") {
        res = {
            data: null,
            status: error.response.status,
            statusText: error.response.statusTex,
            tag: null,
            resolve: false,
            error: ''
        }
        return res
    }

    if (error.code === "ECONNABORTED") {
        res = {
            data: null,
            status: 0,
            statusText: error.message,
            tag: null,
            resolve: false,
            error: ''
        }
        return res
    }

    if (error.code === "ERR_BAD_REQUEST") {

        res = {
            data: error.response.data ? error.response.data : null,
            status: error.response.status,
            statusText: error.response.statusText,
            tag: null,
            resolve: false,
            error: ''
        }
        return res

    }

    res = {
        data: null,
        status: 0,
        statusText: null,
        tag: null,
        resolve: false,
        error: ''
    }

    return res
}