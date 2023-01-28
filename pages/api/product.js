import instance from '../../utils/axios/instance'

export const index = async () => {
    const response = await instance({
        url: "product",
        method: "GET"
    })

    return response
}

export const detail = async (productID) => {
    const response = await instance({
        url: `product/show?product_id=${productID}`,
        method: "GET"
    })

    return response
}

export const addProduct = async (data) => {
    const response = await instance({
        url: "product/store",
        method: "POST",
        data: data
    })

    return response
}

export const update = async (data) => {
    const response = await instance({
        url: "product/update",
        method: "POST",
        data: data
    })

    return response
}

export const delProduct = async (productID) => {
    const response = await instance({
        url: `product/${productID}`,
        method: "DELETE"
    })

    return response
}