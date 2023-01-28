import instance from '../../utils/axios/instance'

export const login = async (data) => {
    const response = await instance({
        url: "login",
        method: "POST",
        data: data
    })

    return response
}

export const logout = async () => {
    const response = await instance({
        url: "logout",
        method: "POST",
    })

    return response
}